import { FC } from "react";
import {
  MARK_BOLD,
  NODE_HEADING,
  NODE_PARAGRAPH,
  MARK_ANCHOR,
  NODE_UL,
  render,
  MARK_LINK,
  NODE_OL,
} from "storyblok-rich-text-react-renderer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Headline from "./Headline";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { StoryblokRichtext } from "@/utils/storyblok-types.generated";
import Image from "next/image";
import Circle2Draw from "@/assets/ilustrations/circle-2-draw.svg";
import ThreeRightArrowsDraw from "@/assets/ilustrations/three-right-arrows.svg";
import UnderlineYellow from "@/assets/ilustrations/underline-yellow-draw.svg";

interface Props {
  className?: {
    bold?: string;
    container?: string;
    heading?: string;
    paragraph?: string;
    unorderedList?: string;
    link?: string;
    anchor?: string; // Optional className for anchor styling
  };
  richText: StoryblokRichtext;
}

const RichText: FC<Props> = ({ className = {}, richText }) => {
  const { bold, container, heading, paragraph, anchor, unorderedList, link } = className;

  const content = render(richText, {
    markResolvers: {
      [MARK_BOLD]: (c) => <strong className={bold}>{c}</strong>,
      [MARK_ANCHOR]: (c, { id }) => {
        if (!id) return <span className={anchor}>{c}</span>;

        // Normalize id and support both "decor:<kind>" and plain "<kind>"
        const normalize = (str: string) =>
          str.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");

        const raw = id.includes(":") ? id.split(":").pop() || id : id;
        const k = normalize(raw);

        const isCircle = ["circle", "circulo"].includes(k);
        const isArrows = ["arrows", "setas", "flechas"].includes(k);
        const isUnderline = ["underline", "sublinhado", "risco", "risk"].includes(k);

        if (isCircle) {
          return (
            <span className={cn("relative inline-block", anchor)}>
              <span className="relative z-10">{c}</span>
              <Image
                src={Circle2Draw}
                alt=""
                className="absolute pointer-events-none select-none -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[150%] min-w-[120px]"
              />
            </span>
          );
        }
        if (isArrows) {
          return (
            <span className={cn("relative inline-block", anchor)}>
              <Image
                src={ThreeRightArrowsDraw}
                alt=""
                aria-hidden
                className="absolute pointer-events-none select-none -z-10 -left-[80px] top-[15px] w-[96px] md:w-[112px]"
              />
              <span className="relative z-10">{c}</span>
            </span>
          );
        }
        if (isUnderline) {
          return (
            <span className={cn("relative inline-block", anchor)}>
              <span className="relative z-10">{c}</span>
              <Image
                src={UnderlineYellow}
                alt=""
                aria-hidden
                className="absolute pointer-events-none select-none -z-10 -bottom-[30px] left-0 w-[140%] md:w-[160%] rotate-[2deg]"
              />
            </span>
          );
        }

        // Default anchor behavior (non-decorative)
        return (
          <a className={cn("underline", anchor)} href={`#${id}`}>
            {c}
          </a>
        );
      },
      [MARK_LINK]: (children, props) => {
        const { linktype, href } = props;
        if (!href) return <a href="#">{children}</a>;

        if (linktype === "email") {
          // Email links: add `mailto:` scheme and map to <a>
          return <a href={`mailto:${href}`}>{children}</a>;
        }
        if (href.match(/^(https?:)?\/\//)) {
          // External links: map to <a>
          return (
            <a href={href} target="_blank" className={link}>
              {children}
            </a>
          );
        }
        return <Link href={href}>{children}</Link>;
      },
    },
    nodeResolvers: {
      [NODE_HEADING]: (c, { level }) => {
        // Generate an HTML id from the heading text
        // This id is used for anchor links
        return (
          <Headline className={heading} element={`h${level}`}>
            {c}
          </Headline>
        );
      },
      [NODE_PARAGRAPH]: (c) => {
        const isEmpty =
          !c ||
          (Array.isArray(c) &&
            c.every((child) => (typeof child === "string" ? child.trim() === "" : false)));

        return isEmpty ? <br /> : <p className={cn("mb-2", paragraph)}>{c}</p>;
      },

      [NODE_UL]: (c) => (
        <ul className={cn("mb-4 mt-4 pl-6 [&>li]:list-disc", unorderedList)}>{c}</ul>
      ),
      [NODE_OL]: (c) => (
        <ol
          className={cn(
            "mb-4 mt-4 pl-4 [&>li]:list-decimal [&_li]:marker:font-bold [&_li>p]:m-0",
            unorderedList
          )}
        >
          {c}
        </ol>
      ),
    },
    defaultBlokResolver: (name, props) => {
      const blok = { ...props, component: name };
      return <StoryblokServerComponent blok={blok} key={props._uid} />;
    },
  });

  return <div className={container}>{content}</div>;
};

export const richTextHasContent = (richText?: StoryblokRichtext) => {
  if (!richText) return false;
  return !!(richText && richText.content?.some((c) => c.content));
};

/**
 * Replace all occurrences of a wildcard in a rich text component
 */
export const replaceWildCard = (
  richText: StoryblokRichtext,
  wildcardIdentifier: string,
  replacement: string
): StoryblokRichtext => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const replaceName = (obj: any) => {
    if (Array.isArray(obj)) {
      obj.forEach((item) => replaceName(item));
    } else if (typeof obj === "object") {
      for (const key in obj) {
        if (typeof obj[key] === "string") {
          obj[key] = obj[key].replace(wildcardIdentifier, replacement);
        } else {
          replaceName(obj[key]);
        }
      }
    }
  };

  const richTextCopy = JSON.parse(JSON.stringify(richText));
  replaceName(richTextCopy) as unknown as StoryblokRichtext;
  return richTextCopy;
};

export default RichText;

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
      [MARK_ANCHOR]: (c, { id }) => (
        <a className={cn("underline", anchor)} href={`#${id}`}>
          {c}
        </a>
      ),
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

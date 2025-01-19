import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface Props {
  id?: string;
  children?: ReactNode;
  className?: string;
  element: Element;
  visualElement?: Element;
}

const getStyles = (element: Element) => {
  switch (element) {
    case "h1":
      return `text-3xl md:text-4xl md:leading-10 font-medium leading-9`;

    case "h2":
      return `font-medium text-3xl md:text-4xl leading-9`;

    case "h3":
      return `font-medium text-2xl md:text-3xl`;

    case "h4":
      return `font-medium text-lg md:text-2xl`;

    case "h5":
      return `font-medium text-lg`;

    case "h6":
      return `font-medium text-base`;
  }
};

const Headline: FC<Props> = ({ id, children, className, element, visualElement }) => {
  const Element = element;

  return (
    <Element id={id} className={cn(getStyles(visualElement || element), className)}>
      {children}
    </Element>
  );
};

export default Headline;

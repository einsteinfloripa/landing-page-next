import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import { FC, Fragment } from "react";
import { Blok } from "@/utils/types";

interface Props {
  blok: Blok<{
    sections: Blok<SbBlokData[]>[];
  }>;
}

const GenericPage: FC<Props> = ({ blok }) => {
  return (
    <Fragment>
      {blok.sections.map((component, index) => (
        <StoryblokComponent key={index} blok={component} />
      ))}
    </Fragment>
  );
};

export default GenericPage;

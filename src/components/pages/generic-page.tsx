import { SbBlokData, StoryblokComponent } from "@storyblok/react";
import { FC, Fragment } from "react";
import { Blok } from "@/utils/types";
import { StoryblokPagina } from "@/utils/storyblok-types.generated";

const GenericPage = ({ blok }: Blok<StoryblokPagina>) => {
  return (
    <Fragment>
      {blok.body.map((component, index) => (
        <StoryblokComponent key={index} blok={component} />
      ))}
    </Fragment>
  );
};

export default GenericPage;

import { StoryblokHeader } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import Header from "../molecules/header";

const SbHeader = ({ blok }: Blok<StoryblokHeader>) => {
  const { logo, links, acoes } = blok;

  return (
    <Header
      links={links.map((l) => ({
        link: l.link,
        title: l.button[0].title,
      }))}
      logo={logo}
      acoes={acoes}
    />
  );
};

export default SbHeader;

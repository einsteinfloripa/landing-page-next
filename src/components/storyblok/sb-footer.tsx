import { StoryblokFooter, StoryblokPagina } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import Footer from "../molecules/footer";

interface Props extends Blok<StoryblokFooter> {
  corDoFooter?: StoryblokPagina["corDoFooter"];
}

const SbFooter = ({ blok, corDoFooter }: Props) => {
  const { logo, title, social, linkscol, copyright } = blok;

  return (
    <Footer
      logo={logo!}
      title={title!}
      social={social?.map((item) => ({
        label: item.label ?? item.name,
        link: item.link,
        component: "label+link",
        _uid: item._uid,
        image: item.image,
      }))}
      linkscol={linkscol}
      copyright={copyright!}
      corDoFooter={corDoFooter}
    />
  );
};

export default SbFooter;

import { StoryblokFooter } from "@/utils/storyblok-types.generated";
import { Blok } from "@/utils/types";
import Footer from "../molecules/footer";

const SbFooter = ({ blok }: Blok<StoryblokFooter>) => {
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
    />
  );
};

export default SbFooter;

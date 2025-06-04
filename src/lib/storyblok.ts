import { components } from "@/app/layout";
import SbComponentNotFound from "@/components/storyblok/sb-component-not-found";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: components,
  apiOptions: {
    region: "us",
  },
  customFallbackComponent: SbComponentNotFound,
  enableFallbackComponent: true,
});

"use client";

import SbOferecemosCard from "@/components/storyblok/sb-oferecemos-card";

type Props = {
  cards: any[];
};

export default function OferecemosGrid({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
      {cards.map((card) => (
        <div key={card._uid} className="col-span-1">
          <SbOferecemosCard blok={card} />
        </div>
      ))}
    </div>
  );
}

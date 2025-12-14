"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SbOferecemosCard from "@/components/storyblok/sb-oferecemos-card";
import { getWebpVersionFromSBImage } from "@/lib/utils";

type Props = {
  cards: any[];
};

const getCols = (w: number) => (w >= 1280 ? 5 : w >= 1024 ? 3 : w >= 640 ? 2 : 1);

export default function OferecemosGrid({ cards }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cols, setCols] = useState<number>(5);
  const [exitingIndex, setExitingIndex] = useState<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handler = () => setCols(getCols(window.innerWidth));
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  // Pré-carrega imagens de fundo dos cards para hover instantâneo
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      cards.forEach((c) => {
        const img = (c as any).imagem || (c as any).Imagem || (c as any).image || (c as any).bg;
        const filename = img?.filename;
        if (!filename) return;
        const url = getWebpVersionFromSBImage(filename);
        const preload = new window.Image();
        preload.decoding = "async";
        preload.loading = "eager" as any;
        preload.src = url;
      });
    } catch (_) {
    }
  }, [cards]);

  const hiddenSet = useMemo(() => {
    if (hoveredIndex == null || cols < 3) return new Set<number>();
    const pos = hoveredIndex % cols;
    const rowStart = hoveredIndex - pos;
    const rowEnd = rowStart + cols - 1;

    const inRow = (i: number) => i >= rowStart && i <= rowEnd;

    let hidden: number[] = [];
    if (pos === 0) {
      hidden = [hoveredIndex + 1, hoveredIndex + 2].filter((i) => inRow(i));
    } else if (pos === cols - 1) {
      hidden = [hoveredIndex - 1, hoveredIndex - 2].filter((i) => inRow(i));
    } else {
      hidden = [hoveredIndex - 1, hoveredIndex + 1].filter((i) => inRow(i));
    }
    return new Set<number>(hidden);
  }, [hoveredIndex, cols]);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {cards.map((card, i) => {
        const isHovered = hoveredIndex === i; // permite hover também em 1-2 colunas
        const isHidden = hiddenSet.has(i);
        const isExiting = exitingIndex === i;

        return (
          <div
            key={card._uid}
            className={
              (isHovered
                ? "lg:col-span-3 xl:col-span-3 "
                : "col-span-1 ") +
              (isHidden ? " hidden " : " ") +
              " relative transition-all duration-500 ease-out"
            }
            onMouseEnter={() => {
              setExitingIndex(hoveredIndex);
              if (exitTimerRef.current) {
                window.clearTimeout(exitTimerRef.current);
              }
              exitTimerRef.current = window.setTimeout(() => {
                setExitingIndex(null);
              }, 220);
              setHoveredIndex(i);
            }}
          >
            <SbOferecemosCard blok={card} isHovered={isHovered} isExiting={isExiting} />

            {isHovered && cols >= 3 && (
              <div className="absolute inset-0 z-20 flex"
                   style={{
                     willChange: "transform",
                   }}
              >
                {Array.from({ length: 3 }).map((_, seg) => {
                  // Map segments to original indices within the row
                  const pos = i % cols;
                  const rowStart = i - pos;
                  const rowEnd = rowStart + cols - 1;
                  const inRow = (idx: number) => idx >= rowStart && idx <= rowEnd;

                  let targetIdx = i; // default self
                  if (pos === 0) {
                    targetIdx = seg === 0 ? i : seg === 1 ? i + 1 : i + 2;
                  } else if (pos === cols - 1) {
                    targetIdx = seg === 0 ? i - 2 : seg === 1 ? i - 1 : i;
                  } else {
                    targetIdx = seg === 0 ? i - 1 : seg === 1 ? i : i + 1;
                  }
                  if (!inRow(targetIdx)) targetIdx = i;

                  return (
                    <div
                      key={seg}
                      className="flex-1"
                      onMouseEnter={() => setHoveredIndex(targetIdx)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

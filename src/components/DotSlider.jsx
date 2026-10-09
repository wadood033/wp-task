import React, { useState } from "react";
import Slider from "react-slick";

// react-slick replaces the dots <ul> className with `dotsClass`, so the Tailwind classes go there.
export default function DotSlider({ bottom = "bottom-[24px]", dotW = "w-[19px]", gap = "gap-[5px]", children, ...settings }) {
  const [cur, setCur] = useState(0);
  return (
    <Slider
      dots
      infinite
      {...settings}
      beforeChange={(_, next) => setCur(next)}
      dotsClass={`absolute flex justify-center items-center inset-x-0 m-0 p-0 list-none ${gap} ${bottom}`}
      appendDots={(dots) => <ul>{dots}</ul>}
      customPaging={(i) => (
        <button aria-label={`Slide ${i + 1}`} className={`block ${dotW} h-[4px] p-0 ${i === cur ? "bg-white" : "bg-white/30"}`} />
      )}
    >
      {children}
    </Slider>
  );
}

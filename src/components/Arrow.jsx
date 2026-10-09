import React from "react";
import { img } from "../data";

export default function Arrow({ dir, onClick, cls = "" }) {
  return (
    <button onClick={onClick} aria-label={dir} className={`hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 ${cls}`}>
      <img src={img(dir === "left" ? "hero-slider-leftt-arrow.png" : "hero-slider-right-arrow.png")} alt="" />
    </button>
  );
}

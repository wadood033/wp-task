
import React from "react";
import { img, T, D, zzL, zzR } from "../data";
import Tex from "./Tex";

// Desktop/tablet: image is absolutely placed with a slanted edge, text block is a fixed narrow column.
const Row = ({ n, rev }) => (
  <article
    className={`relative isolate md:h-[198px] lg:h-[217px] ${
      rev ? "bg-brand2" : "bg-brand"
    }`}
  >
    <Tex />

    <img
      src={img(`zig-zag-img-${n}.png`)}
      alt=""
      className={`block w-full md:absolute md:top-0 md:h-full md:object-cover md:w-[52%] lg:w-[59.6%] ${
        rev ? `md:right-0 ${zzR}` : `md:left-0 ${zzL}`
      }`}
    />

    <div
      className={`px-[10px] py-[14px] md:p-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[37%] lg:w-[28.6%] ${
        rev
          ? "md:left-[4.8%] lg:left-[3.7%]"
          : "md:left-[59%] lg:left-[63.7%]"
      }`}
    >
      <h3 className="font-oswald font-normal uppercase text-[20px] leading-[1.1] m-0 mb-[10px]">
        {T}
      </h3>

      <p
        style={{ color: "#d1d5db" }}
        className="text-[13px] leading-[16px] m-0"
      >
        {D}
      </p>
    </div>
  </article>
);

export default function ZigZag() {
  return (
    <div className="mt-[42px] grid gap-[27px] md:gap-0">
      <Row n={1} />
      <Row n={2} rev />
    </div>
  );
}


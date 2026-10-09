

import { img, cards } from "../data";
import Tex from "./Tex";

export default function PostCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[27px] md:items-start">
      {cards.map(([t, d], i) => (
        <article key={i} className="relative isolate flex flex-col bg-brand">
          <Tex />

          <img
            src={img("post-img.png")}
            alt=""
            className="w-full block"
          />

          <div className="px-[10px] pt-[14px] pb-[12px] flex-1 min-h-[126px]">
            <h3 className="font-oswald font-normal uppercase text-[20px] leading-[1.1] m-0 mb-[10px]">
              {t}
            </h3>

            <p
              style={{ color: "#d1d5db" }}
              className="text-[13px] leading-[16px] m-0"
            >
              {d}
            </p>
          </div>

          <a
            href="#!"
            className="relative isolate block bg-brand2 text-center font-oswald uppercase text-[20px] h-[40px] leading-[40px]"
          >
            <Tex />
            Read More
          </a>
        </article>
      ))}
    </div>
  );
}

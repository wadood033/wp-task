import React from "react";
import { img } from "../data";
import DotSlider from "./DotSlider";
import Arrow from "./Arrow";

// 7 slides: desktop shows 4 (4 dots), mobile shows 1 (7 dots), like the designs
export default function ThumbSlider() {
  return (
    <div className="pb-[69px] border-b border-white/30 mb-[37px]">
      <div className="relative lg:px-[29px]">
        <DotSlider
          bottom="bottom-[-33px]"
          dotW="w-[15px]"
          infinite={false}
          speed={400}
          slidesToShow={4}
          slidesToScroll={1}
          prevArrow={<Arrow dir="left" cls="-left-[29px]" />}
          nextArrow={<Arrow dir="right" cls="-right-[29px]" />}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 3, arrows: false } },
            { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
          ]}
        >
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i}>
              <div className="bg-white/[0.08] p-[7px] mx-auto md:w-[146px] w-full">
                <img src={img("thubnail-slider-img.png")} alt="" className="w-full h-auto block" />
              </div>
            </div>
          ))}
        </DotSlider>
      </div>
    </div>
  );
}

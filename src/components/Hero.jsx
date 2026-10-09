
import { Fancybox } from "@fancyapps/ui";
import { img, VIDEO_URL } from "../data";
import DotSlider from "./DotSlider";
import Arrow from "./Arrow";

export default function Hero() {
  const play = (e) => {
    e.preventDefault();
    Fancybox.show([{ src: VIDEO_URL, type: "html5video" }], {
      Html5video: { autoplay: true },
    });
  };

  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero-bg.png)" }}
    >
      <div className="absolute inset-0 bg-[#0f4a29]/80" />

      <div className="relative">
        <DotSlider
          bottom="bottom-[30px] md:bottom-[46px]"
          dotW="w-[19px]"
          speed={500}
          slidesToShow={1}
          prevArrow={<Arrow dir="left" cls="left-[36px]" />}
          nextArrow={<Arrow dir="right" cls="right-[36px]" />}
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i}>
              <div className="max-w-[1013px] mx-auto px-[15px] md:px-[5%] lg:px-0 flex flex-col md:flex-row items-center md:min-h-[500px] pt-[10px] pb-[70px] md:py-0">
                <div className="order-1 md:order-2 md:w-[40%] flex justify-center md:justify-start">
                  <a
                    href="#watch"
                    onClick={play}
                    className="relative block"
                    aria-label="Play video"
                  >
                    <img
                      src={img("video-thumbnail-img.png")}
                      alt=""
                      className="w-[190px] md:w-[295px] h-auto block"
                    />

                    <span className="absolute left-[55%] top-[53%] -translate-x-1/2 -translate-y-1/2 w-[52px] h-[52px] md:w-[78px] md:h-[78px] rounded-full bg-[#0b3a26]/80 flex items-center justify-center">
                      <img
                        src={img("play-icon.png")}
                        alt=""
                        className="w-[19px] md:w-[29px] h-auto ml-[2px] md:ml-[3px]"
                      />
                    </span>
                  </a>
                </div>

                <div className="order-2 md:order-1 md:w-[60%] md:pl-0 md:max-[1199px]:-ml-[10%] lg:ml-0 lg:pl-[60px] mt-[20px] md:mt-0">
                  <h2 className="font-oswald font-medium uppercase text-[28px] md:text-[48px] leading-[1.2] md:leading-[1.08] m-0 md:max-w-[420px]">
                    Get ready for new adidas bands
                  </h2>

                  <p className="text-[16px] md:text-[18px] leading-[1.35] md:leading-[24px] mt-[18px] mb-0 md:max-w-[430px]">
                    Adidas tracks all begin with a starting gate and end with a
                    finish line, but everything in between varies from track to
                    track. Because no two tracks are alike, this action sport
                    keeps you on your toes wherever you are racing.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </DotSlider>
      </div>
    </section>
  );
}


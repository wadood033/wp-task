import React, { useState } from "react";
import { img } from "../data";
import Tex from "./Tex";

export default function TopBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="relative isolate bg-[#f5f5f5] px-[15px] py-[8px] text-[13px] uppercase leading-[29px] text-[#111] md:flex md:h-[46px] md:items-center md:justify-center md:py-0 font-medium">
      <Tex />
      <p className="m-0 pr-12 md:pr-0 md:text-center">
        Live race stream from Gator Nationals in Sarasota, FL /{" "}
        <a
          href="#watch"
          className="text-[#04522C] underline decoration-[#a5a5a5] decoration-[1px] underline-offset-[2px] font-medium"
        >
          Watch Now
        </a>
      </p>

      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Close announcement"
        className="absolute right-[15px] top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#04522C] md:right-[20px]"
      >
        <img
          src={img("x-mark.png")}
          alt=""
          className="h-3 w-3 object-contain"
        />
      </button>
    </div>
  );
}
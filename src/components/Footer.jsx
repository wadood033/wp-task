import React from "react";
import { img, links } from "../data";
import Tex from "./Tex";

export default function Footer() {
  return (
    <footer className="relative isolate bg-dark text-center pt-[22px] pb-[18px] px-[15px]">
      <Tex />
      <nav className="font-oswald uppercase text-[17px] flex flex-wrap justify-center items-center gap-x-[14px]">
        {links.map((l, i) => (
          <React.Fragment key={l}>
            <a href="#!">{l}</a>
            {i < 4 && <span>/</span>}
          </React.Fragment>
        ))}
      </nav>
      <div className="flex justify-center gap-[18px] my-[14px]">
        {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
          <a key={s} href="#!"><img src={img(`${s}-icon.png`)} alt={s} /></a>
        ))}
      </div>
      <p className="font-mont text-[13px] m-0">© copyright 2020 Adidas</p>
    </footer>
  );
}


import React, { useState } from "react";
import { img, links, para, paraL, titleWhite } from "../data";
import TopBar from "./TopBar";
import Tex from "./Tex";

const Search = ({ cls = "" }) => (
  <div className={`relative ${cls}`}>
    <input
      placeholder="SEARCH"
      className="w-full h-[37px] bg-dark/70 text-white/60 placeholder-white/50 font-oswald text-[15px] px-3 outline-none"
    />
    <img
      src={img("search-icon.png")}
      alt=""
      className="absolute right-3 top-1/2 -translate-y-1/2"
    />
  </div>
);

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
      <TopBar />

      <div className="relative isolate bg-dark">
        <Tex />

        <div className="max-w-[1013px] mx-auto flex items-center justify-between h-[60px] md:h-[55px] px-[15px] md:px-[5%] lg:px-0">
          <img
            src={img("logo.png")}
            alt="adidas"
            className="h-[28px] md:h-[34px]"
          />

          <div className="hidden md:flex gap-1">
            {["Membership", "Account"].map((t, i) => (
              <a
                key={t}
                href="#!"
                className={`${para} font-oswald uppercase text-[15px] px-[34px] h-[37px] leading-[37px] ${
                  i ? "bg-brand2" : "bg-light"
                }`}
              >
                {t}
              </a>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            <img src={img("burger-icon.png")} alt="" />
          </button>
        </div>
      </div>

      <div className="md:hidden grid grid-cols-2 bg-brand2 font-oswald uppercase text-[17px] text-center h-[40px] leading-[40px]">
        <a href="#!" className="bg-light">
          Membership
        </a>
        <a href="#!" className="border-l border-white">
          Account
        </a>
      </div>

      {menu && (
        <nav className="md:hidden relative isolate bg-brand2 min-h-[640px] px-[15px] pt-[10px]">
          <Tex />
          <Search cls="mb-[18px]" />

          {links.map((l, i) => (
            <a
              key={l}
              href="#!"
              className={`block font-oswald uppercase text-[18px] h-[60px] leading-[60px] pl-[20px] ${
                i === 0 ? `${paraL} bg-light w-[130px]` : ""
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
      )}

      <div className="hidden md:block relative isolate bg-brand2">
        <Tex />

        <div className="max-w-[1013px] mx-auto flex items-center justify-between h-[55px] px-[5%] lg:px-0">
          <ul className="flex flex-1 min-w-0 m-0 p-0 list-none">
            {links.map((l, i) => (
              <li key={l} className="shrink-0">
                <a
                  href="#!"
                  className={`block font-oswald uppercase text-[15px] lg:text-[16px] h-[55px] leading-[55px] px-[20px] lg:px-[25px] whitespace-nowrap ${
                    i === 0 ? `${para} bg-light` : ""
                  }`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <Search cls="w-[180px] lg:w-[200px] shrink-0 ml-[10px]" />
        </div>
      </div>

      <div className="hidden md:flex h-[91px] bg-brand relative isolate">
        <Tex />

        <div className="max-w-[1013px] mx-auto w-full flex items-center px-[5%] lg:px-0">
          <h1 className="font-oswald font-medium uppercase text-[48px] leading-none m-0">
            Home Page
          </h1>
        </div>

        <div
          className={`${titleWhite} absolute right-0 top-0 h-full w-[34%] bg-[#f5f5f5] flex flex-col items-center justify-center`}
        >
          <span className="font-oswald text-[12px] text-brand uppercase font-medium tracking-wide">
            Partnership by
          </span>
          <img src={img("reebok-logo.png")} alt="Reebok" />
        </div>
      </div>
    </header>
  );
}


import React from "react";
import { events } from "../data";
import Tex from "./Tex";

export default function Events() {
  return (
    <aside className="relative isolate bg-brand pb-[18px] self-start mt-[30px] md:mt-0">
      <Tex />
      <h3 className="relative isolate bg-brand2 font-oswald font-normal uppercase text-[20px] m-0 px-[16px] h-[44px] leading-[44px]">
        <Tex />
        Events
      </h3>

      <ul className="list-none m-0 p-0 pt-[8px]">
        {events.map(([a, b], i) => (
          <li key={a} className="flex items-center px-[16px] py-[7px]">
            <span className="w-[44px] h-[36px] bg-white text-[#0a7229] font-oswald font-semibold text-[22px] flex items-center justify-center mr-[8px] shrink-0">
              {i + 1}
            </span>

            <div>
              <a
                href="#!"
                className="font-oswald uppercase text-[16px] underline block leading-[20px]"
              >
                {a}
              </a>
              <span className="text-[14px] leading-[16px] text-[#d1d5db]">
                {b}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

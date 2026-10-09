
import React, { useState } from "react";
import { img } from "../data";
import Tex from "./Tex";

const countries = {
  USA: ["California", "Texas", "Florida", "New York"],
  Canada: ["Ontario", "Quebec", "Alberta", "British Columbia"],
  Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan"],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  India: ["Punjab", "Maharashtra", "Gujarat", "Rajasthan"],
};

const Field = ({ label, children, cls = "" }) => (
  <label className={`block ${cls}`}>
    <span className="block font-oswald uppercase text-[16px] mb-[6px]">
      {label}
    </span>
    {children}
  </label>
);

const inp =
  "w-full h-[32px] bg-[#f7f7f7] text-[#111] text-[14px] px-[10px] outline-none border-0 rounded-none";

const radio =
  "appearance-none w-5 h-5 m-0 rounded-full bg-white cursor-pointer outline-none checked:border-[5px] checked:border-white checked:bg-brand2";

export default function Contact() {
  const [country, setCountry] = useState("USA");
  const [state, setState] = useState("");

  const sel = {
    backgroundImage: `url(${img("dropdown-arrow.png")})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState("");
  };

  return (
    <section className="relative isolate bg-brand2 pt-[34px] pb-[40px] px-[15px] mt-[60px]">
      <Tex />

      <h2 className="font-oswald font-normal uppercase text-[28px] text-center m-0 mb-[14px]">
        Get in touch with us
      </h2>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-[493px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-[26px] gap-y-[16px]"
      >
        <Field label="Name">
          <input className={inp} placeholder="enter name" />
        </Field>

        <Field label="Email">
          <input
            type="email"
            className={inp}
            placeholder="enter email"
          />
        </Field>

        <Field label="Country">
          <select
            className={`${inp} appearance-none`}
            style={sel}
            value={country}
            onChange={handleCountryChange}
          >
            {Object.keys(countries).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="State">
          <select
            className={`${inp} appearance-none`}
            style={sel}
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="">Select state</option>
            {countries[country].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <div className="md:col-span-2">
          <span className="block font-oswald uppercase text-[16px] mb-[6px]">
            Gender
          </span>

          <div className="flex gap-[14px] text-[13px]">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-[6px]">
                <input
                  type="radio"
                  name="gender"
                  defaultChecked={g === "Female"}
                  className={radio}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        <Field label="Country" cls="md:col-span-2">
          <textarea
            placeholder="Message"
            className={`${inp} h-[80px] py-[8px] resize-none`}
          />
        </Field>

        <div className="md:col-span-2 text-center">
          <button className="bg-dark font-roboto font-medium text-[12px] uppercase w-[146px] h-[32px]">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}


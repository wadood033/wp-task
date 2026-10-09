import React from "react";

// pattern-bg.png is a semi-transparent grey texture (its alpha channel carries the pattern).
// Layered at full strength over the parent's solid colour, it gives the mottled,
// colour-tinted background. Parent needs: relative isolate + a bg-* colour class.
export default function Tex() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none"
      style={{ backgroundImage: "url(/images/pattern-bg.png)", backgroundRepeat: "repeat" }}
    />
  );
}

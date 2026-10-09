import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThumbSlider from "./components/ThumbSlider";
import PostCards from "./components/PostCards";
import ZigZag from "./components/ZigZag";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tex from "./components/Tex";

export default function App() {
  return (
    <>
      {/* whole-page background: pattern-bg + light grey shade */}
      <div className="relative isolate font-roboto text-white bg-dark min-h-screen">
        <Tex />
        <Header />
        <Hero />
        <main className="max-w-[1013px] mx-auto px-[15px] md:px-0 pt-[28px] md:pt-[70px] grid md:grid-cols-[1fr_233px] md:gap-x-[10px] lg:gap-x-[27px]">
          <div className="min-w-0">
            <ThumbSlider />
            <PostCards />
            <ZigZag />
          </div>
          <div className="md:row-start-1 md:col-start-2">
            <Events />
          </div>
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

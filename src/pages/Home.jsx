import Hero from "../components/hero";
import About from "../components/about";
import Faq from "../components/faq";
import Calltoaction from "../components/calltoaction";
import Contact from "../components/contact";

import Lenis from "lenis";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Faq />
      <Calltoaction />
      <Contact />
    </div>
  );
}

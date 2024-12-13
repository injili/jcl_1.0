import Hero from "../components/hero";
import About from "../components/about";
import Certs from "../components/certs";
import Faq from "../components/faq";
import Calltoaction from "../components/calltoaction";
import Contact from "../components/contact";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Certs />
      {/* <Faq />
      <Calltoaction />
      <Contact /> */}
    </div>
  );
}

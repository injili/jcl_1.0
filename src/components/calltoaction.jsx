import theImage from "../assets/img/cta-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Calltoaction() {
  return (
    <div
      className="bg-fixed bg-cover"
      style={{ backgroundImage: `url(${theImage})` }}
    >
      <div className="  py-12 p-6 sm:p-8  md:p-16 lg:p-24 xl:p-24 flex flex-col gap-4 text-white items-center justify-center bg-black backdrop-blur-sm bg-opacity-30 h-full">
        <h4 className="font-alata text-center font-alata text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-secondary">
          ELEVATE YOUR PRINTING EXPERIENCE
        </h4>
        <p className="text-center font-montserrat text-white text-sm sm:text-base lg:text-lg">
          At JCL COPIERS, we understand the integral role paper plays in your
          creative process. Choosing our ream paper means choosing excellence,
          reliability, and sustainability. Here&apos;s why you should make us
          your go-to paper supplier
        </p>
        <Link to="/">
          <motion.button
            className="border border-white w-max p-2 xl:px-8 my-4 font-alata text-base sm:text-lg lg:text-xl"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            OUR PRODUCTS
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

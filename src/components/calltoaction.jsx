import theImage from "../assets/img/cta-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Calltoaction() {
  return (
    <div
      className="bg-fixed bg-cover"
      style={{ backgroundImage: `url(${theImage})` }}
    >
      <div className="p-24 flex flex-col gap-4 text-white items-center justify-center bg-black backdrop-blur-sm bg-opacity-30 h-full">
        <h4 className="text-white font-alata text-6xl text-center">
          Elevate Your Printing Experience with JCL COPIERS
        </h4>
        <p className="text-center font-montserrat text-lg">
          At JCL COPIERS, we understand the integral role paper plays in your
          creative process. Choosing our ream paper means choosing excellence,
          reliability, and sustainability. Here's why you should make us your
          go-to paper supplier
        </p>
        <Link to="/">
          <motion.button
            className="border-2 border-white w-max px-8 py-4 my-4 font-alata font-semibold "
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            OUR PRODUCTS
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

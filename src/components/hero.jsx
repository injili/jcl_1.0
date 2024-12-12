import ream from "../assets/img/ream2.png";
import heroBg from "../assets/img/hero.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" h-screen flex flex-col gap-8s items-center justify-center bg-primary bg-opacity-50 top-0 p-12">
        <div className="">
          <h1 className="text-center font-alata py-24 text-white text-4xl">
            JCL COPIERS.
          </h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-end items-center py-12 px-24 border-r border-white">
            <img src={ream} alt="an image of the ream packaging" />
          </div>
          <div className="flex flex-col justify-center items-left gap-8 py-12 px-24">
            <h2 className="font-alata text-5xl text-white">
              WE ARE JCL COPIERS
            </h2>
            <p className="text-secondary font-montserrat max-w-[596px] text-lg">
              Lorem ipsum dolor sit amet, consrrr aSuspendisse rhoncus metus et
              ante dictum tempus. Nulla pulvinar libero ut iaculis interdum.
              Vestibulum nec condimentudisi. Mauris id sapien libero ut iaculis
              interdum. Vestibulum nec condimentudisi. Mauris id sapien dui.
              Morbi nisi ante, convallis in lacus in, tempor cursus tellus.
            </p>
            <ul className="flex items-center justify-start font-alata text-white text-xl gap-8">
              <li className="text-center text-4xl">
                <FaFacebook />
              </li>
              <li className="text-center text-4xl">
                <FaXTwitter />
              </li>
              <li className="text-center text-4xl">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex items-center font-alata text-white text-lg justify-center py-24 gap-8">
            <li className="text-center">ABOUT US</li>
            <li className="text-center">OUR PRODUCTS</li>
            <li className="text-center">OUR CONTACTS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import ream from "../assets/img/ream2.png";
import heroXL from "../assets/img/hero_1200.avif";
import heroMD from "../assets/img/hero_700.avif";
import heroSM from "../assets/img/hero_300.avif";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";

export default function Hero() {
  return (
    <div
      className="bg-primary min-h-screen"
      style={{
        backgroundImage: `
      url(${heroXL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary bg-opacity-50 top-0 p-12">
        <div className="">
          <h1 className="text-center font-alata py-4 sm:py-8 md:py-12 lg:py-16 xl:py-24 text-white text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl">
            JCL COPIERS.
          </h1>
        </div>
        <div className="md:grid md:grid-cols-2">
          <div className="flex md:justify-end justify-center items-center py-4 md:px-12 lg:px-16 xl:px-24 md:border-r md:border-white">
            <img
              className="w-[180px] sm:w-[200px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
              src={ream}
              alt="an image of the ream packaging"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-4 lg:gap-6 xl:gap-8 py-12 md:px-12 lg:px-16 xl:px-24">
            <h2 className="text-center md:text-left font-alata text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-white">
              WE ARE JCL COPIERS
            </h2>
            <p className="text-center md:text-left text-sm sm:text-base text-secondary font-montserrat xl:max-w-[596px] lg:text-lg">
              We take pride in providing top-tier paper products, carefully
              crafted to meet all your needs with precision and quality. From
              everyday essentials to specialized items, our diverse range
              ensures that you find the perfect solution for any project or
              purpose.
            </p>
            <ul className="flex items-center justify-center md:justify-start font-alata text-white gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
              <li className="text-center text-lg sm:text-xl lg:text-2xl xl:text-4xl">
                <FaFacebook />
              </li>
              <li className="text-center text-lg sm:text-2xl xl:text-4xl">
                <FaXTwitter />
              </li>
              <li className="text-center text-lg sm:text-2xl xl:text-4xl">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <ul className="flex flex-wrap items-center font-alata text-white text-sm sm:text-base lg:text-lg xl:text-xl justify-center md:py-12 lg:py-16 xl:py-24 gap-4 md:gap-4 lg:gap-8">
            <Link to="#about">
              <li
                className="relative text-center transition-all ease-in-out before:transition-[width]
                      before:ease-in-out before:duration-700 before:absolute before:bg-white
                      before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%]
                      before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out
                      after:duration-700 after:absolute after:bg-white after:origin-center
                      after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                ABOUT US
              </li>
            </Link>
            <Link to="/products">
              <li
                className="relative text-center transition-all ease-in-out before:transition-[width]
                      before:ease-in-out before:duration-700 before:absolute before:bg-white
                      before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%]
                      before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out
                      after:duration-700 after:absolute after:bg-white after:origin-center
                      after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                OUR PRODUCTS
              </li>
            </Link>
            <Link to="#contact">
              <li
                className="relative text-center transition-all ease-in-out before:transition-[width]
                      before:ease-in-out before:duration-700 before:absolute before:bg-white
                      before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%]
                      before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out
                      after:duration-700 after:absolute after:bg-white after:origin-center
                      after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
              >
                OUR CONTACTS
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

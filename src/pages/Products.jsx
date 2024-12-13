import ream from "../assets/img/ream2.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Products() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen flex flex-col items-center justify-center bg-primary top-0 p-12">
        <div className="">
          <Link to="/">
            <h1 className="text-center font-alata py-4 sm:py-8 md:py-12 lg:py-16 xl:py-24 text-white text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl">
              JCL COPIERS.
            </h1>
          </Link>
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
              80gsm
            </h2>
            <ul className="text-center md:text-left text-sm sm:text-base text-secondary font-montserrat xl:max-w-[596px] lg:text-lg">
              <li>Size: A4 (210mm x 297mm)</li>
              <li>Weight: 80gsm</li>
              <li>Color: White</li>
              <li>Sheets in Ream: 500</li>
              <li>Thickness: 110um</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

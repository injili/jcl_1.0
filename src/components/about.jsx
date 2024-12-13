import { BsBalloonHeart } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { TbClover } from "react-icons/tb";
import { IoFlowerOutline } from "react-icons/io5";

export default function About() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className=" bg-white flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-24 xl:mx-24 py-12 p-6 sm:p-8 md:p-12 lg:p-24">
        <div className="col-span-1 flex flex-col justify-center gap-2 items-left">
          <h2 className="font-alata text-center md:text-left text-sm sm:text-base lg:text-lg text-primary">
            ABOUT US
          </h2>
          <h3 className="font-alata text-center md:text-left font-alata text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-secondary">
            PROFESSIONAL PRINTING PAPER
          </h3>
          <p className="font-montserrat text-primary text-center md:text-left text-sm sm:text-base lg:text-lg">
            Every sheet tells a story of precision and care. We believe in
            crafting a product that reflects our dedication to environmental
            responsibility without compromising on quality.
          </p>
        </div>
        <div className="col-span-1">
          <div className="sm:grid grid-cols-2">
            <div className="grid grid-rows-5 grid-flow-col">
              <div className="row-span-3 h-full flex py-4 md:py-6 pr-4 md:pr-4 lg:pr-8 xl:pr-12 flex-col gap-2 items-end justify-center border-r border-b border-primary">
                <BsBuildings className="text-left text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-alata">
                  Innovative
                </h4>
                <p className="font-montserrat text-primary text-right text-sm sm:text-base lg:text-lg">
                  Whether for your home, office, or creative projects, our paper
                  is designed to deliver exceptional performance. We strive to
                  continually evolve, providing you with cutting-edge solutions.
                </p>
              </div>
              <div className="row-span-2 h-full flex py-4 md:py-6 pr-4 md:pr-4 lg:pr-8 xl:pr-12 flex-col gap-2 justify-center items-end border-r border-primary">
                <BsBalloonHeart className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-alata">
                  Customer Centric
                </h4>
                <p className="font-montserrat text-primary text-right text-sm sm:text-base lg:text-lg">
                  We believe in building lasting relationships with our
                  customers by prioritizing your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-5 grid-flow-col">
              <div className="row-span-2 h-full flex py-4 md:py-6 pl-4 md:pl-4 lg:pl-8 xl:pl-12 flex-col gap-2 justify-center border-b border-l border-primary">
                <TbClover className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-alata">
                  Quality
                </h4>
                <p className="font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg">
                  Each sheet of paper is a testament to our dedication to
                  providing you with a superior paper product.
                </p>
              </div>
              <div className="row-span-3 h-full flex py-4 md:py-6 pl-4 md:pl-4 lg:pl-8 xl:pl-12 flex-col gap-2 justify-center border-l border-primary">
                <IoFlowerOutline className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-4xl font-alata">
                  Environmental
                </h4>
                <p className="font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg">
                  Our paper is sourced from responsibly managed forests,
                  promoting the preservation of our planet&apos;s natural
                  resources. You&apos;re making a choice for a greener future.
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

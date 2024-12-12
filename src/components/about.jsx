import { BsBalloonHeart } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { TbClover } from "react-icons/tb";
import { IoFlowerOutline } from "react-icons/io5";

export default function About() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className=" bg-white grid grid-cols-2 gap-24 mx-24 p-24">
        <div className="col-span-1 flex flex-col justify-center gap-2 items-left">
          <h2 className="font-alata text-2xl text-primary">ABOUT US</h2>
          <h3 className="font-alata text-6xl text-secondary">
            Professional Print Paper
          </h3>
          <p className="font-montserrat text-lg text-primary mr-24">
            At JCL COPIERS, we're purveyors of quality and champions of
            sustainability. Our journey began with a commitment to deliver paper
            that not only meets but exceeds your expectations. Every sheet tells
            a story of precision and care. We believe in crafting a product that
            reflects our dedication to environmental responsibility without
            compromising on quality.
          </p>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-5 grid-flow-col">
              <div className="row-span-3 h-full flex p-12 flex-col gap-2 justify-center border-r border-b border-primary">
                <BsBuildings className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-4xl font-alata">
                  Innovative
                </h4>
                <p className="text-primary font-montserrat text-lg">
                  Whether for your home, office, or creative projects, our paper
                  is designed to deliver exceptional performance. We strive to
                  continually evolve, providing you with cutting-edge solutions.
                </p>
              </div>
              <div className="row-span-2 h-full p-12 flex flex-col gap-2 justify-center border-r border-primary">
                <BsBalloonHeart className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-4xl font-alata">
                  Customer Centric
                </h4>
                <p className="text-primary font-montserrat text-lg">
                  We believe in building lasting relationships with our
                  customers by prioritizing your needs.
                </p>
              </div>
            </div>
            <div className="grid grid-rows-5 grid-flow-col">
              <div className="row-span-2 h-full p-12 flex flex-col gap-2 justify-center border-b border-primary">
                <TbClover className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-4xl font-alata">Quality</h4>
                <p className="text-primary font-montserrat text-lg">
                  We take pride in our unwavering commitment to quality. Each
                  sheet of paper is a testament to our dedication to providing
                  you with a superior paper product.
                </p>
              </div>
              <div className="row-span-3 h-full p-12 flex flex-col gap-2 justify-center">
                <IoFlowerOutline className="text-5xl text-primary mb-4" />
                <h4 className="text-secondary text-4xl font-alata">
                  Environmental
                </h4>
                <p className="text-primary font-montserrat text-lg">
                  Our paper is sourced from responsibly managed forests,
                  promoting the preservation of our planet's natural resources.
                  You're making a choice for a greener future.
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

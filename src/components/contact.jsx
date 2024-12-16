export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-primary flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-12 p-6 sm:p-8  md:p-16 lg:p-24 xl:p-24"
    >
      <div>
        <h4 className="font-alata text-center  font-alata text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-secondary text-center">
          OUR CONTACTS
        </h4>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 pr-4 md:pr-8 lg:pr-12 flex flex-col gap-4 border-r border-white">
          <div className="flex flex-col gap-2 items-end gap-2">
            <h5 className="text-secondary  md:text-lg lg:text-xl xl:text-2xl  font-alata">
              EMAIL
            </h5>
            <a
              href="mailto:info@jclcopiers.ac.ke"
              aria-label="Send an email to info@jclcopiers.ac.ke"
              className="font-montserrat text-white text-right text-sm sm:text-base lg:text-lg relative transition-all ease-in-out before:transition-[width]
                      before:ease-in-out before:duration-700 before:absolute before:bg-white
                      before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%]
                      before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out
                      after:duration-700 after:absolute after:bg-white after:origin-center
                      after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              info@jclcopiers.ac.ke
            </a>
          </div>
          <div className="flex flex-col gap-2 items-end">
            {/* <h5 className="text-secondary md:text-lg lg:text-xl xl:text-2xl font-alata">
              PHONE
            </h5>
            <p
              className="font-montserrat text-white text-right text-sm sm:text-base lg:text-lg relative transition-all ease-in-out before:transition-[width]
                      before:ease-in-out before:duration-700 before:absolute before:bg-white
                      before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%]
                      before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out
                      after:duration-700 after:absolute after:bg-white after:origin-center
                      after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
              +254 123 456 789
            </p> */}
          </div>
          <div className="flex flex-col gap-2 items-end">
            <h5 className="text-secondary  md:text-lg lg:text-xl xl:text-2xl  font-alata">
              ADDRESS
            </h5>
            <p className="font-montserrat text-white text-right text-sm sm:text-base lg:text-lg text-right">
              MOMBASA ROAD,
              <br /> LANGATA DISTRICT, <br /> P.O BOX 1017, <br /> NAIROBI.
            </p>
          </div>
        </div>
        {/* <div className="col-span-1 pl-4 md:pl-8 lg:pl-12 flex flex-col justify-center gap-2">
          <h5 className="text-secondary  md:text-lg lg:text-xl xl:text-2xl  font-alata">
            COMPANY
          </h5>
          <p className="font-montserrat text-white text-sm sm:text-base lg:text-lg">
            Refund Policy
          </p>
          <p className="font-montserrat text-white text-sm sm:text-base lg:text-lg">
            Privacy Policy
          </p>
          <p className="font-montserrat text-white text-sm sm:text-base lg:text-lg">
            Terms and Conditions
          </p>
          <p className="font-montserrat text-white text-sm sm:text-base lg:text-lg">
            Lisense and Copyright
          </p>
        </div> */}
      </div>
    </div>
  );
}

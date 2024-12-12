export default function Contact() {
  return (
    <div className="bg-primary p-24">
      <h4 className="font-alata text-6xl mb-24 text-secondary text-center">
        OUR CONTACTS
      </h4>
      <div className="grid grid-cols-2 w-full">
        <div className="col-span-1 p-12 flex flex-col gap-4 border-r border-white">
          <div className="flex flex-col gap-2 items-end gap-2">
            <h5 className="text-secondary text-3xl font-alata">EMAIL</h5>
            <p className="text-lg text-white font-montserrat">
              info@jclcopiers.ac.ke
            </p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <h5 className="text-secondary text-3xl font-alata">PHONE</h5>
            <p className="text-lg text-white font-montserrat">
              +254 123 456 789
            </p>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <h5 className="text-secondary text-3xl font-alata">ADDRESS</h5>
            <p className="text-lg text-white font-montserrat text-right">
              NAIROBI, <br />
              MOMBASA ROAD,
              <br /> LANGATA DISTRICT, <br /> P.O BOX 1017 NYAYO STADIUM
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center gap-2 p-12">
          <h5 className="text-secondary text-3xl font-alata">COMPANY</h5>
          <p className="text-lg text-white font-montserrat">Refund Policy</p>
          <p className="text-lg text-white font-montserrat">Privacy Policy</p>
          <p className="text-lg text-white font-montserrat">
            Terms and Conditions
          </p>
          <p className="text-lg text-white font-montserrat">
            Lisense and Copyright
          </p>
        </div>
      </div>
    </div>
  );
}

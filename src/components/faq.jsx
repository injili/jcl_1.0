import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Faq() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center md:grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:m-24  py-12 p-6 sm:p-8  md:p-16 lg:p-24 xl:p-24">
      <div className="col-span-1 h-full flex flex-col gap-4 justify-center sm:items-start mb-4">
        <div>
          <h4 className="font-alata  font-alata text-left font-alata text-lg sm:text-xl lg:text-2xl xl:text-4xl text-secondary">
            Frequently Asked
          </h4>
          <h4 className="font-montserrat font-black text-left font-alata text-xl sm:text-2xl lg:text-3xl xl:text-5xl text-secondary">
            Questions
          </h4>
        </div>

        <p className="text-lg max-w-[450px] font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg">
          We understand that you may have questions about our ream paper and our
          services. Below, we&apos;ve compiled answers to the most common
          inquiries to provide you with a quick and comprehensive resource.
        </p>
      </div>
      <div className="col-span-2 h-full flex flex-col justify-center">
        <Disclosure as="div" className="border-b mb-4 border-secondary">
          <DisclosureButton className="pb-4 text-left text-xl text-primary font-alata">
            What makes your 80gsm ream paper stand out from others on the
            market?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg pb-2"
          >
            Our 80gsm ream paper stands out due to its exceptional quality and
            commitment to sustainability. We prioritize precision in
            manufacturing, ensuring a smooth texture and excellent print
            quality. Moreover, our paper is sourced from responsibly managed
            forests, reflecting our dedication to environmental responsibility.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="border-b mb-4 border-secondary">
          <DisclosureButton className="pb-4 text-left text-xl text-primary font-alata">
            Can I use your ream paper for both home and office printing?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg pb-2"
          >
            Certainly! Our 80gsm ream paper is designed for versatility. Whether
            you need it for everyday printing at home, professional documents at
            the office, or creative projects, our paper delivers consistent
            quality. It&apos;s a reliable choice for a wide range of printing
            needs.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="border-b mb-4 border-secondary">
          <DisclosureButton className="pb-4 text-left text-xl text-primary font-alata">
            Do you offer bulk or customized orders for businesses?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg pb-2"
          >
            Yes, we understand the unique requirements of businesses. We offer
            bulk orders. Get in touch with our customer support team, and
            we&apos;ll work with you to fulfill your specific needs, ensuring a
            seamless ordering process.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-4">
          <DisclosureButton className="pb-4 text-left text-xl text-primary font-alata">
            How can I contact customer support for inquiries or assistance?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 font-montserrat text-primary text-left text-sm sm:text-base lg:text-lg pb-2"
          >
            We&apos;re here to assist you. You can reach our dedicated customer
            support team through our contacts, where you can fill out a form
            with your inquiry. Alternatively, you can call us directly at
            +254123456789. We strive to provide prompt and helpful assistance to
            ensure your experience with us is exceptional.
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}

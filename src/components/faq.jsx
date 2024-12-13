import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function Faq() {
  return (
    <div className="min-h-screen bg-white grid grid-cols-3 m-24 p-24">
      <div className="col-span-1 h-full flex flex-col gap-4 justify-center">
        <div>
          <h4 className="font-alata text-secondary text-5xl">
            Frequently Asked
          </h4>
          <h4 className="font-montserrat text-secondary font-black text-6xl">
            Questions
          </h4>
        </div>

        <p className="font-montserrat text-primary text-lg max-w-[450px]">
          We understand that you may have questions about our 80gsm ream paper
          and our services. Below, we&apos;ve compiled answers to the most
          common inquiries to provide you with a quick and comprehensive
          resource. If you can&apos;t find the information you&apos;re looking
          for, feel free to reach out to our dedicated customer support team
          through our contacts or call us at +245123456789. We&apos;re here to
          assist you on your journey to discovering the excellence of our paper
          products.
        </p>
      </div>
      <div className="col-span-2 h-full flex flex-col justify-center pr-24">
        <Disclosure as="div" className="border-b mb-4 border-secondary">
          <DisclosureButton className="pb-4 text-xl text-primary font-alata">
            What makes your 80gsm ream paper stand out from others on the
            market?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-primary font-montserrat pb-2"
          >
            Our 80gsm ream paper stands out due to its exceptional quality and
            commitment to sustainability. We prioritize precision in
            manufacturing, ensuring a smooth texture and excellent print
            quality. Moreover, our paper is sourced from responsibly managed
            forests, reflecting our dedication to environmental responsibility.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="border-b mb-4 border-secondary">
          <DisclosureButton className="pb-4 text-xl text-primary font-alata">
            Can I use your ream paper for both home and office printing?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-primary font-montserrat pb-2"
          >
            Certainly! Our 80gsm ream paper is designed for versatility. Whether
            you need it for everyday printing at home, professional documents at
            the office, or creative projects, our paper delivers consistent
            quality. It&apos;s a reliable choice for a wide range of printing
            needs.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="border-b mb-4 border-secondary">
          <DisclosureButton className="pb-4 text-xl text-primary font-alata">
            Do you offer bulk or customized orders for businesses?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-primary font-montserrat pb-2"
          >
            Yes, we understand the unique requirements of businesses. We offer
            bulk orders. Get in touch with our customer support team, and
            we&apos;ll work with you to fulfill your specific needs, ensuring a
            seamless ordering process.
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" className="mb-4">
          <DisclosureButton className="pb-4 text-xl text-primary font-alata">
            How can I contact customer support for inquiries or assistance?
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-500 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 text-primary font-montserrat pb-2"
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

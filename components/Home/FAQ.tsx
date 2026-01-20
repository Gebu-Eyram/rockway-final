"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  const faqItems = [
    {
      id: "item-1",
      question: "What oilfield services does Rockway provide?",
      answer:
        "Rockway Oilfields Services offers comprehensive oil and gas solutions including supply chain management, equipment procurement, project support, and technical expertise tailored to the energy sector's needs.",
    },
    {
      id: "item-2",
      question: "How do you ensure safety in oilfield operations?",
      answer:
        "Safety is our top priority. We maintain rigorous safety protocols, conduct regular training, and adhere to international standards including OSHA guidelines and local regulatory requirements to protect our team and clients.",
    },
    {
      id: "item-3",
      question: "What regions do you operate in?",
      answer:
        "We operate primarily in West Africa with our headquarters in Ghana, and have established partnerships across the African continent. Our global network allows us to support international projects as needed.",
    },
    {
      id: "item-4",
      question: "How can I get a quote for your services?",
      answer:
        "Contact our team at info@rockwayoilfields.com or call (+233) 244748571 to discuss your specific requirements. We'll provide a customized quote based on your project needs and timeline.",
    },
    {
      id: "item-5",
      question: "What certifications and standards do you maintain?",
      answer:
        "We hold relevant industry certifications and comply with international standards for quality management, environmental protection, and occupational health and safety in the oil and gas sector.",
    },
  ];

  return (
    <section className="">
      <div className="w-full relative py-6 md:py-8 inter ">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our oilfield services, safety standards, and industry expertise.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
          >
            {faqItems.map((item) => (
              <div className="group" key={item.id}>
                <AccordionItem
                  value={item.id}
                  className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-gray-700">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
              </div>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

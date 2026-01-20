"use client";
import { cn } from "@/lib/utils";
import {
  Bold,
  Calendar1,
  Ellipsis,
  Italic,
  Strikethrough,
  Underline,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/ui/blur-fade";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section>
      <div className=" py-8 lg:pt-24">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="flex max-md:flex-col items-center gap-4">
            <BlurFade delay={0.2}>
              <h2 className="text-3xl font-semibold   tracking-tighter text-balance text-gray-900 md:text-4xl max-w-2xl ">
                Rockway Oilfield Services - Excellence in Oilfield Solutions
              </h2>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div>
                <p className="max-w-xl">
                  Rockway Oilfield Services Ltd. is committed to delivering
                  top-tier oilfield services with a focus on safety, efficiency,
                  and environmental stewardship.
                </p>
                <div className="mt-4">
                  <Button variant="outline" className="mr-2 ">
                    Learn More
                  </Button>
                  <Button className="bg-sky-700 hover:bg-sky-600">
                    Contact Us
                  </Button>
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.6}>
            <div className="w-full h-[500px] border my-12 relative rounded-2xl overflow-hidden">
              <Image
                src="/hero-3.jpg"
                alt="About Us Illustration"
                fill
                className="w-full absolute object-cover"
              />
              {/* Stats Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/80 backdrop-blur rounded-4xl shadow-lg p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    <div>
                      <div className="text-4xl md:text-5xl  mb-2 text-gray-900">
                        15+
                      </div>
                      <div className="text-sm md:text-base text-gray-600">
                        Years of Excellence
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl  mb-2 text-gray-900">
                        500+
                      </div>
                      <div className="text-sm md:text-base text-gray-600">
                        Projects Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl  mb-2 text-gray-900">
                        98%
                      </div>
                      <div className="text-sm md:text-base text-gray-600">
                        Client Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl  mb-2 text-gray-900">
                        3
                      </div>
                      <div className="text-sm md:text-base text-gray-600">
                        Countries Served
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          {/* <BlurFade delay={0.8}>
            <div className="mx-auto my-8 max-w-6xl">
              <Accordion
                type="single"
                collapsible
                defaultValue="profile"
                className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
              >
                <div className="group">
                  <AccordionItem
                    value="profile"
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-lg hover:no-underline">
                      Company Profile
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">
                        Rockway Oilfields Services is an upstream Oil and Gas
                        Service Company, whose vision is to become a leading
                        service provider with an impeccable record of excellence
                        and efficiency in oil and gas service delivery to all
                        our clients in Ghana, Guyana, and West Africa. Our goal
                        is to provide offshore and onshore oil and gas services
                        to E&P, drilling contractors and production companies in
                        the regions we serve. Our services include full
                        Engineering, Procurement, Construction & Installation
                        and are delivered through a center of excellence
                        approach that utilizes local engineers and technicians
                        alongside our global network of suppliers and vendors
                        for efficient and effective service delivery. We hold
                        our team of qualified professionals to strict high
                        standards and invest in their development to ensure that
                        they can meet the ever-changing trends within the oil
                        and gas industry.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>

                <div className="group">
                  <AccordionItem
                    value="mission"
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-lg hover:no-underline">
                      Mission Statement
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">
                        Our services include full Engineering, Procurement,
                        Construction & Installation and are delivered through a
                        center of excellence approach that utilizes local
                        engineers and technicians alongside our global network
                        of suppliers and vendors for efficient and effective
                        service delivery.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>

                <div className="group">
                  <AccordionItem
                    value="vision"
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-lg hover:no-underline">
                      Vision Statement
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">
                        To become a leading service provider with an impeccable
                        record of excellence and efficiency in oil and gas
                        service delivery to all our clients in Ghana, Guyana,
                        and West Africa.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>
              </Accordion>
            </div>
          </BlurFade> */}

          {/* <BlurFade delay={1.0}>
            <div>
              <p className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
                Our core principles
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={1.2}>
            <div className="mx-auto mt-8 max-w-6xl">
              <Accordion
                type="single"
                collapsible
                className="bg-muted dark:bg-muted/50 w-full rounded-2xl p-1"
              >
                <div className="group">
                  <AccordionItem
                    value="reliability"
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-lg hover:no-underline">
                      Reliability
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">
                        Our commitment to reliability ensures consistent,
                        dependable service delivery that our clients can count
                        on for their critical oilfield operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>

                <div className="group">
                  <AccordionItem
                    value="flexibility"
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-lg hover:no-underline">
                      Flexibility
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">
                        We adapt to the unique needs of each project, offering
                        flexible solutions that accommodate varying operational
                        requirements and challenges in the oil and gas sector.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>

                <div className="group">
                  <AccordionItem
                    value="capability"
                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="cursor-pointer text-lg hover:no-underline">
                      Capability
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-base">
                        With extensive expertise and advanced capabilities, we
                        deliver comprehensive Engineering, Procurement,
                        Construction & Installation services across onshore and
                        offshore operations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                </div>
              </Accordion>
            </div>
          </BlurFade> */}

          {/* <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
            <div className="grid sm:grid-cols-5">
              <CodeIllustration className="sm:col-span-2" />
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                <h3 className="text-foreground text-xl font-semibold">
                  Marketing Campaigns
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  We'll put together your schedule on automatically. You'll keep
                  app deadlines, and will work on the highest priority items
                  first.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-5">
              <div className="flex items-center justify-center pt-12 sm:col-span-2">
                <ScheduleIllustation className="pt-8" />
              </div>
              <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12 sm:pt-12">
                <h3 className="text-foreground text-xl font-semibold">
                  AI Meeting Scheduler
                </h3>
                <p className="text-muted-foreground mt-4 text-lg">
                  Ask the chat to create or update your events. Ask it how much
                  time you've spent on demo calls last week. Or have it prepare
                  today's agendas.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

type IllustrationProps = {
  className?: string;
  variant?: "elevated" | "outlined" | "mixed";
};

export const ScheduleIllustation = ({
  className,
  variant = "elevated",
}: IllustrationProps) => {
  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1",
          {
            "shadow-black-950/10 shadow-lg": variant === "elevated",
            "border-foreground/10 border": variant === "outlined",
            "border-foreground/10 border shadow-md shadow-black/5":
              variant === "mixed",
          },
        )}
      >
        <Button size="sm" className="rounded-sm">
          <Calendar1 className="size-3" />
          <span className="text-sm font-medium">Schedule</span>
        </Button>
        <span className="bg-border block h-4 w-px"></span>

        <span className="bg-border block h-4 w-px"></span>
        <Button size="icon" className="size-8" variant="ghost">
          <Ellipsis className="size-3" />
        </Button>
      </div>
      <span>
        <span className="bg-secondary text-secondary-foreground py-1">
          Tomorrow 8:30 pm
        </span>{" "}
        is our priority.
      </span>
    </div>
  );
};

export const CodeIllustration = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]",
        className,
      )}
    >
      <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
        {["Images", "Variables", "Pages", "Components", "Styles"].map(
          (item, index) => (
            <li
              key={index}
              className={cn(
                index == 2 &&
                  "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']",
              )}
            >
              {item}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

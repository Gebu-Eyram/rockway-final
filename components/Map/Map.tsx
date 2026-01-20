import { SVGMap } from "./SVGMap";
import { Drone, Ship } from "lucide-react";
import { GiOilRig, GiSubmarine } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { FcEngineering } from "react-icons/fc";
import Image from "next/image";
import { RiSignalTowerFill } from "react-icons/ri";

export const Map = () => {
  return (
    <div className="p-3 ">
      <section
        id="farm-management"
        aria-labelledby="management-title"
        className="relative flex w-full font-sans scroll-my-24 flex-col items-center justify-center overflow-hidden rounded-3xl px-10 my-20 bg-gray-100/80  "
      >
        <div className="pt-12 text-base font-semibold tracking-tight text-sky-600 sm:pt-20 sm:text-lg">
          Rockway Oilfield Services
        </div>

        <h2
          id="management-title"
          className="mt-6 max-w-175  text-3xl font-semibold text-center mb-6 tracking-tighter text-balance text-gray-900 md:text-4xl lg:text-5xl"
        >
          Comprehensive Oilfield Management Solutions
        </h2>
        <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-600 sm:mt-8 sm:text-xl">
          Leveraging cutting-edge technology to optimize operations, enhance
          safety, and drive efficiency across your oilfield assets.
        </p>

        <div className="relative mt-20 mb-10 ml-68 scale-90 sm:mb-16 md:mt-24 md:ml-0 md:scale-100">
          <SVGMap className="w-200 shrink-0" />
          <div className="absolute -top-3 left-32.5">
            <div className="relative flex items-center justify-center">
              <div className="absolute size-10 rounded-full bg-white ring-1 ring-gray-900/15"></div>
              <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs whitespace-nowrap text-gray-500 ring-1 ring-gray-400/20">
                Drill Ship
              </div>
              <Ship className="relative size-5 " />
              <div
                style={{
                  animationDelay: "3.5s",
                }}
                className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
              ></div>
            </div>
          </div>
          <div className="absolute top-[73px] left-[243px]">
            <div className="relative flex items-center justify-center">
              <div className="absolute size-10 rounded-full bg-white ring-1 ring-gray-900/15"></div>
              <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs whitespace-nowrap text-gray-500 ring-1 ring-gray-400/20">
                Production
              </div>
              <GiOilRig className="relative size-5  text-gray-500" />
              <div
                style={{
                  animationDelay: "3.5s",
                }}
                className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
              ></div>
            </div>
          </div>
          <div className="absolute top-32 right-75">
            <div className="relative flex items-center justify-center">
              <div className="absolute size-10 rounded-full bg-white ring-1 ring-gray-900/15"></div>
              <div className="absolute -top-4 -right-[3.7rem] flex w-fit items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs whitespace-nowrap text-gray-500 ring-1 ring-gray-400/20">
                Maintenance
              </div>
              <BsTools className="relative size-4  text-gray-500" />
              <div
                style={{
                  animationDelay: "3.5s",
                }}
                className="absolute size-10 animate-[ping_5s_ease_infinite] rounded-full ring-1 ring-orange-500/50"
              ></div>
            </div>
          </div>
          <div className="absolute top-20 right-97.5">
            <div className="relative flex items-center justify-center">
              <div className="absolute size-10 rounded-full bg-white ring-1 ring-gray-400/20"></div>
              <Image
                src="/logo.png"
                width={40}
                height={40}
                alt="Description"
                className="relative size-5 text-gray-500 object-contain"
              />
            </div>
          </div>
          <div className="absolute top-12 right-107.5">
            <div className="relative flex items-center justify-center">
              <div className="absolute size-10 rounded-full bg-white ring-1 ring-blue-500/20"></div>
              <div className="absolute -top-4 -right-7 flex w-fit items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs whitespace-nowrap  ring-1 ring-blue-500/20">
                Subsea
              </div>
              <GiSubmarine className="relative size-5 " />
            </div>
          </div>
          <div className="absolute top-9 right-56">
            <div className="relative flex items-center justify-center">
              <RiSignalTowerFill className="z-10 size-5 text-gray-500" />
              <div className="absolute size-10 rounded-full bg-white ring-1 ring-gray-400/20 backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

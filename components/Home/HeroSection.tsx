import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Power your future with clean solar energy
            </h1>

            <p className="text-white/90 text-lg max-w-xl">
              Clean, affordable, & renewable: ease your journey to electricity
              with Smarthome Energy Solutions
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-6 text-base flex items-center gap-2">
                Explore Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-6 py-6 text-base flex items-center gap-2"
              >
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Play className="w-3 h-3 text-black fill-black ml-0.5" />
                </div>
                Play Video
              </Button>
            </div>
          </div>

          {/* Right Content - Product Card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-white/20">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=400"
                  alt="Solar Panel"
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    Sunroyal EdgeTech 500...
                  </h3>
                  <p className="text-white/70 text-sm">
                    Our best selling product. Installed durability, efficiency &
                    longevity
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-white/60 text-xs">+3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

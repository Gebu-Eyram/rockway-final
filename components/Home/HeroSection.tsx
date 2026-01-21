import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { BlogPosts } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="p-2">
      <section className="relative rounded-3xl font-sans h-[calc(100vh-6rem)] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.avif')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <BlurFade delay={0.1} inView>
                <h1 className="text-4xl md:text-6xl text-balance max-w-4xl  text-white leading-tight">
                  Powering Ghana's Energy Future
                </h1>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <p className="text-white/90 lg:text-lg max-w-xl mt-auto">
                  We deliver comprehensive oilfield solutions with unwavering
                  commitment to safety, excellence, and environmental
                  responsibility
                </p>
              </BlurFade>
              {/* Buttons */}
              <BlurFade delay={0.5} inView>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/services">
                    <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 py-6 text-base flex items-center gap-2">
                      Explore Now
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                    <DialogTrigger>
                      <Button
                        variant="outline"
                        className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-6 py-6 text-base flex items-center gap-2"
                      >
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-3 h-3 text-black fill-black ml-0.5" />
                        </div>
                        Play Video
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full max-w-4xl p-0 border-0">
                      <div className="aspect-video w-full">
                        <iframe
                          src="https://www.youtube.com/embed/XbBLagPXWNk"
                          title="Hero Video player"
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </BlurFade>
            </div>

            {/* Right Content - Blog Card */}
            <div className="hidden lg:flex justify-end">
              <BlurFade delay={0.7} inView>
                <Link href={BlogPosts[0].link}>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-sm border border-white/20 hover:bg-white/15 transition-all cursor-pointer group">
                    <div className="space-y-4">
                      <div className="relative w-full h-48 rounded-xl overflow-hidden">
                        <Image
                          src={BlogPosts[0].image}
                          alt={BlogPosts[0].title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-white/60 text-xs">
                            {new Date(BlogPosts[0].date).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              },
                            )}
                          </span>
                          <span className="text-white/40">•</span>
                          <span className="text-white/60 text-xs">
                            Latest Article
                          </span>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                          {BlogPosts[0].title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2">
                          {BlogPosts[0].summary}
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                          <span className="text-white/80 text-sm font-medium">
                            Read more
                          </span>
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4 text-black" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

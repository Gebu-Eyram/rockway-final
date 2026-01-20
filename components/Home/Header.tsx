"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Production", href: "/production" },
    { name: "Testimonials", href: "#" },
  ];

  const pathName = usePathname();
  return (
    <header className="fixed top-0 inter left-0 right-0 z-50  bg-white">
      <div className="max-w-7xl mx-auto flex h-18 px-4 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="">
            <Image
              src="/rockway.png"
              alt="Logo"
              width={90}
              height={30}
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden  md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={` text-sm ${pathName === link.href ? "text-foreground" : "text-muted-foreground"} `}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <Button className="bg-foreground text-background py-4  rounded-full text-sm hover:bg-gray-800">
          Get a Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;

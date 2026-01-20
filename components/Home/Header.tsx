"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
  ];

  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Contact Button */}
        <Button className="hidden md:block bg-foreground text-background px-6 py-2 rounded-full text-sm hover:bg-gray-800">
          Get a Quote
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] flex flex-col"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg ${pathName === link.href ? "text-foreground font-semibold" : "text-muted-foreground"} hover:text-foreground transition-colors`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto pb-8 px-2">
              <Button className="w-full bg-foreground text-background px-6 py-2 rounded-full text-sm hover:bg-gray-800">
                Get a Quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

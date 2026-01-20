import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaThreads,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="border-b inter bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <img className="h-12" src="/rockway.png" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
            <div className="space-y-4 text-sm">
              <span className="text-title font-medium mb-4 block">Product</span>
              <Link href="#" className="text-body block hover:text-title">
                <span>Features</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Solution</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Customers</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Pricing</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Help</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>About</span>
              </Link>
            </div>
            <div className="space-y-4 text-sm">
              <span className="text-title font-medium mb-4 block">
                Solution
              </span>
              <Link href="#" className="text-body block hover:text-title">
                <span>Startup</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Freelancers</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Organizations</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Students</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Collaboration</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Design</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Management</span>
              </Link>
            </div>
            <div className="space-y-4 text-sm">
              <span className="text-title font-medium mb-4 block">Company</span>
              <Link href="#" className="text-body block hover:text-title">
                <span>About</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Careers</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Blog</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Press</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Contact</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Help</span>
              </Link>
            </div>
            <div className="space-y-4 text-sm">
              <span className="text-title font-medium mb-4 block">Legal</span>
              <Link href="#" className="text-body block hover:text-title">
                <span>Licence</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Privacy</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Cookies</span>
              </Link>
              <Link href="#" className="text-body block hover:text-title">
                <span>Security</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-caption order-last block text-center text-sm md:order-first">
            &copy; 2026 Rockway, All rights reserved
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            <a
              href="#"
              target="_blank"
              aria-label="X/Twitter"
              className="text-body block hover:text-title"
            >
              <FaXTwitter className="size-6" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="LinkedIn"
              className="text-body block hover:text-title"
            >
              <FaLinkedin className="size-6" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Facebook"
              className="text-body block hover:text-title"
            >
              <FaFacebook className="size-6" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Threads"
              className="text-body block hover:text-title"
            >
              <FaThreads className="size-6" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="Instagram"
              className="text-body block hover:text-title"
            >
              <FaInstagram className="size-6" />
            </a>
            <a
              href="#"
              target="_blank"
              aria-label="TikTok"
              className="text-body block hover:text-title"
            >
              <FaTiktok className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

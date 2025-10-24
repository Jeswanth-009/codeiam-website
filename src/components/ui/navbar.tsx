"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative mx-auto max-w-7xl flex justify-between items-center px-4 md:px-8 py-4 rounded-t-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm">
        
        {/* Left Menu - Desktop */}
        <div className="hidden lg:flex items-center space-x-3 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`px-4 py-1.5 rounded-full border border-gray-300/60 hover:border-gray-400 hover:bg-white/70 transition-all duration-200 ${
                pathname === link.path ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Center Logo with Circular Cutout */}
        <div className="absolute left-1/2 -translate-x-1/2 w-32 md:w-44 h-20 md:h-24 bg-white rounded-b-[4rem] shadow-sm flex items-center justify-center overflow-visible">
          <Link href="/" className="relative w-[70px] md:w-[100px] h-[45px] md:h-[65px] block">
            <Image
              src="/codeiam-logo.png"
              alt="Codeiam Club Logo"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Join Us Button - Hidden on Mobile */}
          <Link
            href="/join"
            className="hidden md:flex px-5 py-2 rounded-full bg-black text-white text-sm font-medium items-center gap-1 hover:bg-gray-800 transition"
          >
            Join Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 overflow-hidden bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-lg"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    pathname === link.path
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl bg-black text-white text-sm font-medium text-center hover:bg-gray-800 transition"
              >
                Join Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto mt-6 px-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl overflow-hidden bg-white shadow-md"
      >
        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <Image
            src="/1.png"
            alt="the codeiam club hero image"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-6 md:bottom-10 left-4 md:left-10 text-white space-y-2 md:space-y-4 max-w-xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow-lg"
            >
              What we want to achieve
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-200 text-xs md:text-sm max-w-md"
            >
              Empowering the next generation of technologists and entrepreneurs through hands-on learning, innovation, and community.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          {/*<motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-6 md:bottom-10 right-4 md:right-10 flex flex-col space-y-2 items-end"
          >
            <div className="flex flex-col items-end space-y-1">
              <motion.a
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs md:text-sm text-black hover:bg-white transition-all"
              >
                Instagram
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs md:text-sm text-black hover:bg-white transition-all"
              >
                Twitter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs md:text-sm text-black hover:bg-white transition-all"
              >
                Facebook
              </motion.a>
            </div>
          </motion.div>*/}
        </div>
      </motion.div>
    </section>
  );
}

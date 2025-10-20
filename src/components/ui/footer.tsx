"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
      >
        
        {/* Column 1: About */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center mb-4">
            <Image
              src="/codeiam-logo.png"
              alt="Codeiam Logo"
              width={40}
              height={40}
              className="mr-3"
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Fostering a community of innovators building the future of technology.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link href="/events" className="hover:text-blue-600 transition">Events</Link></li>
            <li><Link href="/chapters" className="hover:text-blue-600 transition">Chapters</Link></li>
            <li><Link href="/projects" className="hover:text-blue-600 transition">Projects</Link></li>
            <li><Link href="/join" className="hover:text-blue-600 transition">Join Us</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Initiatives */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Initiatives</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/pre-incubation" className="hover:text-blue-600 transition">Pre-Incubation</Link></li>
            <li><Link href="/hackathons" className="hover:text-blue-600 transition">Hackathons</Link></li>
            <li><Link href="/research" className="hover:text-blue-600 transition">Research Group</Link></li>
            <li><Link href="/chapters/propose" className="hover:text-blue-600 transition">Propose a Chapter</Link></li>
          </ul>
        </motion.div>

        {/* Column 4: Connect */}
        <motion.div variants={itemVariants}>
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Connect</h3>
          <p className="text-sm text-gray-600 mb-3">contact@codeiam.club</p>
          <div className="flex space-x-4 text-gray-700">
            <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 text-xl transition"><FaInstagram /></Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 text-xl transition"><FaLinkedin /></Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 text-xl transition"><FaGithub /></Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black text-xl transition"><FaXTwitter /></Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-5 text-center text-sm text-gray-600 bg-white">
        © {new Date().getFullYear()} Codeiam Club. All Rights Reserved.
      </div>
    </footer>
  );
}

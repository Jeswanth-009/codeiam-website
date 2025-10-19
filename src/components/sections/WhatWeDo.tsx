"use client";

import { motion } from "framer-motion";
import { FaUsers, FaRocket, FaFlask } from "react-icons/fa";

export default function WhatWeDo() {
  const data = [
    {
      title: "Skill-Building Chapters",
      desc: "Dive into specialized domains like AI, DevSecOps, and Competitive Programming.",
      icon: <FaUsers className="text-blue-600 text-6xl mx-auto mb-6" />,
    },
    {
      title: "Innovation & Incubation",
      desc: "Transform your ideas into startups through hackathons and mentorship.",
      icon: <FaRocket className="text-orange-500 text-6xl mx-auto mb-6" />,
    },
    {
      title: "Applied Research",
      desc: "Collaborate on impactful research and publish your innovations.",
      icon: <FaFlask className="text-green-600 text-6xl mx-auto mb-6" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 dark:text-white"
      >
        What We Do
      </motion.h2>

      {/* Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4"
      >
        {data.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -8 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl overflow-hidden bg-white dark:bg-gray-700 shadow-md hover:shadow-xl transition-all text-center p-8"
          >
            {/* Icon */}
            <div>{card.icon}</div>

            {/* Text */}
            <h3 className="text-lg md:text-xl font-semibold mb-2 dark:text-white">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const stats = [
    { label: "Active Members", value: 500 },
    { label: "Active Chapters", value: 5 },
    { label: "Events Hosted", value: 40 },
    { label: "Total Participants", value: 2000 },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto text-center px-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-4 md:p-6 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-3xl md:text-4xl font-bold text-blue-600">
              {isInView && <CountUp end={stat.value} duration={2.5} />}+
            </p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

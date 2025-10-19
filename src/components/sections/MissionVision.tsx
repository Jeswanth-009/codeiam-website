"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900 text-center transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 dark:text-white"
      >
        Our Mission & Vision
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-4"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8 rounded-3xl shadow-md bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            To foster a collaborative ecosystem for technology enthusiasts to innovate,
            build practical skills, and transform ideas into impactful ventures through
            hands-on learning, expert mentorship, and a vibrant community.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className="p-6 md:p-8 rounded-3xl shadow-md bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <h3 className="text-xl font-semibold mb-4 dark:text-white">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
            To be the premier student-led incubator for technologists, entrepreneurs, and
            industry leaders, recognized for bridging the gap between academic knowledge
            and real-world impact.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

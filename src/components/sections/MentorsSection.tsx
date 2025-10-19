"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users } from "lucide-react";

export default function MentorsSection() {
  const mentors = [
    { 
      name: "Dr. Ravi Eswarapu", 
      title: "CEO, T-Hub",
      expertise: "Startup Ecosystem",
      icon: Briefcase,
    },
    { 
      name: "Mr. Sekhar Javvadi", 
      title: "Co-founder, Spotmies LLP",
      expertise: "Technology & Innovation",
      icon: Award,
    },
    { 
      name: "Mr. Mohamed Uvais", 
      title: "Former Chairman, Ceylon Petroleum Corp",
      expertise: "Leadership & Strategy",
      icon: Users,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900 text-center transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Learn from Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            Get mentored by experienced professionals who have built and scaled successful ventures
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 shadow-lg rounded-3xl p-8 hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Avatar Circle with Icon */}
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <mentor.icon className="w-12 h-12 text-white" />
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg md:text-xl mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {mentor.name}
                </h3>

                {/* Title */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-medium">
                  {mentor.title}
                </p>

                {/* Expertise Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  {mentor.expertise}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-sm text-gray-500 dark:text-gray-400"
        >
          Connect with mentors through our monthly workshops and one-on-one sessions
        </motion.p>
      </div>
    </section>
  );
}

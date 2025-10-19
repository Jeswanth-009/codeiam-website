"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "AI/ML Chapter Member",
      image: "/team/placeholder.jpg",
      content: "Joining Codeiam was the best decision of my college life. The hands-on projects and mentorship helped me land my dream job!",
      rating: 5,
    },
    {
      name: "Arjun Reddy",
      role: "Startup Founder",
      image: "/team/placeholder.jpg",
      content: "The pre-incubation program gave me the guidance and network I needed to transform my idea into a successful startup.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Cybersecurity Chapter Lead",
      image: "/team/placeholder.jpg",
      content: "Leading a chapter taught me valuable leadership skills. The community is incredibly supportive and inspiring.",
      rating: 5,
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
    hidden: { opacity: 0, y: 50, rotateY: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            What Our Members Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from students who transformed their careers through Codeiam
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100 dark:text-blue-900/30">
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

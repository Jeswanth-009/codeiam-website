"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leads = [
  {
    name: "Mohamed Hijazy Shazin Hassan",
    role: "President",
    image: "/team/shazin.jpeg",
  },
  {
    name: "Leena Keerthi",
    role: "Senior Vice President",
    image: "/team/leena.jpeg",
  },
  {
    name: "Dandu S.N. Venkata Pavan Raghavendra Varma",
    role: "Head of Community Operations",
    image: "/team/varma.jpeg",
  },
  {
    name: "Sreepriya Pilla",
    role: "Vice President",
    image: "/team/sreepriya.jpeg",
  },
  {
    name: "Vinay Kumar Tadela",
    role: "Pre-Incubator Lead",
    image: "/team/vinay.jpeg",
  },
];

export default function LeadTeam() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Meet the Lead Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-10 text-sm md:text-base"
        >
          Our leadership team drives Codeiam&apos;s mission — connecting innovation,
          learning, and community across Andhra University.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {leads.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-sm hover:shadow-lg overflow-hidden group"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-48 md:h-64 object-cover group-hover:opacity-90 transition"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2 md:px-4 md:py-3 text-left">
                <h3 className="text-white font-semibold text-xs md:text-sm line-clamp-2">{member.name}</h3>
                <p className="text-gray-200 text-[10px] md:text-xs">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

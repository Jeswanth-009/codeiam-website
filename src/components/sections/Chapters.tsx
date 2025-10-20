"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const chapters = [
  {
    name: "AI/ML & Data Science",
    tag: "Artificial Intelligence",
    desc: "Learn machine learning, data analysis, and AI through projects and sessions.",
    img: "/ai_ml.png",
  },
  {
    name: "Industry 4.0",
    tag: "IoT & Automation",
    desc: "Explore technologies driving the Fourth Industrial Revolution, from IoT to robotics.",
    img: "/industry_4.0.png",
  },
  {
    name: "GATE",
    tag: "Competitive Prep",
    desc: "Prepare for GATE and strengthen core computer science fundamentals.",
    img: "/GATE.png",
  },
  {
    name: "Cybersecurity",
    tag: "Ethical DevSecOps",
    desc: "Dive deep into ethical hacking, penetration testing, and DevSecOps tools.",
    img: "/codeiam-logo.png",
  },
  {
    name: "Women Techies",
    tag: "Community",
    desc: "Empowering women in tech through mentorship and hands-on learning.",
    img: "/codeiam-logo.png",
  },
  {
    name: "Startup & Entrepreneurship",
    tag: "Innovation",
    desc: "Build startups, learn business models, and pitch to investors.",
    img: "/codeiam-logo.jpg",
  },
  {
    name: "Robotics and Autonomous System",
    tag: "Hardware",
    desc: "Work on autonomous systems, drones, and robotic design projects.",
    img: "/1.png",
  },
  {
    name: "Web Development",
    tag: "Frontend & Backend",
    desc: "Learn to build full-stack apps with modern frameworks like React and Node.",
    img: "/codeiam-logo.png",
  },
  {
    name: "DSA",
    tag: "Problem Solving",
    desc: "Sharpen your algorithmic thinking through coding challenges and competitions.",
    img: "/codeiam-logo.png",
  },
  {
    name: "CloudComputing & DevOps",
    tag: "Cloud",
    desc: "Master AWS, Docker, Kubernetes, and automation pipelines.",
    img: "/codeiam-logo.jpg",
  },
  {
    name: "R&D",
    tag: "Research",
    desc: "Collaborate on applied research projects and publish findings.",
    img: "/codeiam-logo.png",
  },
];

export default function Chapters() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 350; // how far to scroll each click
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50 rounded-3xl relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8 flex-wrap gap-3"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-gray-400 text-base md:text-lg mr-3">Chapters</span>
            Explore Our Chapters
          </h2>
          <Link href="/chapters">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-5 py-2 rounded-full hover:shadow-lg transition text-sm md:text-base"
            >
              View All →
            </motion.button>
          </Link>
        </motion.div>

        {/* Scrollable Container */}
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:scale-110 transition opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth no-scrollbar"
          >
            {chapters.map((chapter) => {
              const slug = chapter.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
              return (
                <Link key={chapter.name} href={`/chapters/${slug}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-[250px] md:w-[280px] h-[300px] md:h-[350px] bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer flex-shrink-0"
                  >
                    <Image
                      src={chapter.img}
                      alt={chapter.name}
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-sm bg-white/20 px-3 py-1 rounded-full inline-block mb-3 backdrop-blur">
                        {chapter.tag}
                      </p>
                      <h3 className="text-lg font-semibold mb-2">{chapter.name}</h3>
                      <p className="text-sm text-gray-200 line-clamp-3">
                        {chapter.desc}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:scale-110 transition opacity-0 group-hover:opacity-100 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-500 mt-8 text-xs md:text-sm"
        >
          Join a chapter to learn, build, and lead in your domain of interest.
        </motion.p>
      </div>
    </section>
  );
}

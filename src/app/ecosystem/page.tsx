"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  {
    title: "Chapters",
    description:
      "Our student-led chapters are the backbone of the Codeiam ecosystem — each focusing on a specialized domain like AI, Cybersecurity, Web Development, and more. These communities organize weekly workshops, coding sessions, and hackathons.",
    color: "from-blue-500/20 to-blue-300/10",
    link: "/chapters",
    icon: "🧠",
  },
  {
    title: "Pre-Incubation & Hackathons",
    description:
      "The Innovation Division transforms raw ideas into real startups. Through ideathons, hackathons, and incubation mentorship, students learn how to pitch, validate, and build impactful ventures.",
    color: "from-emerald-400/20 to-emerald-200/10",
    link: "/pre-incubation",
    icon: "🚀",
  },
  {
    title: "Research & Development",
    description:
      "The R&D wing promotes applied research and publication. Members work on emerging technologies in AI, Cloud, and Systems, collaborating with faculty and startups for real-world projects.",
    color: "from-purple-400/20 to-purple-200/10",
    link: "/research",
    icon: "🔬",
  },
  {
    title: "Community & Media",
    description:
      "Our creative backbone — responsible for outreach, branding, and event promotions. They manage our online presence, media design, and collaborations with organizations across India.",
    color: "from-pink-400/20 to-pink-200/10",
    link: "#",
    icon: "🎨",
  },
];

const stats = [
  { number: "500+", label: "Active Members" },
  { number: "40+", label: "Events Conducted" },
  { number: "2000+", label: "Participants Reached" },
  { number: "5+", label: "Operational Divisions" },
];

export default function EcosystemPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Our <span className="text-blue-600">Ecosystem</span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The Codeiam Club is structured as a multi-engine ecosystem designed
            to nurture both technical excellence and entrepreneurial spirit.
            Explore how each division fuels our shared mission to{" "}
            <span className="font-semibold text-black">Code. Build. Launch.</span>
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-3xl bg-gradient-to-br ${sec.color} shadow-md hover:shadow-xl transition`}
            >
              <div className="text-4xl mb-4">{sec.icon}</div>
              <h2 className="text-2xl font-semibold mb-3">{sec.title}</h2>
              <p className="text-gray-700 mb-5">{sec.description}</p>
              <Link
                href={sec.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-3xl p-10 shadow-sm text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-4"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center mt-24">
          <h2 className="text-3xl font-semibold mb-4">
            Be Part of the <span className="text-blue-600">Ecosystem</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you&apos;re a developer, designer, or entrepreneur — there&apos;s a
            place for you in Codeiam. Join one of our chapters or initiatives
            and start building your future today.
          </p>
          <Link
            href="/join"
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const allEvents = [
  // Hackathons & Entrepreneurship
  {
    id: "E21",
    name: "Codeiam Hackathon",
    date: "2024-07-08",
    type: "Hackathon",
    chapter: "General",
    participants: "500+",
    location: "Hybrid",
  },
  {
    id: "E22",
    name: "Startup Mixer",
    date: "2024-07-27",
    type: "Networking",
    chapter: "Entrepreneurship",
    participants: "30",
    location: "Offline",
  },
  {
    id: "E05",
    name: "Ideapalooza: Ideathon Unleashed",
    date: "2024-01-02",
    type: "Contest",
    chapter: "Entrepreneurship",
    participants: "32",
    location: "Codeiam Club",
  },
  // Coding and DSA
  {
    id: "E26",
    name: "100 Days Coding Challenge Intro",
    date: "2024-10-21",
    type: "Meeting",
    chapter: "DSA & CP",
    participants: "95+",
    location: "Online",
  },
  {
    id: "E25",
    name: "Introductory Session (DSA)",
    date: "2024-05-22",
    type: "Workshop",
    chapter: "DSA & CP",
    participants: "45+",
    location: "Online",
  },
  {
    id: "E19",
    name: "Cloud Computing Awareness Session",
    date: "2024-03-21",
    type: "Workshop",
    chapter: "Ethical DevSecOps",
    participants: "36",
    location: "Codeiam Club",
  },
  {
    id: "E20",
    name: "DevOps Awareness Session",
    date: "2024-03-29",
    type: "Workshop",
    chapter: "Ethical DevSecOps",
    participants: "35",
    location: "Online",
  },
  {
    id: "E18",
    name: "Ethical Hacking: Phishing Attack Awareness",
    date: "2024-03-18",
    type: "Workshop",
    chapter: "Ethical DevSecOps",
    participants: "40",
    location: "Codeiam Club",
  },
  // AI/ML
  {
    id: "E27",
    name: "Kick Start Your Chapter (AI/ML & DS)",
    date: "2024-12-18",
    type: "Workshop",
    chapter: "AI/ML & DS",
    participants: "25",
    location: "Offline",
  },
  // Industry 4.0
  {
    id: "E04",
    name: "IoT Insight",
    date: "2024-01-12",
    type: "Workshop",
    chapter: "Industry 4.0",
    participants: "40",
    location: "Online",
  },
  // Women Techies
  {
    id: "E15",
    name: "Workshop on Python (Basics + Project)",
    date: "2024-03-16",
    type: "Workshop",
    chapter: "Women Techies",
    participants: "50+",
    location: "AUCEW",
  },
  {
    id: "E16",
    name: "Offline Coding Contest (Women Techies)",
    date: "2024-03-23",
    type: "Contest",
    chapter: "Women Techies",
    participants: "30+",
    location: "AUCEW",
  },
  {
    id: "E06",
    name: "Exploring New Horizons in Web Development",
    date: "2024-03-02",
    type: "Workshop",
    chapter: "Women Techies",
    participants: "35",
    location: "AUCEW",
  },
  // General & Leadership
  {
    id: "E23",
    name: "Codeiam Orientation",
    date: "2024-08-10",
    type: "Meeting",
    chapter: "General",
    participants: "500",
    location: "Offline",
  },
  {
    id: "E24",
    name: "Recruitment Drive",
    date: "2024-09-10",
    type: "Meeting",
    chapter: "General",
    participants: "200+",
    location: "Offline",
  },
  {
    id: "E03",
    name: "CODEIAM Enrolment Drive",
    date: "2023-12-22",
    type: "Meeting",
    chapter: "General",
    participants: "180",
    location: "Codeiam Club",
  },
  // Speaker Sessions
  {
    id: "E09",
    name: "From Startup Idea to Global Changemaker",
    date: "2023-12-27",
    type: "Speaker Session",
    chapter: "Entrepreneurship",
    participants: "75",
    location: "Codeiam Club",
  },
  {
    id: "E08",
    name: "Shaping Sustainable Startups",
    date: "2023-12-06",
    type: "Speaker Session",
    chapter: "Entrepreneurship",
    participants: "70",
    location: "Codeiam Club",
  },
  {
    id: "E13",
    name: "Building Social Impact Ventures",
    date: "2024-01-25",
    type: "Speaker Session",
    chapter: "Entrepreneurship",
    participants: "15",
    location: "Codeiam Club",
  },
  {
    id: "E12",
    name: "From Rationing Fuel to Rekindling Hope",
    date: "2024-01-18",
    type: "Speaker Session",
    chapter: "General",
    participants: "20",
    location: "Online",
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? allEvents : allEvents.filter((e) => e.type === filter);

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Explore <span className="text-blue-600">Codeiam Events</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover workshops, hackathons, and speaker sessions that define
            Codeiam’s mission to merge technology, innovation, and community.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            "All",
            "Workshop",
            "Hackathon",
            "Speaker Session",
            "Meeting",
            "Contest",
            "Networking",
          ].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 rounded-full border text-sm font-medium ${
                filter === type
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:bg-gray-100"
              } transition`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  {ev.name}
                </h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {ev.type}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <b>Date:</b> {ev.date}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <b>Chapter:</b> {ev.chapter}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <b>Location:</b> {ev.location}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <b>Participants:</b> {ev.participants}
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="/join"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Join Codeiam Club
          </a>
        </div>
      </div>
    </section>
  );
}

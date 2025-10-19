'use client';

import Link from "next/link";
import {
  FaRobot,
  FaBrain,
  FaIndustry,
  FaLaptopCode,
  FaUsers,
  FaLock,
  FaCloud,
  FaFlask,
  FaRocket,
  FaCodeBranch,
  FaLightbulb,
} from "react-icons/fa6";

const chapters = [
  {
    slug: "ai-ml",
    name: "AI/ML & Data Science",
    lead: "Kota Harika Sesha Mani",
    description:
      "Applies AI and ML principles to solve real-world problems through data-driven innovation.",
    color: "bg-blue-600",
    icon: <FaBrain className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "industry4",
    name: "Industry 4.0",
    lead: "Mohammad Sajida Khan",
    description:
      "Focuses on IoT, automation, and smart systems driving the Fourth Industrial Revolution.",
    color: "bg-yellow-500",
    icon: <FaIndustry className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "gate",
    name: "GATE",
    lead: "Sravanthi Narisetty",
    description:
      "Supports students preparing for the GATE exam with focused problem-solving sessions.",
    color: "bg-indigo-600",
    icon: <FaRocket className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    lead: "K. Raja Kishore",
    description:
      "Dedicated to security research, ethical hacking, and defending digital ecosystems.",
    color: "bg-red-600",
    icon: <FaLock className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "women-techies",
    name: "Women Techies",
    lead: "Manasa Priya Darshini Badireddi",
    description:
      "Empowering women in tech through coding contests, mentorship, and networking.",
    color: "bg-pink-600",
    icon: <FaUsers className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "startup",
    name: "Startup & Entrepreneurship",
    lead: "Shaik Syeda Sheerin",
    description:
      "Encourages innovation and entrepreneurship via ideathons, speaker sessions, and mixers.",
    color: "bg-green-600",
    icon: <FaLightbulb className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "robotics",
    name: "Robotics & Autonomous Systems",
    lead: "B. Jaswanth Kumar",
    description:
      "Explores robotics, automation, and embedded systems to build intelligent machines.",
    color: "bg-orange-600",
    icon: <FaRobot className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "webdev",
    name: "Web Development",
    lead: "Somayajula Venkata Saujanya Sudeeksha",
    description:
      "Builds web and app development skills using frameworks like React, Next.js, and Flutter.",
    color: "bg-purple-600",
    icon: <FaLaptopCode className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "dsa",
    name: "DSA",
    lead: "Dadi Sowmya",
    description:
      "Focuses on mastering data structures, algorithms, and competitive programming.",
    color: "bg-teal-600",
    icon: <FaCodeBranch className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "cloud-devops",
    name: "Cloud Computing & DevOps",
    lead: "Manoj Sai Prasad",
    description:
      "Covers cloud computing, CI/CD pipelines, and scalable deployment practices.",
    color: "bg-cyan-600",
    icon: <FaCloud className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "rnd",
    name: "R&D",
    lead: "A.J Jyotsna",
    description:
      "Focuses on academic research, innovation, and interdisciplinary collaboration.",
    color: "bg-slate-600",
    icon: <FaFlask className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
  {
    slug: "hackathon",
    name: "Hackathon",
    lead: "Club Hackathon Team",
    description:
      "Brings together students to collaborate, innovate, and build projects in 48 hours.",
    color: "bg-emerald-600",
    icon: <FaRocket className="text-white text-5xl group-hover:scale-110 transition-transform duration-300" />,
  },
];

export default function ChaptersPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-4">
        Find Your <span className="text-blue-600">Community</span>
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore student-led chapters across diverse tech domains. Click a chapter to view its mission, leadership, and past events.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chapters.map((chapter) => (
          <Link key={chapter.slug} href={`/chapters/${chapter.slug}`}>
            <div
              className={`group rounded-2xl p-8 shadow-md hover:shadow-xl transition-all ${chapter.color} text-white cursor-pointer`}
            >
              <div className="flex justify-center mb-4">{chapter.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-center">{chapter.name}</h2>
              <p className="text-sm opacity-90 text-center">{chapter.description}</p>
              <p className="mt-4 text-sm font-semibold text-center">
                Lead: {chapter.lead}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

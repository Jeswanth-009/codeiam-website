"use client";


import Link from "next/link";
import { motion } from "framer-motion";

const timeline = [
  {
    date: "Dec 2023",
    title: "Foundation and Growth",
    desc: "Codeiam Club was established with 180 members and quickly became a hub of innovation, hosting entrepreneurship sessions such as 'Shaping Sustainable Startups' and 'Building a Startup from Scratch'.",
  },
  {
    date: "Jan 2024",
    title: "Innovation and Skill Development",
    desc: "Launched 'Ideapalooza' ideathon and foundational technical workshops like 'Basics of Programming' and 'IoT Insight', introducing the dual-engine model: skill-building + entrepreneurship.",
  },
  {
    date: "Mar 2024",
    title: "Community Expansion",
    desc: "Women Techies chapter began conducting coding contests and Python workshops, enhancing diversity and inclusion across the club.",
  },
  {
    date: "Jul 2024",
    title: "Flagship Hackathon",
    desc: "Hosted the 'Codeiam Hackathon' with 500+ participants, establishing Codeiam as one of the most impactful tech communities on campus.",
  },
  {
    date: "Aug 2024",
    title: "Campus-Wide Impact",
    desc: "Organized an orientation session attended by over 500 students — solidifying Codeiam’s identity as Andhra University’s innovation powerhouse.",
  },
  {
    date: "Sep 2024",
    title: "Formalizing Growth",
    desc: "Conducted an official recruitment drive, bringing over 200 talented new members into the club.",
  },
];

const team = [
  { name: "Mohamed Hijazy Shazin Hassan", role: "President" },
  { name: "Leena Keerthi", role: "Senior Vice President" },
  { name: "Sreepriya Pilla", role: "Vice President" },
  { name: "Dandu S.N. Venkata Pavan Raghavendra Varma", role: "Head of Community Operations" },
  { name: "Vinay Kumar Tadela", role: "Pre-Incubator Lead" },
  { name: "Neeraj Sree Mailee Dudaboyina", role: "Joint Secretary" },
  { name: "Pragyan Kumar Singh", role: "Joint Secretary" },
  { name: "Dasika Sai Surya Chandra Vardhan", role: "Treasurer" },
  { name: "Bade Meghana", role: "Treasurer" },
  { name: "Shaik Asif Umeed", role: "Head of Technology" },
  { name: "Kammara Joel Raj", role: "Head of Public Relations" },
  { name: "Abhiram Lanka", role: "Head of Community Relations" },
  { name: "Mohammed Ibrahim Ballh", role: "Head of Communications" },
  { name: "T. Chakri", role: "Head of Legal Affairs" },
  { name: "Arasada Sri Sai Charan", role: "Technical Head" },
  { name: "Indupudi Pavan Ganesh", role: "Technical Head" },
  { name: "Ganta Krishna Chaitanya", role: "Technical Head" },
  { name: "Karanam Charvi", role: "Technical Head" },
  { name: "Nagireddi Nithya", role: "Head of Events" },
  { name: "Srighakollapu Santosh", role: "Head of Events" },
  { name: "Yasaswini Palla", role: "Design & Media" },
  { name: "Allu Pranati", role: "Design & Media" },
  { name: "Kota Harika Sesha Mani", role: "Chapter Lead – AI/ML & Data Science" },
  { name: "Mohammad Sajida Khan", role: "Chapter Lead – Industry 4.0" },
  { name: "Sravanthi Narisetty", role: "Chapter Lead – GATE" },
  { name: "K. Raja Kishore", role: "Chapter Lead – Cybersecurity" },
  { name: "Manasa Priya Darshini Badireddi", role: "Chapter Lead – Women Techies" },
  { name: "Shaik Syeda Sheerin", role: "Chapter Lead – Startup & Entrepreneurship" },
  { name: "B. Jaswanth Kumar", role: "Chapter Lead – Robotics and Autonomous Systems" },
  { name: "Somayajula Venkata Saujanya Sudeeksha", role: "Chapter Lead – Web Development" },
  { name: "Dadi Sowmya", role: "Chapter Lead – DSA & Competitive Programming" },
  { name: "Manoj Sai Prasad", role: "Chapter Lead – Cloud Computing & DevOps" },
  { name: "A.J Jyotsna", role: "Chapter Lead – Research & Development" },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            About <span className="text-blue-600">Codeiam Club</span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Codeiam Club stands as Andhra University’s official innovation
            ecosystem — a dual-engine organization combining{" "}
            <b>technical mastery</b> with <b>entrepreneurial incubation</b>. We
            exist to transform students from learners to creators and founders.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Mission</h2>
            <p className="text-gray-700">
              To foster a collaborative ecosystem for technology enthusiasts to
              innovate, build practical skills, and transform ideas into
              impactful ventures through hands-on learning, expert mentorship,
              and a vibrant community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h2 className="text-2xl font-bold mb-3 text-blue-600">Our Vision</h2>
            <p className="text-gray-700">
              To be the premier student-led incubator for the next generation of
              technologists, entrepreneurs, and leaders — bridging academic
              knowledge with real-world impact.
            </p>
          </div>
        </div>

        {/* Our Journey Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative border-l border-gray-300 ml-6">
            {timeline.map((item, i) => (
              <div key={i} className="mb-10 ml-6">
                <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-lg font-semibold">
                  {item.date} — {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Club Structure */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Club Structure</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            Codeiam Club operates across three major divisions:{" "}
            <b>Chapters</b> (technical skill development),{" "}
            <b>Pre-Incubation & Hackathons</b> (innovation and entrepreneurship), and{" "}
            <b>Research & Development</b> (academic exploration). Each division
            is powered by specialized student teams led by chapter heads and
            technical coordinators.
          </p>
        </div>

        {/* Our Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">
            Get Involved
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Whether you’re a developer, designer, or entrepreneur — Codeiam has
            a place for you. Join a chapter, lead an initiative, or start your
            own.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/join"
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Become a Member
            </Link>
            <Link
              href="/chapters"
              className="bg-white border px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Propose a Chapter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

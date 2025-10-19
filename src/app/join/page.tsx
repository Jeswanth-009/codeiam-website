"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Become a Part of the <span className="text-blue-600">Codeiam Club</span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join a thriving community of developers, innovators, and entrepreneurs.
            At Codeiam, you’ll learn, build, and collaborate to turn bold ideas into
            impactful solutions.
          </p>
        </div>

        {/* Membership Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: "🧠",
              title: "Skill Development",
              desc: "Gain hands-on experience through workshops, coding challenges, and chapter sessions across domains like AI, Web Dev, and Cybersecurity.",
            },
            {
              icon: "🚀",
              title: "Innovation & Entrepreneurship",
              desc: "Turn your ideas into reality through our ideathons, hackathons, and pre-incubation mentorship programs.",
            },
            {
              icon: "🤝",
              title: "Networking & Growth",
              desc: "Connect with industry experts, founders, and mentors who will help guide your professional journey.",
            },
          ].map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{benefit.title}</h3>
              <p className="text-gray-700 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Join Form */}
        <div className="bg-white rounded-3xl p-10 shadow-sm mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Join Now</h2>
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Student ID / Roll Number
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 21CS1234"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Area of Interest
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a Domain</option>
                  <option>AI / ML & Data Science</option>
                  <option>Web Development</option>
                  <option>Cybersecurity</option>
                  <option>DSA & Competitive Programming</option>
                  <option>Cloud Computing & DevOps</option>
                  <option>Startup & Entrepreneurship</option>
                  <option>Industry 4.0</option>
                  <option>Women Techies</option>
                  <option>R&D and Innovation</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Why do you want to join Codeiam Club?
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your goals and what you hope to learn…"
                />
              </div>
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                🎉 Thank you for joining Codeiam Club!
              </h3>
              <p className="text-gray-600">
                Your application has been submitted successfully.  
                You’ll receive a confirmation email soon.
              </p>
            </div>
          )}
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is there any membership fee?",
                a: "No. Codeiam Club is completely free to join for Andhra University students.",
              },
              {
                q: "Who can join the club?",
                a: "Any student with a passion for technology, innovation, or entrepreneurship — regardless of their skill level — is welcome.",
              },
              {
                q: "How much time do I need to commit?",
                a: "Most members spend 3–5 hours per week attending sessions, hackathons, or projects. Participation is flexible.",
              },
              {
                q: "Can I join multiple chapters?",
                a: "Yes! You can explore different domains and participate in activities across multiple chapters based on your interests.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-1">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to <span className="text-blue-600">Code, Build, and Launch?</span>
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Take your first step toward becoming a leader in technology and innovation.
          </p>
          <a
            href="/chapters"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Explore Chapters
          </a>
        </div>
      </div>
    </section>
  );
}

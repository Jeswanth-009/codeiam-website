"use client";

import Link from "next/link";

export default function PreIncubationPage() {
  const hackathons = [
    {
      name: "Pre-Hackathon: Health and Welfare",
      date: "January 23 2024",
      type: "Workshop",
      desc: "A preparatory innovation workshop focusing on health and welfare challenges under the Codeiam Hackathon series.",
    },
    {
      name: "Pre-Hackathon: Tribal Welfare (3 Days)",
      date: "November 17 2023",
      type: "Workshop",
      desc: "A three-day mentorship-driven hackathon that introduced students to problem-solving for tribal and rural development.",
    },
    {
      name: "Ideapalooza – Ideathon Unleashed",
      date: "January 2 2024",
      type: "Contest",
      desc: "A campus-wide ideathon organized to help participants pitch innovative ideas for pre-incubation consideration.",
    },
    {
      name: "Codeiam Hackathon",
      date: "July 8 2024",
      type: "Hackathon",
      desc: "Flagship innovation event bringing together 500 participants for rapid prototyping and venture building.",
    },
  ];

  const mentors = [
    {
      name: "Dr. Ravi Eswarapu",
      title: "CEO, T-Hub",
    },
    {
      name: "Dr. Diwakar Vadapalli",
      title: "Manager, T-Hub",
    },
    {
      name: "Mr. Sekhar Javvadi",
      title: "Co-founder, Spotmies-LLP",
    },
    {
      name: "Mr. Srinivas Savaram",
      title: "Director, TiE Vizag",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          From <span className="text-blue-600">Idea</span> to{" "}
          <span className="text-green-600">Incubator</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          The Pre-Incubation and Hackathons division helps students turn their ideas into
          reality through structured mentorship, expert sessions, and innovation-driven hackathons.
        </p>
      </section>

      {/* Mentorship and Support */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Mentorship & Support</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          The division connects students with experienced industry mentors and startup
          leaders from T-Hub and TiE Vizag who provide hands-on guidance through ideation,
          validation and presentation phases.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {mentors.map((m) => (
            <div
              key={m.name}
              className="bg-white border rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="text-lg font-semibold text-gray-900">{m.name}</div>
              <div className="text-sm text-blue-600 mt-1">{m.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Hackathons and Ideathons */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">
          Hackathons & Ideathons
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          These flagship programs provide a launchpad for student innovators to develop
          prototypes and startups under structured mentorship and evaluation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {hackathons.map((h) => (
            <div
              key={h.name}
              className="p-6 bg-white border rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-gray-900">{h.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {h.date} • {h.type}
              </p>
              <p className="text-gray-700 text-sm mt-3">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application CTA */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">
          Apply for Pre-Incubation
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Students with validated ideas from hackathons and ideathons can apply for structured mentorship and pre-incubation support to develop prototypes and launch ventures.
        </p>
        <Link
          href="/apply"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}

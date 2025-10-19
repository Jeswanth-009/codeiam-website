"use client";

import Link from "next/link";

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          Advancing Technology Through <span className="text-blue-600">Research</span>
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          The Research Division of Codeiam Club highlights the academic and
          research-oriented activities conducted by members. It provides a
          collaborative platform for exploring applied technologies and
          producing impactful research outcomes.
        </p>
      </section>

      {/* Research Labs / Focus Areas */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">
          Research Labs & Focus Areas
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          The club is involved in focused areas of research that align with
          emerging technological trends and interdisciplinary innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Applied Artificial Intelligence
            </h3>
            <p className="text-gray-700 text-sm">
              Research in data-driven intelligence, predictive modeling,
              and automation for real-world applications.
            </p>
          </div>
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Cybersecurity
            </h3>
            <p className="text-gray-700 text-sm">
              Investigating secure systems, ethical hacking,
              and strategies to protect information and infrastructure.
            </p>
          </div>
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-xl text-blue-600 mb-2">
              Blockchain
            </h3>
            <p className="text-gray-700 text-sm">
              Exploring distributed ledgers, transparency models,
              and applications of decentralized technology.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research Works */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">
          Featured Research Works
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          This section showcases selected projects conducted under the club’s
          Research Division, demonstrating innovation across different
          technological domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Project 1
            </h3>
            <p className="text-sm text-gray-700">
              Placeholder for one of the key research projects. The details,
              visuals, and description will be displayed once finalized.
            </p>
          </div>
          <div className="p-6 bg-gray-50 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Project 2
            </h3>
            <p className="text-sm text-gray-700">
              Placeholder for a featured collaborative research work, as
              described in Section 8.0 of the official club blueprint.
            </p>
          </div>
          <div className="p-6 bg-gray-50 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Project 3
            </h3>
            <p className="text-sm text-gray-700">
              Placeholder for an ongoing or recently completed project within
              the Research Division.
            </p>
          </div>
        </div>
      </section>

      {/* Publications and Papers */}
      <section className="space-y-10">
        <h2 className="text-3xl font-bold text-center">
          Publications & Papers
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          A list of research papers, technical reports, and publications
          authored by Codeiam Club members will be available here.
        </p>

        <div className="max-w-3xl mx-auto text-center mt-6">
          <div className="p-6 bg-white border rounded-2xl shadow-sm">
            <p className="text-gray-700 text-sm">
              This section will link to articles and publications once they are
              released under the Research Division.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Portal */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">
          Collaboration Portal
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Students and faculty interested in collaborating on research projects
          can reach out through the contact page to engage with the club’s R&D
          division.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Contact Research Division
        </Link>
      </section>
    </div>
  );
}

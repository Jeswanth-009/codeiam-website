import { notFound } from "next/navigation";

const chapterData = {
  "ai-ml": {
    name: "AI/ML & Data Science",
    lead: "Kota Harika Sesha Mani",
    overview:
      "The AI/ML & Data Science Chapter applies machine learning, data analysis, and artificial intelligence principles to solve complex real-world problems. It focuses on coding sessions, model-building workshops, and guiding members in applied data projects.",
    pastEvents: [
      {
        id: "E27",
        name: "Kick Start Your Chapter Session (AI/ML)",
        date: "2024-12-18",
        type: "Workshop",
        speaker: "Neeraj, Raviteja",
        participants: "25",
        location: "Offline",
      },
    ],
  },
  "industry4": {
    name: "Industry 4.0",
    lead: "Mohammad Sajida Khan",
    overview:
      "The Industry 4.0 Chapter focuses on IoT, automation, and smart system design — helping students build the technologies driving the Fourth Industrial Revolution.",
    pastEvents: [
      {
        id: "E04",
        name: "IoT Insight",
        date: "2024-01-12",
        type: "Workshop",
        speaker: "Bandi Jayasatyadurgarao",
        participants: "40",
        location: "Online",
      },
    ],
  },
  "cybersecurity": {
    name: "Ethical DevSecOps (Cybersecurity)",
    lead: "K. Raja Kishore",
    overview:
      "The Ethical DevSecOps Chapter explores the intersection of development, operations, and security — promoting ethical hacking, automation, and cloud security practices.",
    pastEvents: [
      {
        id: "E18",
        name: "Phishing Attack Awareness Session",
        date: "2024-03-18",
        type: "Workshop",
        speaker: "Raghavendra Varma",
        participants: "40",
        location: "Codeiam Club",
      },
      {
        id: "E19",
        name: "Cloud Computing Awareness Session",
        date: "2024-03-21",
        type: "Workshop",
        speaker: "Shaik Asif Umeed",
        participants: "36",
        location: "Codeiam Club",
      },
      {
        id: "E20",
        name: "DevOps Awareness Session",
        date: "2024-03-29",
        type: "Workshop",
        speaker: "Shaik Asif Umeed",
        participants: "35",
        location: "Online",
      },
    ],
  },
  "women-techies": {
    name: "Women Techies",
    lead: "Manasa Priya Darshini Badireddi",
    overview:
      "The Women Techies Chapter creates an empowering and supportive environment for women in technology through targeted workshops, networking events, and coding contests.",
    pastEvents: [
      {
        id: "E06",
        name: "Exploring New Horizons in Web Development",
        date: "2024-03-02",
        type: "Workshop",
        speaker: "Women Techies Club",
        participants: "35",
        location: "AUCEW",
      },
      {
        id: "E15",
        name: "Workshop on Python (Basics + Project)",
        date: "2024-03-16",
        type: "Workshop",
        speaker: "Women Techies Club",
        participants: "50+",
        location: "AUCEW",
      },
      {
        id: "E16",
        name: "Offline Coding Contest",
        date: "2024-03-23",
        type: "Contest",
        speaker: "Women Techies Club",
        participants: "30+",
        location: "AUCEW",
      },
    ],
  },
  "startup": {
    name: "Startup & Entrepreneurship",
    lead: "Shaik Syeda Sheerin",
    overview:
      "The Startup & Entrepreneurship Chapter nurtures innovative ideas through ideathons, hackathons, and talks from industry leaders. It bridges the gap between ideas and real-world startups.",
    pastEvents: [
      {
        id: "E05",
        name: "Ideapalooza: Ideathon Unleashed",
        date: "2024-01-02",
        type: "Contest",
        speaker: "Club Members",
        participants: "32",
        location: "Codeiam",
      },
      {
        id: "E08",
        name: "Shaping Sustainable Startups",
        date: "2023-12-06",
        type: "Speaker Session",
        speaker: "Dr. Diwakar Vadapalli (Manager, T-Hub)",
        participants: "70",
        location: "Codeiam Club",
      },
      {
        id: "E09",
        name: "From Startup Idea to Global Changemaker",
        date: "2023-12-27",
        type: "Speaker Session",
        speaker: "Dr. Ravi Eswarapu (CEO, T-Hub)",
        participants: "75",
        location: "Codeiam Club",
      },
      {
        id: "E22",
        name: "Startup Mixer",
        date: "2024-07-27",
        type: "Networking",
        speaker: "Bodem Raj Kumar, Founders",
        participants: "30",
        location: "Offline",
      },
    ],
  },
  "webdev": {
    name: "AllUVR Web/App Development",
    lead: "Somayajula Venkata Saujanya Sudeeksha",
    overview:
      "The Web/App Development Chapter provides hands-on training in web frameworks like React, Next.js, and Flutter, helping students design real-world applications.",
    pastEvents: [
      {
        id: "E02",
        name: "Basics of Programming Workshop",
        date: "2024-01-12",
        type: "Workshop",
        speaker: "Shoukath Ali (Lead, AllUVR)",
        participants: "35+",
        location: "Online",
      },
    ],
  },
  "dsa": {
    name: "DSA & Competitive Programming",
    lead: "Dadi Sowmya",
    overview:
      "The DSA Chapter focuses on mastering fundamental data structures and algorithms, preparing students for coding interviews and competitive programming contests.",
    pastEvents: [
      {
        id: "E25",
        name: "Introductory Session (DSA)",
        date: "2024-05-22",
        type: "Workshop",
        speaker: "Santosh Gollapalli & Team",
        participants: "45+",
        location: "Online",
      },
      {
        id: "E26",
        name: "100 Days Coding Challenge Intro",
        date: "2024-10-21",
        type: "Meeting",
        speaker: "Santosh Gollapalli & Team",
        participants: "95+",
        location: "Online",
      },
    ],
  },
  "hackathon": {
    name: "Hackathon Chapter",
    lead: "Club Hackathon Team",
    overview:
      "The Hackathon Chapter drives innovation through high-energy competitions, mentorship, and project incubation. It encourages members to collaborate and build impactful solutions.",
    pastEvents: [
      {
        id: "E01",
        name: "Pre-Hackathon: Health and Welfare",
        date: "2024-01-23",
        type: "Workshop",
        speaker: "Giri Raj Selchar",
        participants: "25+",
        location: "Codeiam.club",
      },
      {
        id: "E07",
        name: "Pre-Hackathon: Tribal Welfare",
        date: "2023-11-17",
        type: "Workshop",
        speaker: "Gautam, Varma, and others",
        participants: "70/40/40",
        location: "Codeiam",
      },
      {
        id: "E21",
        name: "Codeiam Hackathon",
        date: "2024-07-08",
        type: "Hackathon",
        speaker: "Club Volunteers & Mentors",
        participants: "500+",
        location: "Hybrid",
      },
    ],
  },
};

export default function ChapterDetails({ params }: { params: { slug: string } }) {
  const chapter = chapterData[params.slug as keyof typeof chapterData];
  if (!chapter) return notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">{chapter.name}</h1>
      <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
        {chapter.overview}
      </p>

      <div className="bg-gray-100 p-6 rounded-2xl shadow-sm mb-10 text-center">
        <h2 className="text-lg font-semibold text-gray-900">Current Lead</h2>
        <p className="text-gray-700">{chapter.lead}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">Past Events</h2>

      {chapter.pastEvents.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Event Name</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Type</th>
                <th className="py-3 px-4 text-left">Speaker(s)</th>
                <th className="py-3 px-4 text-left">Participants</th>
                <th className="py-3 px-4 text-left">Location</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {chapter.pastEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{event.name}</td>
                  <td className="py-3 px-4">{event.date}</td>
                  <td className="py-3 px-4">{event.type}</td>
                  <td className="py-3 px-4">{event.speaker}</td>
                  <td className="py-3 px-4">{event.participants}</td>
                  <td className="py-3 px-4">{event.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No past events available for this chapter yet.</p>
      )}
    </section>
  );
}

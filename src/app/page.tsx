import MissionVision from "@/components/sections/MissionVision";
import Hero from "../components/hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import StatsSection from "@/components/sections/StatsSection";
import MentorsSection from "@/components/sections/MentorsSection";
import JoinCTA from "@/components/sections/JoinCTA";
import Chapters from "@/components/sections/Chapters";
import LeadTeam from "@/components/ui/lead-team";
import Footer from "@/components/ui/footer";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <MissionVision />
      <WhatWeDo />
      <Chapters />
      <StatsSection />
      <LeadTeam />
      <Testimonials />
    </main>
  );
}

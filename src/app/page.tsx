import MissionVision from "@/components/sections/MissionVision";
import Hero from "../components/hero";
import WhatWeDo from "@/components/sections/WhatWeDo";
import StatsSection from "@/components/sections/StatsSection";
import Chapters from "@/components/sections/Chapters";
import LeadTeam from "@/components/ui/lead-team";
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
    </main>
  );
}

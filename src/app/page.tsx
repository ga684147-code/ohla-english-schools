import { Hero } from "@/components/home/Hero";
import { VirtualCampus } from "@/components/home/VirtualCampus";
import { WhyOHLA } from "@/components/home/WhyOHLA";
import { ProgramCards } from "@/components/home/ProgramCards";
import { PartnerUniversities } from "@/components/home/PartnerUniversities";
import { CampusHighlights } from "@/components/home/CampusHighlights";
import { InternationalExperience } from "@/components/home/InternationalExperience";
import { Testimonials } from "@/components/home/Testimonials";
import { LatestArticles } from "@/components/home/LatestArticles";
import { ContactCTA } from "@/components/home/ContactCTA";
export default function Home() {
  return (
    <main id="main">
      <Hero />
      <VirtualCampus videoSrc="/videos/virtual-campus.mp4" />
      <WhyOHLA />
      <ProgramCards />
      <PartnerUniversities />
      <CampusHighlights />
      <InternationalExperience />
      <Testimonials />
      <LatestArticles />
      <ContactCTA />
      <a className="virtual-tab" href="#virtual-campus">
        Virtual Campus
      </a>
    </main>
  );
}

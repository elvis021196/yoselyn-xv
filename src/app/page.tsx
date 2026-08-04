import { CountdownSection } from "@/components/CountdownSection";
import { DressCodeSection } from "@/components/DressCodeSection";
import { EventDateSection } from "@/components/EventDateSection";
import { FinalSection } from "@/components/FinalSection";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { RsvpSection } from "@/components/RsvpSection";
import { WelcomeSection } from "@/components/WelcomeSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WelcomeSection />
      <CountdownSection />
      <EventDateSection />
      <LocationSection />
      <DressCodeSection />
      <RsvpSection />
      <FinalSection />
    </main>
  );
}

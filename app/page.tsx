import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomeSection from "./components/sections/HomeSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import InvestorsSection from "./components/sections/InvestorsSection";
import AboutSection from "./components/sections/AboutSection";
import FAQSection from "./components/sections/FAQSection";
import WaitingListSection from "./components/sections/WaitingListSection";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navbar />

      <HomeSection />
      <HowItWorksSection />
      <BenefitsSection />
      <InvestorsSection />
      <AboutSection />
      <FAQSection />
      <WaitingListSection />

      <Footer />
    </main>
  );
}
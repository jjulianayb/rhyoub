import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChooseYourPain from "@/components/ChooseYourPain";
import InvisibleBlocks from "@/components/InvisibleBlocks";
import CostOfInaction from "@/components/CostOfInaction";
import OurResponse from "@/components/OurResponse";
import SolutionSections from "@/components/SolutionSections";
import CasosMediaSection from "@/components/CasosMediaSection";
import WhoWeAre from "@/components/WhoWeAre";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ChooseYourPain />
      <InvisibleBlocks />
      <CostOfInaction />
      <OurResponse />
      <SolutionSections />
      <CasosMediaSection />
      <WhoWeAre />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;

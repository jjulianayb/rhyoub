import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InvisibleBlocks from "@/components/InvisibleBlocks";
import CostOfInaction from "@/components/CostOfInaction";
import EcosystemNav from "@/components/EcosystemNav";
import WhoWeAre from "@/components/WhoWeAre";
import SolutionSections from "@/components/SolutionSections";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <InvisibleBlocks />
      <CostOfInaction />
      <EcosystemNav />
      <WhoWeAre />
      <SolutionSections />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;

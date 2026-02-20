import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CostOfInaction from "@/components/CostOfInaction";
import Ecosystem from "@/components/Ecosystem";
import SocialProof from "@/components/SocialProof";
import PricingCards from "@/components/PricingCards";
import Footer from "@/components/Footer";
import FloatingChatbot from "@/components/FloatingChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <CostOfInaction />
      <Ecosystem />
      <SocialProof />
      <PricingCards />
      <Footer />
      <FloatingChatbot />
    </div>
  );
};

export default Index;

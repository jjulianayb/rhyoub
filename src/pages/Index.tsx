import PortfolioHero from "@/components/PortfolioHero";
import AboutYoubSection from "@/components/AboutYoubSection";
import SegmentsGrid from "@/components/SegmentsGrid";
import BeneficiosNegocio from "@/components/BeneficiosNegocio";
import CtaConsultor from "@/components/CtaConsultor";
import ClientLogos from "@/components/ClientLogos";
import CasosMediaSection from "@/components/CasosMediaSection";

const Index = () => {
  return (
    <main>
      <PortfolioHero />
      <AboutYoubSection />
      <SegmentsGrid />
      <BeneficiosNegocio />
      <CtaConsultor />
      <ClientLogos />
      <CasosMediaSection />
    </main>
  );
};

export default Index;

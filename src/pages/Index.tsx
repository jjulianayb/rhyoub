import PortfolioHero from "@/components/PortfolioHero";
import TrustExperienceSection from "@/components/TrustExperienceSection";
import ProductEcosystemSection from "@/components/ProductEcosystemSection";
import AboutYoubSection from "@/components/AboutYoubSection";
import SegmentsGrid from "@/components/SegmentsGrid";
import SolucoesEmpresasSection from "@/components/SolucoesEmpresasSection";
import BeneficiosNegocio from "@/components/BeneficiosNegocio";
import CtaConsultor from "@/components/CtaConsultor";
import ClientLogos from "@/components/ClientLogos";
import CasosMediaSection from "@/components/CasosMediaSection";

const Index = () => {
  return (
    <main>
      <PortfolioHero />
      <TrustExperienceSection />
      <ProductEcosystemSection />
      <AboutYoubSection />
      <SegmentsGrid />
      <SolucoesEmpresasSection />
      <BeneficiosNegocio />
      <CtaConsultor />
      <ClientLogos />
      <CasosMediaSection />
    </main>
  );
};

export default Index;

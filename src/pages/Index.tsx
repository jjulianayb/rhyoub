import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import CursosSection from "@/components/CursosSection";
import SolucoesEmpresasSection from "@/components/SolucoesEmpresasSection";
import BeneficiosNegocio from "@/components/BeneficiosNegocio";
import CtaConsultor from "@/components/CtaConsultor";
import ClientLogos from "@/components/ClientLogos";
import CasosMediaSection from "@/components/CasosMediaSection";

const Index = () => {
  return (
    <main>
      <Hero />
      <WhoWeAre />
      <CursosSection />
      <SolucoesEmpresasSection />
      <BeneficiosNegocio />
      <CtaConsultor />
      <ClientLogos />
      <CasosMediaSection />
    </main>
  );
};

export default Index;

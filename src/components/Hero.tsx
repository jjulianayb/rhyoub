import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroCorporate from "@/assets/hero-corporate.jpg";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Hero = () => {
  const scrollToSolutions = () => {
    document.getElementById("escolha-dor")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="relative min-h-[85vh] flex items-center section-padding pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(262_83%_58%/0.06)_0%,transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-primary text-sm font-semibold uppercase tracking-widest mb-6"
            >
              Ecossistema de DHO, Tecnologia & IA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-balance text-foreground"
            >
              Escalando performance.{" "}
              <span className="glow-text">Transformando culturas.</span>{" "}
              Potencializando talentos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Para empresas que não aceitam lideranças e culturas medianas. Metodologia exclusiva que integra tecnologia e humanização.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToSolutions}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Simular meu cenário
                <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Agendar conversa estratégica
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 rounded-3xl blur-2xl" />
              <img
                src={heroCorporate}
                alt="Líderes em reunião estratégica com dashboard digital"
                className="relative rounded-2xl shadow-2xl shadow-primary/10 w-full object-cover aspect-[16/10]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

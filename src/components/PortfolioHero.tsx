import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { segments } from "@/data/segments";
import heroFdc from "@/assets/hero-fdc-style.jpg";

const WHATSAPP_LINK =
  "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const PortfolioHero = () => {
  return (
    <section className="relative h-[92svh] min-h-[640px] overflow-hidden flex items-center">
      <img src={heroFdc} alt="Equipe executiva reunida em torno de um dashboard de gestão" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

      <div className="relative z-10 container mx-auto px-5 md:px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              you<span className="text-primary">B</span>
            </span>
            <span className="text-white/40">|</span>
            <span className="text-sm md:text-base text-white/70 font-medium uppercase tracking-widest">
              Ecossistema de desenvolvimento humano
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-[1.15] mb-5">
            A experiência da youB transformada em um ecossistema inteligente para desenvolver pessoas e organizações.
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mb-8">
            Método, tecnologia e inteligência artificial para organizar pessoas, desenvolver lideranças e apoiar decisões estratégicas com mais clareza e continuidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button
              onClick={() => document.getElementById("solucoes-empresas")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90"
            >
              Conhecer o ecossistema
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/10 hover:border-white"
            >
              Agendar uma demonstração
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick vertical chips */}
          <div className="flex flex-wrap gap-2 mt-10">
            {segments.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="px-4 py-2 rounded-full border border-white/30 text-white text-sm font-medium transition-all hover:bg-white/10 hover:border-white"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroFdc from "@/assets/hero-fdc-style.jpg";
import solAcademias from "@/assets/sol-academias.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const slides = [
  {
    image: heroFdc,
    subtitle: "Ecossistema de DHO, Tecnologia & IA",
    title: "Escalando performance.\nTransformando culturas.",
    description: "Para empresas que não aceitam lideranças e culturas medianas.",
    cta: { label: "Simular meu cenário", action: "scroll:escolha-dor" },
    ctaSecondary: { label: "Agendar conversa estratégica", href: WHATSAPP_LINK },
  },
  {
    image: solAcademias,
    subtitle: "Academias Corporativas",
    title: "Liderança que\ntransforma na prática",
    description: "Do treinamento pontual à aprendizagem contínua com impacto mensurável.",
    cta: { label: "Conhecer solução", action: "navigate:/academias" },
  },
  {
    image: solPlataforma,
    subtitle: "Plataforma Digital & IA",
    title: "Tecnologia a serviço do\ndesenvolvimento humano",
    description: "Centralize conteúdos, dados e trilhas com inteligência artificial.",
    cta: { label: "Explorar plataforma", action: "navigate:/plataforma" },
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCta = (action: string) => {
    if (action.startsWith("scroll:")) {
      document.getElementById(action.replace("scroll:", ""))?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (action.startsWith("navigate:")) {
      navigate(action.replace("navigate:", ""));
    }
  };

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="top" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt={slides[current].title} className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">{slides[current].subtitle}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 whitespace-pre-line">{slides[current].title}</h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">{slides[current].description}</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => handleCta(slides[current].cta.action)}
                  className="inline-flex items-center gap-2 bg-white text-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
                >
                  {slides[current].cta.label}
                </button>
                {slides[current].ctaSecondary && (
                  <a
                    href={slides[current].ctaSecondary!.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-white/60 text-white px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/10 hover:border-white"
                  >
                    {slides[current].ctaSecondary!.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button onClick={prev} className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-3 bg-white" : "w-3 h-3 bg-white/40 hover:bg-white/60"}`} />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;

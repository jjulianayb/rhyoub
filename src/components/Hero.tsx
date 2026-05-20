import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Users, Building2, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroFdc from "@/assets/hero-fdc-style.jpg";
import solAcademias from "@/assets/sol-academias.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const slides = [
  {
    image: heroFdc,
    subtitle: "Ecossistema completo de DHO",
    title: "Transformamos cultura, líderes\ne times com um ecossistema\ncompleto de DHO.",
    description: "A youB conecta desenvolvimento humano, cultura e liderança em experiências contínuas, profundas e práticas.",
    supportText: "Uma conversa sem compromisso, para entender o momento da sua empresa e desenhar juntos o melhor caminho dentro do ecossistema youB.",
    cta: { label: "Agendar uma conversa", action: "scroll:fale-conosco" },
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

const categoryCards = [
  {
    icon: Users,
    title: "Programas\n& Cursos",
    description: "Formação executiva para líderes e times",
    action: "scroll:cursos",
  },
  {
    icon: Building2,
    title: "Soluções para\nEmpresas",
    description: "Consultoria, cultura e estratégia de pessoas",
    action: "scroll:solucoes-empresas",
  },
  {
    icon: BookOpen,
    title: "Conteúdos\n& Mídia",
    description: "Artigos, cases e provocações autorais",
    action: "scroll:be-move",
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
    <section id="top" className="relative">
      {/* Hero Slide Area */}
      <div className="relative h-[85svh] md:h-[80vh] min-h-[500px] md:min-h-[600px] overflow-hidden">
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

        <div className="relative z-10 h-full container mx-auto px-5 md:px-6 flex items-end md:items-center pb-32 md:pb-48">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
                <p className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-widest mb-3 md:mb-4">{slides[current].subtitle}</p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4 md:mb-6 whitespace-pre-line">{slides[current].title}</h1>
                <p className="text-sm md:text-xl text-white/80 mb-4 max-w-lg">{slides[current].description}</p>
                {(slides[current] as any).supportText && (
                  <p className="hidden md:block text-sm text-white/50 mb-8 max-w-lg leading-relaxed">{(slides[current] as any).supportText}</p>
                )}
                {!(slides[current] as any).supportText && <div className="mb-4" />}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <button
                    onClick={() => handleCta(slides[current].cta.action)}
                    className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-6 md:px-7 py-3 md:py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
                  >
                    {slides[current].cta.label}
                  </button>
                  {slides[current].ctaSecondary && (
                    <a
                      href={slides[current].ctaSecondary!.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-6 md:px-7 py-3 md:py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/10 hover:border-white"
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

        {/* Carousel controls */}
        <div className="absolute top-20 md:top-auto md:bottom-8 right-5 md:right-8 z-20 flex items-center gap-2 md:gap-3">
          <button onClick={prev} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <div className="flex items-center gap-1.5 md:gap-2">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 rounded-full ${i === current ? "w-6 md:w-8 h-2.5 md:h-3 bg-white" : "w-2.5 md:w-3 h-2.5 md:h-3 bg-white/40 hover:bg-white/60"}`} />
            ))}
          </div>
          <button onClick={next} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* HSM-style overlapping category cards */}
      <div className="relative z-20 container mx-auto px-5 md:px-6 -mt-16 md:-mt-20">
        <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-4xl">
          {categoryCards.map((card, i) => (
            <motion.button
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              onClick={() => handleCta(card.action)}
              className="group bg-card border border-border rounded-2xl p-4 md:p-7 text-left shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-5 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-foreground whitespace-pre-line leading-tight mb-1 md:mb-2">{card.title}</h3>
              <p className="hidden md:block text-sm text-muted-foreground">{card.description}</p>
              <span className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-primary mt-2 md:mt-4 group-hover:gap-2 transition-all">
                conheça <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

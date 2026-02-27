import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Briefcase, GitBranch, Shield, Monitor, GraduationCap } from "lucide-react";

import solConsultoria from "@/assets/sol-consultoria.jpg";
import solCarreira from "@/assets/sol-carreira.jpg";
import solSucessao from "@/assets/sol-sucessao.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";
import solAcademias from "@/assets/sol-academias.jpg";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

const solucoes = [
  {
    icon: GraduationCap,
    image: solAcademias,
    title: "Academias Corporativas & Programas de Liderança",
    description: "Do treinamento pontual à aprendizagem contínua com trilhas customizadas.",
    whatsapp: encodeURIComponent("Olá, quero estruturar uma Academia Corporativa."),
  },
  {
    icon: Briefcase,
    image: solConsultoria,
    title: "Consultoria Estratégica & Projetos de DHO",
    description: "Estrutura, processos e visão de longo prazo para pessoas.",
    whatsapp: encodeURIComponent("Olá, preciso estruturar o DHO da minha empresa."),
  },
  {
    icon: GitBranch,
    image: solCarreira,
    title: "Arquitetura de Carreira & Cargos",
    description: "Clareza de trajetória, critérios e perspectiva de crescimento.",
    whatsapp: encodeURIComponent("Olá, quero organizar carreira e cargos na minha empresa."),
  },
  {
    icon: Shield,
    image: solSucessao,
    title: "Sucessão Estratégica & Continuidade",
    description: "Liderar a transição com plano de sucessão e retenção.",
    whatsapp: encodeURIComponent("Olá, quero um plano de sucessão para minha empresa."),
  },
  {
    icon: Monitor,
    image: solPlataforma,
    title: "Plataforma Digital & IA Mentora",
    description: "Centralize conteúdos, dados e trilhas com inteligência artificial.",
    whatsapp: encodeURIComponent("Olá, quero conhecer o ecossistema digital youB."),
  },
];

const SolucoesEmpresasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="solucoes-empresas" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Soluções para Empresas</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Nosso ecossistema de soluções
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {solucoes.map((sol, i) => (
            <motion.a
              key={sol.title}
              href={`${WHATSAPP_BASE}${sol.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex-shrink-0 w-[300px] md:w-[340px] bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 snap-start"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <sol.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">Soluções para empresas</span>
                <h3 className="font-bold text-foreground text-base mb-2 mt-1 leading-snug line-clamp-2">{sol.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{sol.description}</p>
                <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolucoesEmpresasSection;

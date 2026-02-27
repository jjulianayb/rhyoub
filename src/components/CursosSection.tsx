import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import solAcademias from "@/assets/sol-academias.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";
import solCarreira from "@/assets/sol-carreira.jpg";

const cursos = [
  {
    image: solAcademias,
    tag: "Programa",
    title: "Programa de Desenvolvimento de Líderes",
    description: "Formação viva, prática e contínua para lideranças que cuidam de pessoas e de resultados.",
    detail: "Início: Sob demanda",
    href: "/programa-lideres",
  },
  {
    image: solPlataforma,
    tag: "Jornada",
    title: "Jornadas de Cultura, Pertencimento e Times",
    description: "Experiências que fortalecem confiança, conexão e responsabilidade coletiva.",
    detail: "Início: Sob demanda",
    href: "/jornadas-cultura",
  },
  {
    image: solCarreira,
    tag: "Conteúdo",
    title: "Acompanhamento, Suporte e Conteúdos youB",
    description: "Apoio contínuo para quem cuida de gente: RH, lideranças e times.",
    detail: "Acesso contínuo",
    href: "/contato",
  },
];

const CursosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section id="cursos" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Programas & Cursos</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Nossos programas executivos
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <a href="/programa-lideres" className="ml-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              ver todos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cursos.map((curso, i) => (
            <motion.div
              key={curso.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => navigate(curso.href)}
              className="group flex-shrink-0 w-[300px] md:w-[340px] bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer snap-start"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={curso.image}
                  alt={curso.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {curso.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-base mb-2 leading-snug line-clamp-2">{curso.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{curso.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{curso.detail}</span>
                  <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    saiba mais <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CursosSection;

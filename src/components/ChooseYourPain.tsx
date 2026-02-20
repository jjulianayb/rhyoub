import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import solAcademias from "@/assets/sol-academias.jpg";
import solCarreira from "@/assets/sol-carreira.jpg";
import solSucessao from "@/assets/sol-sucessao.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";
import solConsultoria from "@/assets/sol-consultoria.jpg";

const solutions = [
  {
    image: solAcademias,
    tags: ["Liderança", "Desenvolvimento"],
    title: "Academias Corporativas",
    target: "academias",
  },
  {
    image: solConsultoria,
    tags: ["Estratégia", "DHO"],
    title: "Consultoria Estratégica em DHO",
    target: "consultoria",
  },
  {
    image: solCarreira,
    tags: ["Carreira", "Cargos"],
    title: "Arquitetura de Carreira & Cargos",
    target: "carreira",
  },
  {
    image: solSucessao,
    tags: ["Sucessão", "Continuidade"],
    title: "Sucessão Estratégica",
    target: "sucessao",
  },
  {
    image: solPlataforma,
    tags: ["Tecnologia", "IA"],
    title: "Plataforma Digital & IA Mentora",
    target: "plataforma",
  },
];

const ChooseYourPain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="escolha-dor" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Educação
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Conheça nossos portfólios e soluções
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Geração de valor no ecossistema de negócios. A youB desenvolve soluções educacionais para os desafios que você e sua empresa se deparam, com metodologia única.
          </p>
        </motion.div>

        {/* Solution cards – FDC grid style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <motion.button
              key={sol.target}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => scrollTo(sol.target)}
              className="group text-left rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  {sol.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold uppercase tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {sol.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPain;

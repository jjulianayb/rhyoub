import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, GitBranch, Shield, Monitor } from "lucide-react";

const solutions = [
  { icon: GraduationCap, label: "Academias & Programas de Liderança", target: "academias" },
  { icon: Briefcase, label: "Consultoria & Projetos de DHO", target: "consultoria" },
  { icon: GitBranch, label: "Arquitetura de Carreira & Cargos", target: "carreira" },
  { icon: Shield, label: "Sucessão Estratégica & Continuidade", target: "sucessao" },
  { icon: Monitor, label: "Plataforma Digital & IA Mentora", target: "plataforma" },
];

const EcosystemNav = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Soluções
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
            Nosso Ecossistema de Soluções
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {solutions.map((s, index) => (
            <motion.button
              key={s.target}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollTo(s.target)}
              className="glass-card-hover p-6 flex items-center gap-4 text-left group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-foreground text-sm leading-snug">{s.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemNav;

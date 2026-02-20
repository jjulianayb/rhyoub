import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, GitBranch, Shield, Monitor, Briefcase, ArrowRight } from "lucide-react";

const pains = [
  {
    icon: GraduationCap,
    title: "Quero estruturar uma Academia de Liderança",
    text: "Treinamentos soltos não estão mudando o dia a dia das equipes.",
    target: "academias",
  },
  {
    icon: GitBranch,
    title: "Preciso organizar Carreira & Cargos",
    text: "Promoções confusas e falta de perspectiva estão afetando engajamento.",
    target: "carreira",
  },
  {
    icon: Shield,
    title: "Quero um plano de Sucessão",
    text: "Tenho medo de perder pessoas-chave sem substitutos prontos.",
    target: "sucessao",
  },
  {
    icon: Monitor,
    title: "Quero uma Plataforma / Universidade Corporativa",
    text: "Preciso centralizar conteúdos, dados e trilhas de desenvolvimento.",
    target: "plataforma",
  },
  {
    icon: Briefcase,
    title: "Preciso de Consultoria Estratégica em DHO",
    text: "Falta estrutura, processos e clareza para gestão de pessoas.",
    target: "consultoria",
  },
];

const ChooseYourPain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="escolha-dor" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Com qual cenário você mais se identifica hoje?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clique na dor mais próxima da sua realidade e veja como podemos ajudar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <motion.button
              key={pain.target}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => scrollTo(pain.target)}
              className="glass-card-hover p-6 text-left group cursor-pointer flex flex-col gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <pain.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm leading-snug">{pain.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{pain.text}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                Ver solução <ArrowRight className="w-3 h-3" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPain;

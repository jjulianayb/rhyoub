import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, UserMinus, TrendingDown, ShieldAlert } from "lucide-react";

const bullets = [
  {
    icon: ShieldAlert,
    title: "Risco estrutural de sucessão",
    description:
      "A perda de um executivo-chave pode custar até 213% do salário anual (SHRM) e atrasar projetos estratégicos em meses.",
  },
  {
    icon: UserMinus,
    title: "Dificuldade de retenção e atração",
    description:
      "Empresas sem práticas sólidas de DHO perdem até 30% a mais de talentos de mercado (Gallup).",
  },
  {
    icon: TrendingDown,
    title: "Cultura estagnada",
    description:
      "Falta de evolução gera até 20% de queda na produtividade e reduz a capacidade de inovação.",
  },
  {
    icon: AlertTriangle,
    title: "Lideranças despreparadas",
    description:
      "Sem KPIs claros, líderes travam resultados e reduzem em até 30% a performance das equipes.",
  },
];

const CostOfInaction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
            O Custo da <span className="glow-text">Inação</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {bullets.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex items-start gap-5 glass-card p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostOfInaction;

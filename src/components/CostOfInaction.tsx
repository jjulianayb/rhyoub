import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, UserMinus, TrendingDown } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "Sucessão em Risco",
    description:
      "A perda de um executivo-chave custa até 213% do seu salário anual.",
    source: "Dados: SHRM",
  },
  {
    icon: UserMinus,
    title: "Fuga de Talentos",
    description:
      "Empresas sem DHO estratégico perdem 30% mais talentos para o mercado.",
    source: "Dados: Gallup",
  },
  {
    icon: TrendingDown,
    title: "Decisões no Escuro",
    description:
      "RH no piloto automático transforma investimento em custo sem retorno.",
    source: "",
  },
];

const CostOfInaction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            O custo da inação
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            O risco estrutural que{" "}
            <span className="glow-text">não aparece no balanço.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {card.description}
              </p>
              {card.source && (
                <p className="text-xs text-muted-foreground/60 mt-4 font-medium">
                  {card.source}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostOfInaction;

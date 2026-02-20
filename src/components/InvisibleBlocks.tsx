import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Unplug, Cog, EyeOff } from "lucide-react";

const cards = [
  {
    icon: Unplug,
    title: "Desenvolvimento desconectado",
    description:
      "Iniciativas isoladas que não geram impacto real. Consultorias padronizadas, sem conexão com a cultura e realidade do negócio, transformam investimento em custo sem retorno.",
  },
  {
    icon: Cog,
    title: "Gestão de pessoas no piloto automático",
    description:
      "RH sobrecarregado, preso no operacional. As dores ocultas aparecem na dificuldade de reter talentos, na cultura contaminada por padrões antigos e na estagnação do negócio.",
  },
  {
    icon: EyeOff,
    title: "Decisões no escuro",
    description:
      "Tecnologias mal aplicadas e dados pouco confiáveis viram ruído em vez de estratégia. O resultado: decisões frágeis, colaboradores insatisfeitos e marca empregadora enfraquecida.",
  },
];

const InvisibleBlocks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diagnostico" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Diagnóstico
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
            As travas invisíveis do crescimento
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
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvisibleBlocks;

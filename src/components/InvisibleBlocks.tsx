import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cardDisconnected from "@/assets/card-disconnected.jpg";
import cardAutopilot from "@/assets/card-autopilot.jpg";
import cardDarkDecisions from "@/assets/card-dark-decisions.jpg";

const cards = [
  {
    image: cardDisconnected,
    title: "Desenvolvimento desconectado",
    description: "Iniciativas isoladas que não geram impacto real. Consultorias padronizadas transformam investimento em custo sem retorno.",
  },
  {
    image: cardAutopilot,
    title: "Gestão no piloto automático",
    description: "RH sobrecarregado, preso no operacional. Dificuldade de reter talentos e cultura estagnada.",
  },
  {
    image: cardDarkDecisions,
    title: "Decisões no escuro",
    description: "Tecnologias mal aplicadas viram ruído. Decisões frágeis e marca empregadora enfraquecida.",
  },
];

const InvisibleBlocks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diagnostico" ref={ref} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Diagnóstico
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
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
              className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvisibleBlocks;

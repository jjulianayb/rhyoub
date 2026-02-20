import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, History, Users } from "lucide-react";

const items = [
  {
    icon: Layers,
    title: "Ecossistema completo de DHO",
    description:
      "A youB é um ecossistema completo de Desenvolvimento Humano e Organizacional, que integra tecnologia, dados estratégicos e metodologias de mercado com práticas humanizadas.",
  },
  {
    icon: History,
    title: "Track record diversificado",
    description:
      "Desde 2016, construímos um histórico de impacto em diferentes segmentos e players nacionais, sempre respeitando a cultura e a singularidade de cada negócio.",
  },
  {
    icon: Users,
    title: "Impacto em escala",
    description:
      "Mais de 11.000 profissionais impactados ao longo dos anos, acelerando líderes e equipes com prática, humanização e resultados mensuráveis.",
  },
];

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Sobre nós
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance text-foreground">
            Quem somos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

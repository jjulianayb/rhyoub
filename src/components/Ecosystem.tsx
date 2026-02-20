import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Brain, Users } from "lucide-react";

const pillars = [
  {
    icon: Monitor,
    title: "Tecnologia",
    subtitle: "LMS SaaS",
    description:
      "O coração da operação digital com gamificação, trilhas personalizadas e dashboards em tempo real.",
  },
  {
    icon: Brain,
    title: "IA Mentora",
    subtitle: "Inteligência Artificial",
    description:
      "IA embarcada para curadoria de conteúdo, análise de performance e apoio contínuo ao desenvolvimento.",
  },
  {
    icon: Users,
    title: "Consultoria DHO",
    subtitle: "Estratégia Humana",
    description:
      "Estratégia de carreira, sucessão e liderança regenerativa com consultores especializados.",
  },
];

const Ecosystem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.06)_0%,transparent_60%)]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            A Solução
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            Escalando performance.{" "}
            <span className="glow-text">Transformando culturas.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-hover p-8 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
                {pillar.subtitle}
              </p>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;

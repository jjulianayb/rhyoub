import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2.4, suffix: "x", label: "Retorno sobre Investimento — ROI" },
  { value: 100, suffix: "%", label: "Retenção de lideranças treinadas" },
  { value: 11000, prefix: "+", suffix: "", label: "Profissionais impactados no Brasil" },
];

const mediaLogos = ["Valor Business", "Brasil Agora", "Ego Brasil"];

function AnimatedCounter({ target, suffix, prefix, isInView }: { target: number; suffix: string; prefix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const display = target >= 1000
    ? Math.floor(count).toLocaleString("pt-BR")
    : target % 1 !== 0
    ? count.toFixed(1)
    : Math.floor(count).toString();

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

const SocialProof = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Prova Social & ROI
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            DHO como <span className="glow-text">gerador de lucro.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <p className="text-5xl md:text-7xl font-extrabold glow-text mb-3">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  isInView={isInView}
                />
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-6 max-w-3xl mx-auto text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Reconhecidos por
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            {mediaLogos.map((logo) => (
              <span
                key={logo}
                className="text-lg md:text-xl font-semibold text-muted-foreground/50 tracking-wide"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;

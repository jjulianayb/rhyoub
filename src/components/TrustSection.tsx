import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = Array.from({ length: 8 }, (_, i) => `Logo Cliente ${i + 1}`);

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Confiam em nós
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Empresas de diferentes segmentos já confiam na youB para estruturar lideranças, cultura e ecossistemas de aprendizagem sob medida.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center justify-center h-20 rounded-xl border border-border bg-card text-muted-foreground text-sm font-medium"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

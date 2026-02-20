import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const OurResponse = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSolutions = () => {
    document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={ref} className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Transformação
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Nossa Resposta
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Enquanto travas invisíveis drenam recursos, a youB transforma cultura e liderança em desempenho mensurável. Combinamos tecnologia avançada e inteligência emocional para criar ecossistemas de aprendizagem com impacto real.
          </p>
          <button
            onClick={scrollToSolutions}
            className="group inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Descubra como
            <ArrowDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurResponse;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Líderes mais presentes, preparados e responsáveis pelas pessoas do time.",
  "Times mais conectados, com mais confiança, diálogo e colaboração.",
  "Cultura mais clara, coerente e praticada no dia a dia – não só na parede ou na apresentação.",
  "Redução de conflitos silenciosos e ruídos entre áreas e lideranças.",
  "Maior sensação de pertencimento, significado e cuidado entre as pessoas.",
  "Decisões de gente e gestão menos reativas e mais intencionais.",
];

const BeneficiosNegocio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="beneficios" ref={ref} className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Impacto</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            O que muda quando o desenvolvimento humano vira prioridade de verdade.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl leading-relaxed">
            A youB olha para pessoas, relações e cultura sem perder de vista o impacto no negócio.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-4 p-5 glass-card"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeneficiosNegocio;

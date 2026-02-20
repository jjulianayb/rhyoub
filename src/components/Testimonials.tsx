import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Jornada transformadora com aplicação prática no dia a dia. Nossos líderes passaram a ter linguagem e ferramentas comuns.",
    role: "Diretora de RH – Segmento Educação",
  },
  {
    text: "Hoje temos linguagem comum de liderança e cultura. O programa virou legado e referência interna para decisões.",
    role: "VP de Gente & Gestão – Segmento Saúde",
  },
  {
    text: "O programa virou legado e referência interna para decisões. Reduzimos turnover de liderança em mais de 40% no primeiro ano.",
    role: "CEO – Segmento Tecnologia",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          ref={i === 0 ? ref : undefined}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="glass-card p-6 flex flex-col"
        >
          <Quote className="w-8 h-8 text-primary/30 mb-4" />
          <p className="text-foreground text-sm leading-relaxed flex-1 italic mb-4">
            "{t.text}"
          </p>
          <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;

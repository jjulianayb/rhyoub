import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle } from "lucide-react";

const painBullets = [
  "Você investe em treinamentos, mas não vê mudança consistente no dia a dia?",
  "Seus líderes foram promovidos, mas não se sentem preparados para cuidar de pessoas?",
  "O clima está pesado, com conflitos velados e pouca confiança entre as áreas?",
  "As pessoas estão cansadas, desconectadas da cultura e questionando o sentido do trabalho?",
];

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="para-quem-e" ref={ref} className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Para quem é
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Para empresas que sabem que pessoas não são "recursos".
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
            A youB é para negócios que entenderam que resultado sustentável passa por cultura, relações saudáveis e liderança preparada.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Apoiamos empresas que estão em crescimento, em transição ou em reconstrução de cultura. Caminhamos junto com times de Gente & Gestão, diretores, fundadores e lideranças que querem sair do discurso e levar o cuidado com pessoas para a prática – todos os dias.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {painBullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{bullet}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;

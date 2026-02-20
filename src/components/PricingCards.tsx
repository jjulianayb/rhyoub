import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight, Crown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const plans = [
  {
    name: "Arquitetura de Carreira",
    price: "R$ 19.000",
    unit: "por trilha/setor",
    premium: false,
    features: [
      "Mapeamento de 8 cargos",
      "Matriz de Competências",
      "Definição de Senioridade",
      "Carreira em Y",
      "Integração LMS",
    ],
  },
  {
    name: "Sucessão Estratégica",
    price: "R$ 90.000",
    unit: "Projeto Corporativo",
    premium: true,
    features: [
      "Identificação de posições críticas",
      "Matriz 9-Box",
      "Mapeamento de sucessores",
      "Plano de Retenção",
      "Blindagem total do negócio",
    ],
  },
];

const PricingCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Soluções Estratégicas
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Investimento em <span className="glow-text">resultados.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative rounded-2xl p-8 md:p-10 flex flex-col ${
                plan.premium
                  ? "border-2 border-primary/40 bg-primary/[0.04] shadow-[0_0_60px_-15px_hsl(var(--primary)/0.2)]"
                  : "glass-card"
              }`}
            >
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Crown className="w-3.5 h-3.5" />
                  Recomendado
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-2">
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  plan.premium
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_40px_-8px_hsl(var(--primary)/0.5)]"
                    : "border border-border bg-secondary text-foreground hover:border-primary/40"
                }`}
              >
                Falar com Consultor
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Heart, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    icon: Users,
    title: "Programa de Desenvolvimento de Líderes",
    subtitle: "Formação viva, prática e contínua para lideranças que cuidam de pessoas e de resultados.",
    bullets: [
      "Aprofundamento em temas essenciais de liderança humana.",
      "Espaços seguros de troca, prática e reflexão.",
      "Acompanhamento para que o aprendizado vire comportamento.",
    ],
    cta: "Ver mais sobre o programa",
    href: "/programa-lideres",
  },
  {
    icon: Heart,
    title: "Jornadas de Cultura, Pertencimento e Times",
    subtitle: "Experiências que fortalecem confiança, conexão e responsabilidade coletiva.",
    bullets: [
      "Conversas profundas sobre o jeito de ser e fazer da empresa.",
      "Encontros que aproximam áreas, pessoas e lideranças.",
      "Construção de acordos e práticas que sustentam a cultura no dia a dia.",
    ],
    cta: "Ver mais sobre as jornadas",
    href: "/jornadas-cultura",
  },
  {
    icon: Headphones,
    title: "Acompanhamento, suporte e conteúdos youB",
    subtitle: "Apoio contínuo para quem cuida de gente: RH, lideranças e times.",
    bullets: [
      "Espaço de escuta e suporte para quem está à frente da mudança.",
      "Conteúdos autorais, provocações e ferramentas práticas.",
      "Parceria de longo prazo para sustentar desenvolvimento humano.",
    ],
    cta: "Ver como esse suporte funciona",
    href: "/contato",
  },
];

const ChooseYourPain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  return (
    <section id="ecossistema" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-3xl"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Ecossistema</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            O ecossistema youB de Desenvolvimento Humano & Organizacional.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Mais do que ações pontuais, criamos uma jornada contínua que integra desenvolvimento de líderes, cultura e times.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A youB atua como um ecossistema: você pode entrar por diferentes portas – programas de liderança, jornadas de cultura, experiências para times, conteúdos e suporte – e, a partir daí, construímos juntos o caminho que faz sentido para o momento da sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{card.subtitle}</p>
              <ul className="space-y-3 flex-1 mb-6">
                {card.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate(card.href)}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                {card.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPain;

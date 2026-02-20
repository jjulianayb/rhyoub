import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import ScenarioSimulator from "./ScenarioSimulator";
import MediaBlock from "./MediaBlock";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

const solutions = [
  {
    id: "consultoria",
    title: "Consultoria Estratégica & Projetos de DHO",
    pain: "Falta um DHO estruturado, políticas claras, papéis definidos e uma visão de longo prazo para pessoas.",
    explanation:
      "Apoiamos o board e o RH na construção de planos de carreira, EVP, código de cultura, políticas de RH e governança. Traduzimos a estratégia de pessoas em processos vivos, não em manuais engavetados.",
    cta: "Preciso estruturar o DHO da minha empresa",
    whatsapp: encodeURIComponent("Olá, preciso estruturar o DHO da minha empresa."),
    media: {
      title: "Sustentabilidade organizacional em foco",
      text: "A nossa visão sobre liderança, perenidade e resultados foi tema de um artigo na Valor Business. Essa é a base da nossa atuação em projetos de DHO e consultoria estratégica.",
      links: [
        {
          label: "Ler artigo na Valor Business",
          url: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
          isButton: true,
        },
      ],
    },
  },
  {
    id: "carreira",
    title: "Arquitetura de Carreira & Cargos",
    pain: "Promoções por tempo de casa, lideranças sem clareza de critérios e colaboradores perdidos sobre 'qual é o próximo passo'.",
    explanation:
      "Estruturamos trilhas de carreira com mapeamento de cargos, matriz de competências, níveis de senioridade e carreiras em Y. Isso reduz ruído, aumenta engajamento e dá previsibilidade às decisões.",
    cta: "Quero organizar carreira e cargos",
    whatsapp: encodeURIComponent("Olá, quero organizar carreira e cargos na minha empresa."),
  },
  {
    id: "sucessao",
    title: "Sucessão Estratégica & Continuidade do Negócio",
    pain: "Você sabe exatamente quem assume se amanhã um coordenador, gerente ou diretor sair? A maioria das empresas não sabe.",
    explanation:
      "Desenhamos planos de sucessão com identificação de posições críticas, Matriz 9-Box, mapeamento de sucessores e planos de retenção. É a diferença entre sofrer o impacto ou liderar a transição.",
    cta: "Quero um plano de sucessão",
    whatsapp: encodeURIComponent("Olá, quero um plano de sucessão para minha empresa."),
  },
  {
    id: "plataforma",
    title: "Plataforma Digital & IA Mentora",
    pain: "Sua empresa até contrata treinamentos, mas não consegue acompanhar quem aprendeu o quê, nem transformar isso em dados.",
    explanation:
      "Nosso ecossistema digital combina LMS intuitivo, gamificação, trilhas de aprendizado e uma IA mentora que apoia líderes e times com recomendações e conteúdos sob medida.",
    cta: "Quero conhecer o ecossistema digital youB",
    whatsapp: encodeURIComponent("Olá, quero conhecer o ecossistema digital youB."),
    media: {
      title: "IA, carreira e futuro do trabalho",
      text: "IA, plano de carreira e salário emocional já são pauta central nas decisões de gente e gestão. Nossa forma de integrar tecnologia e DHO foi destaque em diferentes portais.",
      links: [
        {
          label: "Matéria no Ego Brazil sobre IA e o futuro do trabalho",
          url: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
          isButton: false,
        },
        {
          label: "Reportagem na Frisson Online sobre IA, plano de carreira e salário emocional",
          url: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
          isButton: false,
        },
      ],
    },
  },
];

type Solution = (typeof solutions)[0];

const SolutionBlock = ({ solution, index }: { solution: Solution; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <section
      id={solution.id}
      ref={ref}
      className={`section-padding ${isEven ? "" : "bg-secondary/30"}`}
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Solução {index + 2}
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-8 text-foreground">
            {solution.title}
          </h2>

          <div className="glass-card p-8 md:p-10 space-y-6 mb-8">
            <div>
              <p className="text-foreground font-semibold mb-2 text-lg">A dor:</p>
              <p className="text-muted-foreground leading-relaxed italic">
                "{solution.pain}"
              </p>
            </div>
            <div>
              <p className="text-foreground font-semibold mb-2 text-lg">Nossa abordagem:</p>
              <p className="text-muted-foreground leading-relaxed">
                {solution.explanation}
              </p>
            </div>
            <a
              href={`${WHATSAPP_BASE}${solution.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              {solution.cta}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="space-y-8">
            <ScenarioSimulator solutionName={solution.title} />
            {solution.media && (
              <MediaBlock
                title={solution.media.title}
                text={solution.media.text}
                links={solution.media.links}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SolutionSections = () => {
  return (
    <>
      {solutions.map((s, i) => (
        <SolutionBlock key={s.id} solution={s} index={i} />
      ))}
    </>
  );
};

export default SolutionSections;

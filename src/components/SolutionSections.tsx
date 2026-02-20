import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ScenarioSimulator from "./ScenarioSimulator";

import solAcademias from "@/assets/sol-academias.jpg";
import solConsultoria from "@/assets/sol-consultoria.jpg";
import solCarreira from "@/assets/sol-carreira.jpg";
import solSucessao from "@/assets/sol-sucessao.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

const solutions = [
  {
    id: "academias",
    image: solAcademias,
    title: "Academias Corporativas & Programas de Liderança",
    subtitle: "Do treinamento pontual à aprendizagem contínua.",
    forWhom: [
      "RH/DHO que quer sair do operacional e criar impacto real.",
      "Diretores que percebem que treinamentos soltos não mudam a prática.",
      "Gestores que precisam de linguagem e ferramentas comuns de liderança.",
    ],
    pain: "Se a sua empresa já investiu em treinamentos e, mesmo assim, pouca coisa mudou na prática, o problema provavelmente não é a equipe — é o modelo. Treinamentos avulsos não criam cultura. Ecossistemas de aprendizagem sim.",
    steps: [
      { label: "Diagnóstico", text: "Mapeamos dores, cultura e maturidade de liderança." },
      { label: "Desenho da Jornada", text: "Trilhas customizadas conectadas à estratégia do negócio." },
      { label: "Implementação", text: "Encontros ao vivo, práticas no dia a dia, mentoria." },
      { label: "Dados & Ajustes", text: "Indicadores de impacto e ajustes contínuos." },
    ],
    cta: "Quero estruturar uma Academia",
    whatsapp: encodeURIComponent("Olá, quero estruturar uma Academia Corporativa."),
  },
  {
    id: "consultoria",
    image: solConsultoria,
    title: "Consultoria Estratégica & Projetos de DHO",
    subtitle: "Estrutura, processos e visão de longo prazo para pessoas.",
    forWhom: [
      "Empresas sem DHO estruturado ou com RH preso no operacional.",
      "Boards que precisam traduzir estratégia de pessoas em processos vivos.",
      "RH que quer construir EVP, código de cultura e políticas de gestão.",
    ],
    pain: "Falta um DHO estruturado, políticas claras, papéis definidos e uma visão de longo prazo para pessoas. O RH está apagando incêndio e a empresa perde potência mesmo com bons profissionais.",
    steps: [
      { label: "Assessment", text: "Entendemos maturidade, gaps e prioridades." },
      { label: "Arquitetura de DHO", text: "Desenhamos políticas, processos e governança." },
      { label: "Implementação", text: "Apoiamos a execução com proximidade e ajustes." },
      { label: "Sustentação", text: "Indicadores e rituais para manter o sistema vivo." },
    ],
    cta: "Preciso estruturar o DHO",
    whatsapp: encodeURIComponent("Olá, preciso estruturar o DHO da minha empresa."),
  },
  {
    id: "carreira",
    image: solCarreira,
    title: "Arquitetura de Carreira & Cargos",
    subtitle: "Clareza de trajetória, critérios e perspectiva.",
    forWhom: [
      "Empresas com promoções por tempo de casa ou sem critérios claros.",
      "RH que precisa de trilhas de carreira, cargos e matriz de competências.",
      "Gestores que ouvem 'não sei qual é o próximo passo' dos colaboradores.",
    ],
    pain: "Promoções confusas, lideranças sem clareza de critérios e colaboradores perdidos sobre 'qual é o próximo passo'. Isso gera desengajamento, turnover e decisões ruins.",
    steps: [
      { label: "Mapeamento", text: "Levantamos cargos, níveis e competências atuais." },
      { label: "Desenho", text: "Criamos trilhas em Y, matriz de competências e senioridades." },
      { label: "Validação", text: "Alinhamos com lideranças e calibramos critérios." },
      { label: "Comunicação", text: "Implantamos com clareza para toda a organização." },
    ],
    cta: "Quero organizar carreira e cargos",
    whatsapp: encodeURIComponent("Olá, quero organizar carreira e cargos na minha empresa."),
  },
  {
    id: "sucessao",
    image: solSucessao,
    title: "Sucessão Estratégica & Continuidade do Negócio",
    subtitle: "Liderar a transição, não sofrer o impacto.",
    forWhom: [
      "Empresas que não sabem quem assume se um líder-chave sair amanhã.",
      "Boards preocupados com continuidade de cargos críticos.",
      "RH que precisa de Matriz 9-Box, mapa de sucessores e planos de retenção.",
    ],
    pain: "Você sabe exatamente quem assume se amanhã um coordenador, gerente ou diretor sair? A maioria das empresas não sabe. A perda de um executivo-chave pode custar até 213% do salário anual.",
    steps: [
      { label: "Mapa de risco", text: "Identificamos posições críticas e vulnerabilidades." },
      { label: "9-Box & Sucessores", text: "Avaliamos potencial e prontidão de cada líder." },
      { label: "Plano de ação", text: "Desenhamos desenvolvimento e retenção por pessoa." },
      { label: "Monitoramento", text: "Acompanhamos evolução e ajustamos o plano." },
    ],
    cta: "Quero um plano de sucessão",
    whatsapp: encodeURIComponent("Olá, quero um plano de sucessão para minha empresa."),
  },
  {
    id: "plataforma",
    image: solPlataforma,
    title: "Plataforma Digital & IA Mentora",
    subtitle: "Tecnologia a serviço do desenvolvimento humano.",
    forWhom: [
      "Empresas que precisam centralizar conteúdos, dados e trilhas.",
      "RH que quer acompanhar quem aprendeu o quê com dados reais.",
      "Líderes que querem recomendações e conteúdos sob medida via IA.",
    ],
    pain: "Sua empresa até contrata treinamentos, mas não consegue acompanhar quem aprendeu o quê, nem transformar isso em dados. Sem plataforma, tudo é planilha, e-mail e boa vontade.",
    steps: [
      { label: "Configuração", text: "Montamos o ecossistema digital sob medida." },
      { label: "Trilhas & Gamificação", text: "Criamos jornadas engajadoras com recompensas." },
      { label: "IA Mentora", text: "Recomendações personalizadas para cada líder." },
      { label: "Analytics", text: "Dashboards de engajamento, progresso e impacto." },
    ],
    cta: "Quero conhecer o ecossistema digital",
    whatsapp: encodeURIComponent("Olá, quero conhecer o ecossistema digital youB."),
  },
];

type Solution = (typeof solutions)[0];

const SolutionBlock = ({ solution, index }: { solution: Solution; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <section
      id={solution.id}
      ref={ref}
      className={`section-padding ${isEven ? "" : "bg-secondary/30"}`}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Header with image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Solução {index + 1}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-foreground">
                {solution.title}
              </h2>
              <p className="text-lg text-muted-foreground">{solution.subtitle}</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 lg:h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* 4 blocks */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Para quem */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">Para quem é</h3>
              <ul className="space-y-3">
                {solution.forWhom.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qual dor resolve */}
            <div className="glass-card p-6">
              <h3 className="font-bold text-foreground mb-4 text-lg">Qual dor resolve</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution.pain}</p>
            </div>
          </div>

          {/* Como funciona */}
          <div className="glass-card p-6 mb-8">
            <h3 className="font-bold text-foreground mb-6 text-lg">Como funciona na prática</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.steps.map((step, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="font-semibold text-foreground text-sm">{step.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-11">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simulator */}
          <ScenarioSimulator solutionName={solution.title} />

          {/* CTA */}
          <div className="mt-6">
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

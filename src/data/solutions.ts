import solAcademias from "@/assets/sol-academias.jpg";
import solConsultoria from "@/assets/sol-consultoria.jpg";
import solCarreira from "@/assets/sol-carreira.jpg";
import solSucessao from "@/assets/sol-sucessao.jpg";
import solPlataforma from "@/assets/sol-plataforma.jpg";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

export interface SolutionStep {
  label: string;
  text: string;
}

export interface Solution {
  id: string;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  forWhom: string[];
  pain: string;
  steps: SolutionStep[];
  cta: string;
  whatsapp: string;
}

export const solutions: Solution[] = [
  {
    id: "academias",
    slug: "academias",
    image: solAcademias,
    title: "Academias Corporativas & Programas de Liderança",
    subtitle: "Do treinamento pontual à aprendizagem contínua.",
    tags: ["Liderança", "Desenvolvimento"],
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
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, quero estruturar uma Academia Corporativa.")}`,
  },
  {
    id: "consultoria",
    slug: "consultoria",
    image: solConsultoria,
    title: "Consultoria Estratégica & Projetos de DHO",
    subtitle: "Estrutura, processos e visão de longo prazo para pessoas.",
    tags: ["Estratégia", "DHO"],
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
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, preciso estruturar o DHO da minha empresa.")}`,
  },
  {
    id: "carreira",
    slug: "carreira",
    image: solCarreira,
    title: "Arquitetura de Carreira & Cargos",
    subtitle: "Clareza de trajetória, critérios e perspectiva.",
    tags: ["Carreira", "Cargos"],
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
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, quero organizar carreira e cargos na minha empresa.")}`,
  },
  {
    id: "sucessao",
    slug: "sucessao",
    image: solSucessao,
    title: "Sucessão Estratégica & Continuidade do Negócio",
    subtitle: "Liderar a transição, não sofrer o impacto.",
    tags: ["Sucessão", "Continuidade"],
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
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, quero um plano de sucessão para minha empresa.")}`,
  },
  {
    id: "plataforma",
    slug: "plataforma",
    image: solPlataforma,
    title: "Plataforma Digital & IA Mentora",
    subtitle: "Tecnologia a serviço do desenvolvimento humano.",
    tags: ["Tecnologia", "IA"],
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
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, quero conhecer o ecossistema digital youB.")}`,
  },
];

export const getSolutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);

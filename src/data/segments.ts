import segHealth from "@/assets/seg-health.jpg";
import segGov from "@/assets/seg-gov.jpg";
import segEducation from "@/assets/seg-education.jpg";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

export interface SolutionGroup {
  title: string;
  items: string[];
}

export interface DeliveryModel {
  title: string;
  desc: string;
}

export interface ArchStep {
  label: string;
  text: string;
}

export interface Segment {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  image: string;
  tagline: string;
  vision: string;
  challengesTitle: string;
  challenges: string[];
  solutionIntro: string;
  solutions: SolutionGroup[];
  techGovernance: string[];
  deliveryModels: DeliveryModel[];
  indicators: string[];
  audiences: string[];
  lgpd: string;
  architecture: ArchStep[];
  positioning: string;
  whatsapp: string;
}

const sharedTech = [
  "Inteligência artificial aplicada",
  "Dashboards gerenciais",
  "Rastreabilidade",
  "Autenticação e controle de acesso",
  "Gestão de usuários",
  "Segregação de dados",
  "Adequação à LGPD",
  "Relatórios executivos",
  "Integração com sistemas existentes",
];

const sharedDelivery: DeliveryModel[] = [
  { title: "Diagnóstico Institucional", desc: "Projeto de entrada com análise organizacional e relatório executivo." },
  { title: "Programas de Capacitação", desc: "Jornadas híbridas com facilitação, conteúdos e IA." },
  { title: "Plataforma White Label", desc: "Ambiente recorrente para aprendizagem, indicadores e gestão institucional." },
  { title: "Projetos Estratégicos", desc: "Soluções customizadas para grandes organizações e redes." },
];

const sharedIndicators = [
  "Adesão",
  "Engajamento",
  "Evolução de aprendizagem",
  "Participação",
  "Maturidade de liderança",
  "Percepção organizacional",
  "Clima",
  "Efetividade de comunicação",
  "Indicadores de desenvolvimento",
];

const sharedArchitecture: ArchStep[] = [
  { label: "Etapa 1 — Diagnóstico", text: "Leitura organizacional e definição de prioridades." },
  { label: "Etapa 2 — Desenho da Jornada", text: "Construção da trilha, conteúdos e indicadores." },
  { label: "Etapa 3 — Implementação", text: "Ativação da plataforma, IA e jornadas." },
  { label: "Etapa 4 — Monitoramento", text: "Dashboards, relatórios e acompanhamento." },
  { label: "Etapa 5 — Evolução Contínua", text: "Otimização e expansão institucional." },
];

const sharedLgpd =
  "A solução é estruturada com foco em proteção de dados, segurança da informação, rastreabilidade, governança e uso responsável de inteligência artificial. A IA atua como apoio à aprendizagem, análise e comunicação institucional, mantendo supervisão humana e critérios éticos em toda a jornada.";

const baseSolutions: SolutionGroup[] = [
  {
    title: "Diagnóstico Inteligente Organizacional",
    items: [
      "Mapeamento de maturidade",
      "Leitura organizacional assistida por IA",
      "Relatórios executivos",
      "Indicadores de cultura e liderança",
    ],
  },
  {
    title: "Trilha de Liderança",
    items: [
      "Formação de gestores",
      "Liderança humanizada",
      "Comunicação estratégica",
      "Gestão de equipes",
      "Cultura de alta performance",
    ],
  },
  {
    title: "IA Mentora youB",
    items: [
      "Assistente inteligente",
      "Apoio contínuo aos participantes",
      "Reforço de aprendizagem",
      "FAQ institucional",
      "Apoio à liderança",
    ],
  },
  {
    title: "Plataforma de Educação",
    items: [
      "Ambiente multiunidade",
      "Trilhas personalizadas",
      "Relatórios executivos",
      "Educação corporativa contínua",
      "Integração entre pessoas, cultura e tecnologia",
    ],
  },
];

export const segments: Segment[] = [
  {
    id: "health",
    slug: "youb-health",
    name: "youB Health",
    shortName: "Health",
    image: segHealth,
    tagline: "Ecossistema de desenvolvimento humano e inteligência organizacional para instituições de saúde.",
    vision:
      "A youB Health foi criada para apoiar instituições de saúde na capacitação contínua de equipes, fortalecimento de liderança, redução de turnover, melhoria da comunicação institucional e desenvolvimento organizacional em escala. Nossa estrutura combina metodologia humana, inteligência artificial, jornadas digitais, indicadores, dashboards, rastreabilidade e governança institucional.",
    challengesTitle: "Hospitais e Saúde",
    challenges: [
      "Alta rotatividade",
      "Sobrecarga de lideranças",
      "Falhas de comunicação interna",
      "Dificuldade de engajamento",
      "Treinamentos pouco aderentes",
      "Falta de indicadores de aprendizagem",
      "Despadronização operacional",
      "Baixa integração entre equipes",
      "Dificuldade de escalar cultura",
      "Necessidade de compliance e LGPD",
    ],
    solutionIntro:
      "O ecossistema youB Health integra desenvolvimento humano, IA aplicada e inteligência organizacional para transformar capacitação em resultado institucional mensurável.",
    solutions: baseSolutions,
    techGovernance: sharedTech,
    deliveryModels: [
      ...sharedDelivery.slice(0, 3),
      { title: "Projetos Estratégicos", desc: "Soluções customizadas para hospitais, redes públicas e grandes organizações." },
    ],
    indicators: sharedIndicators,
    audiences: [
      "Hospitais",
      "Redes hospitalares",
      "Clínicas",
      "OSS",
      "Secretarias de Saúde",
      "Operadoras",
      "Instituições públicas",
      "Grandes organizações",
    ],
    lgpd: sharedLgpd,
    architecture: sharedArchitecture,
    positioning:
      "A youB atua na transformação organizacional por meio da integração entre desenvolvimento humano, inteligência artificial, educação corporativa, comunicação institucional e inteligência de dados. Nosso objetivo é tornar aprendizagem, cultura e liderança processos contínuos, escaláveis e mensuráveis.",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, gostaria de conhecer a vertical youB Health.")}`,
  },
  {
    id: "gov",
    slug: "youb-gov",
    name: "youB Gov",
    shortName: "Gov",
    image: segGov,
    tagline: "Desenvolvimento humano, governança e IA aplicada para o setor público em grande escala.",
    vision:
      "A youB Gov foi criada para apoiar instituições públicas na capacitação contínua de servidores, modernização da gestão, fortalecimento de liderança e desenvolvimento organizacional com governança e transparência. Combinamos metodologia humana, inteligência artificial, jornadas digitais, indicadores, dashboards, rastreabilidade e compliance institucional.",
    challengesTitle: "Setor Público e Governo",
    challenges: [
      "Descontinuidade de gestão",
      "Baixa padronização de processos",
      "Capacitação fragmentada de servidores",
      "Falhas de comunicação institucional",
      "Dificuldade de mensurar resultados",
      "Necessidade de transparência e governança",
      "Compliance e LGPD",
      "Dificuldade de escalar cultura de serviço",
      "Lideranças sobrecarregadas",
      "Integração entre órgãos e equipes",
    ],
    solutionIntro:
      "O ecossistema youB Gov integra desenvolvimento humano, IA aplicada e inteligência organizacional para transformar capacitação pública em resultado institucional mensurável e auditável.",
    solutions: baseSolutions,
    techGovernance: sharedTech,
    deliveryModels: [
      ...sharedDelivery.slice(0, 3),
      { title: "Projetos Estratégicos", desc: "Soluções customizadas para órgãos públicos, secretarias e redes governamentais." },
    ],
    indicators: sharedIndicators,
    audiences: [
      "Secretarias",
      "Órgãos públicos",
      "Autarquias",
      "Prefeituras",
      "Governos estaduais",
      "Tribunais",
      "Instituições reguladoras",
      "Grandes organizações públicas",
    ],
    lgpd: sharedLgpd,
    architecture: sharedArchitecture,
    positioning:
      "A youB atua na transformação organizacional por meio da integração entre desenvolvimento humano, inteligência artificial, educação corporativa, comunicação institucional e inteligência de dados. Nosso objetivo é tornar aprendizagem, cultura e liderança processos contínuos, escaláveis e mensuráveis.",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, gostaria de conhecer a vertical youB Gov.")}`,
  },
  {
    id: "education",
    slug: "youb-educacao",
    name: "youB Educação",
    shortName: "Educação",
    image: segEducation,
    tagline: "Educação corporativa, aprendizagem contínua e IA mentora para organizações de grande escala.",
    vision:
      "A youB Educação foi criada para estruturar a educação corporativa contínua em organizações de grande porte, integrando trilhas de aprendizagem, formação de líderes, cultura e indicadores. Combinamos metodologia humana, inteligência artificial, jornadas digitais, dashboards, rastreabilidade e governança institucional.",
    challengesTitle: "Educação Corporativa em Escala",
    challenges: [
      "Treinamentos pontuais sem continuidade",
      "Baixa adesão e engajamento",
      "Falta de indicadores de aprendizagem",
      "Conteúdos pouco aderentes à realidade",
      "Dificuldade de escalar cultura",
      "Lideranças sem ferramentas de desenvolvimento",
      "Despadronização entre unidades",
      "Falta de personalização das trilhas",
      "Dificuldade de mensurar impacto",
      "Necessidade de compliance e LGPD",
    ],
    solutionIntro:
      "O ecossistema youB Educação integra desenvolvimento humano, IA aplicada e inteligência organizacional para transformar aprendizagem em resultado institucional mensurável.",
    solutions: baseSolutions,
    techGovernance: sharedTech,
    deliveryModels: sharedDelivery,
    indicators: sharedIndicators,
    audiences: [
      "Grandes empresas",
      "Redes e franquias",
      "Universidades corporativas",
      "Indústrias",
      "Varejo de grande porte",
      "Instituições de ensino",
      "Cooperativas",
      "Grandes organizações",
    ],
    lgpd: sharedLgpd,
    architecture: sharedArchitecture,
    positioning:
      "A youB atua na transformação organizacional por meio da integração entre desenvolvimento humano, inteligência artificial, educação corporativa, comunicação institucional e inteligência de dados. Nosso objetivo é tornar aprendizagem, cultura e liderança processos contínuos, escaláveis e mensuráveis.",
    whatsapp: `${WHATSAPP_BASE}${encodeURIComponent("Olá, gostaria de conhecer a vertical youB Educação.")}`,
  },
];

export const getSegmentBySlug = (slug: string) => segments.find((s) => s.slug === slug);

export const ABOUT_YOUB =
  "A youB é um ecossistema de desenvolvimento humano, educação corporativa e inteligência organizacional que integra metodologia, tecnologia e IA para acelerar cultura, liderança, aprendizagem e performance institucional. Atuamos na construção de soluções escaláveis para organizações públicas e privadas.";

export const ABOUT_PILLARS = [
  "DHO",
  "Educação corporativa",
  "Liderança",
  "Cultura organizacional",
  "Educomunicação",
  "Inteligência artificial",
  "Indicadores e dashboards",
  "Governança e LGPD",
];

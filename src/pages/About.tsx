import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, ExternalLink, Target, FlaskConical, Sprout, Search, PenTool, Users, BarChart3 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const timeline = [
  { year: "2016", text: "Fundação da youB com foco em desenvolvimento de lideranças" },
  { year: "2018", text: "Expansão para projetos de DHO e arquitetura de carreira" },
  { year: "2020", text: "Lançamento do ecossistema digital com LMS e gamificação" },
  { year: "2024", text: "Integração de IA Mentora e modelo de franquias" },
];

const values = [
  {
    emoji: "🎯",
    icon: Target,
    title: "Nosso propósito",
    text: "Transformar o desenvolvimento humano em vantagem competitiva real para empresas que acreditam que pessoas são o seu maior ativo.",
  },
  {
    emoji: "🔬",
    icon: FlaskConical,
    title: "Nossa crença",
    text: "Tecnologia sem humanização é fria. Humanização sem dados é achismo. A youB integra os dois para gerar impacto que aparece nos indicadores do negócio.",
  },
  {
    emoji: "🌱",
    icon: Sprout,
    title: "Nossa promessa",
    text: "Não entregamos pacotes prontos. Construímos ecossistemas sob medida, respeitando a cultura, o momento e a singularidade de cada empresa.",
  },
];

const stats = [
  { value: "11.000+", label: "Profissionais impactados" },
  { value: "2016", label: "Ano de fundação" },
  { value: "5", label: "Soluções integradas no ecossistema" },
  { value: "+50", label: "Empresas atendidas em diferentes segmentos" },
];

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    text: "Entendemos a fundo a cultura, as dores, os indicadores e os objetivos estratégicos da empresa antes de propor qualquer solução.",
  },
  {
    icon: PenTool,
    title: "Desenho da Jornada",
    text: "Co-criamos com o cliente um ecossistema sob medida: trilhas, formatos, frequência, tecnologia e métricas de sucesso.",
  },
  {
    icon: Users,
    title: "Implementação com acompanhamento",
    text: "Executamos com proximidade, ajustando em tempo real conforme o engajamento e os dados de aprendizagem indicam.",
  },
  {
    icon: BarChart3,
    title: "Dados & Evolução contínua",
    text: "Entregamos dashboards e relatórios que traduzem desenvolvimento em ROI, permitindo decisões mais inteligentes sobre pessoas.",
  },
];

const articles = [
  {
    source: "Valor Business",
    title: "Sustentabilidade organizacional além do discurso",
    link: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
  },
  {
    source: "Ego Brazil",
    title: "Até 2026, IA substituirá 85 milhões de empregos",
    link: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
  },
  {
    source: "Frisson Online",
    title: "IA, carreira e salário emocional no mercado",
    link: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
  },
  {
    source: "Brasil Agora",
    title: "Nova era da liderança com academias autorais",
    link: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const About = () => {
  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden bg-[hsl(var(--primary))]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(262_83%_68%/0.4)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/50 mb-8">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground font-medium">Sobre</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
              Quem somos
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 max-w-xl">
              Uma história construída na prática, com propósito e resultado.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ BLOCO 1 – A ORIGEM ============ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
              Origem
            </p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">
              Como tudo começou
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-3xl mb-16">
              <p>
                A youB nasceu em 2016 de uma inquietação real: por que tantas empresas investem em treinamentos e veem tão pouco mudar na prática?
              </p>
              <p>
                A resposta que encontramos foi clara: porque desenvolvimento humano não é evento, é processo. Não é curso, é ecossistema. Não é conteúdo genérico, é jornada conectada à estratégia e à cultura de cada negócio.
              </p>
              <p>
                Foi com essa convicção que estruturamos um modelo diferente, que integra tecnologia, dados, humanização e metodologia exclusiva para transformar lideranças e culturas em resultado mensurável.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border" />
            <div className="hidden md:block absolute top-6 left-0 h-0.5 bg-primary" style={{ width: "100%" }} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold text-sm mb-5 relative z-10 shadow-lg shadow-primary/20">
                    {item.year}
                  </div>
                  <div className="md:hidden flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-primary/20">
                      {item.year}
                    </div>
                    <div className="h-0.5 flex-1 bg-border" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed md:pr-4">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ BLOCO 2 – PROPÓSITO E VALORES ============ */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Propósito</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">O que nos move</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <span className="text-4xl mb-5 block">{v.emoji}</span>
                <h3 className="font-bold text-foreground mb-3 text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOCO 3 – NÚMEROS ============ */}
      <section className="py-20 md:py-28 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(262_83%_68%/0.35)_0%,transparent_60%)]" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary-foreground">
              Impacto em números
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOCO 4 – METODOLOGIA ============ */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodologia</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Como a youB trabalha
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Um processo em 4 etapas que garante resultado real, não apenas conteúdo entregue.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-7 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOCO 5 – NA MÍDIA ============ */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-10">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Autoridade</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              O que estão falando sobre a youB
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((article, i) => (
              <motion.a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group glass-card p-6 flex flex-col hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-3">
                  {article.source}
                </p>
                <h4 className="text-sm font-bold text-foreground leading-snug flex-1 mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Ler matéria <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BLOCO 6 – CTA FINAL ============ */}
      <section className="py-20 md:py-28 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_68%/0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto text-center relative z-10 max-w-2xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Pronto para transformar sua empresa?
            </h2>
            <p className="text-primary-foreground/80 mb-10 max-w-lg mx-auto">
              Agende uma conversa estratégica com nossos consultores e descubra qual solução faz mais sentido para o seu momento.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Agendar conversa
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/academias"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/60 text-primary-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-primary-foreground/10 hover:border-primary-foreground"
              >
                Conhecer as soluções
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;

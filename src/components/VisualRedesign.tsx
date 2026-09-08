import { FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import beeAvatar from "@/assets/bee-avatar.png";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "5521991417327";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar uma demonstração.")}`;

const clients = ["ArcelorMittal", "Gerdau", "Orient Life", "Grupo Sartori", "FCV"];

const capabilityGroups = [
  {
    title: "Leitura de pessoas",
    items: [
      { icon: Users, title: "Diagnóstico organizacional", text: "Leituras organizadas para apoiar decisões de pessoas e estrutura." },
      { icon: Users, title: "Perfil, 360 e DISC", text: "Visões de perfil e avaliações para ampliar o contexto de desenvolvimento." },
    ],
  },
  {
    title: "Desenvolvimento",
    items: [
      { icon: Layers3, title: "PDI e desenvolvimento", text: "Planos e próximos passos para acompanhar cada jornada." },
      { icon: BarChart3, title: "Liderança e performance", text: "Acompanhamento de lideranças e conversas orientadas à evolução." },
      { icon: Workflow, title: "Aprendizagem e trilhas", text: "Experiências de aprendizagem conectadas ao desenvolvimento." },
    ],
  },
  {
    title: "Decisões estratégicas",
    items: [
      { icon: Layers3, title: "Sucessão e 9-Box", text: "Visões para apoiar conversas de sucessão e desenvolvimento." },
      { icon: BarChart3, title: "Impacto e ROI", text: "Indicadores para acompanhar impacto e evolução." },
    ],
  },
  {
    title: "Inteligência e operação",
    items: [
      { icon: Brain, title: "IA Mentora Bee", text: "Inteligência para organizar contexto e orientar a próxima ação." },
      { icon: ShieldCheck, title: "Integrações e governança", text: "Acesso, contexto e supervisão para uma operação responsável." },
    ],
  },
];

const capabilities = capabilityGroups.flatMap((group) => group.items);

const media = [
  {
    source: "Valor Econômico",
    href: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
  },
  {
    source: "iG / Ego Brasil",
    href: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
  },
  {
    source: "Frisson Online",
    href: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
  },
  {
    source: "Brasil Agora",
    href: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  interest: string;
};

type ProductView = "desktop" | "mobile";

const BeeAvatar = ({ className = "" }: { className?: string }) => (
  <img className={`bee-avatar-image ${className}`} src={beeAvatar} alt="Bee, IA Mentora" />
);

const MetricCount = ({ target, prefix = "", suffix = "", label }: { target: number; prefix?: string; suffix?: string; label: string }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      const startedAt = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.35 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref} className={`metric${value === target ? " is-complete" : ""}`}><strong>{prefix}{value}{suffix}</strong><span>{label}</span><i className="metric-trend" aria-hidden="true" /></div>;
};

const ProductScreen = ({ compact = false }: { compact?: boolean }) => (
  <div className={`product-browser${compact ? " product-browser-compact" : ""}`} aria-label="Prévia visual da plataforma youB">
    <div className="browser-bar">
      <div className="browser-dots"><span /><span /><span /></div>
      <span className="browser-address">app.youb.com.br / visão de desenvolvimento</span>
      <span className="browser-status"><CheckCircle2 size={13} /> seguro</span>
    </div>
    <div className="product-shell">
      <aside className="product-sidebar">
        <span className="product-mark">you<span>B</span></span>
        <div className="sidebar-item active"><BarChart3 size={16} /></div>
        <div className="sidebar-item"><Users size={16} /></div>
        <div className="sidebar-item"><Workflow size={16} /></div>
        <div className="sidebar-item"><Brain size={16} /></div>
        <div className="sidebar-spacer" />
        <div className="sidebar-item"><ShieldCheck size={16} /></div>
      </aside>
      <div className="product-content">
        <div className="product-topline">
          <div>
            <span className="product-eyebrow">VISÃO DE DESENVOLVIMENTO</span>
            <h3>Olá, Juliana.</h3>
            <p>Contexto para decidir e agir sobre pessoas.</p>
          </div>
          <span className="product-account">Empresa <ChevronRight size={14} /></span>
        </div>
        <div className="product-insight-row">
          <div className="insight-card insight-purple"><span>Ciclos ativos</span><strong>Em acompanhamento</strong><small>próximos passos organizados</small></div>
          <div className="insight-card"><span>Conversas</span><strong>Com contexto</strong><small>feedbacks e check-ins conectados</small></div>
          <div className="insight-card"><span>Pessoas</span><strong>Visão por perfil</strong><small>acesso no contexto certo</small></div>
        </div>
        <div className="product-chart-grid">
          <div className="chart-card">
            <div className="chart-heading"><span>Evolução do desenvolvimento</span><span className="chart-period">Ciclos <ChevronRight size={12} /></span></div>
            <div className="chart-area"><div className="chart-grid-lines" /><svg viewBox="0 0 420 150" role="img" aria-label="Gráfico ilustrativo de evolução"><path d="M0 127 C38 122 44 104 78 110 S125 91 154 97 S198 65 226 79 S270 46 298 57 S350 26 420 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M0 127 C38 122 44 104 78 110 S125 91 154 97 S198 65 226 79 S270 46 298 57 S350 26 420 10 V150 H0Z" fill={`url(#${compact ? "chartFillDemo" : "chartFillHero"})`} opacity=".18" /><defs><linearGradient id={compact ? "chartFillDemo" : "chartFillHero"} x1="0" x2="0" y1="0" y2="1"><stop stopColor="#7357f3" /><stop offset="1" stopColor="#7357f3" stopOpacity="0" /></linearGradient></defs></svg></div>
            <div className="chart-axis"><span>Contexto</span><span>Ações</span><span>Evolução</span></div>
          </div>
          <div className="donut-card"><span className="chart-heading">Distribuição de perfis</span><div className="donut" /><div className="donut-legend"><span><i className="legend-dot purple" /> Lideranças</span><span><i className="legend-dot blue" /> Times</span><span><i className="legend-dot lilac" /> Em desenvolvimento</span></div></div>
        </div>
        <div className="product-bottom-row"><span><CheckCircle2 size={14} /> leitura organizada</span><span><CheckCircle2 size={14} /> supervisão humana</span><span><CheckCircle2 size={14} /> ação recomendada</span></div>
      </div>
    </div>
    <div className="bee-card"><div className="bee-avatar"><BeeAvatar /></div><div><strong>Bee <small>IA Mentora</small></strong><p>Encontrei um próximo passo para esta jornada.</p><span>Ver recomendação <ArrowRight size={12} /></span></div></div>
  </div>
);

const MobileProductScreen = () => (
  <div className="platform-phone" aria-label="Prévia mobile da plataforma youB">
    <div className="phone-speaker" />
    <div className="phone-screen">
      <div className="phone-topbar"><span className="phone-logo">you<span>B</span></span><span className="phone-menu">•••</span></div>
      <span className="product-eyebrow">VISÃO DE DESENVOLVIMENTO</span>
      <h3>Contexto para agir sobre pessoas.</h3>
      <div className="phone-summary"><span>Leitura organizada</span><strong>Próximo passo identificado</strong><small>supervisão humana</small></div>
      <div className="phone-list"><span><Users size={15} /> Pessoas e estrutura <ChevronRight size={13} /></span><span><BarChart3 size={15} /> Ciclos e avaliações <ChevronRight size={13} /></span><span><Layers3 size={15} /> PDI e desenvolvimento <ChevronRight size={13} /></span></div>
      <div className="phone-bee-card"><div className="bee-avatar"><BeeAvatar /></div><div><span className="mini-label">BEE · IA MENTORA</span><strong>Uma recomendação para a próxima conversa.</strong></div></div>
    </div>
  </div>
);

const PlatformDemo = () => {
  const [view, setView] = useState<ProductView>(() => window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop");

  return (
    <section className="platform-demo-section" id="demonstracao-plataforma" aria-labelledby="demo-title">
      <div className="container">
        <div className="platform-demo-heading">
          <div><span className="section-kicker">PLATAFORMA EM PRIMEIRO PLANO</span><h2 id="demo-title">Veja a <em>youB</em> em ação.</h2></div>
          <p>Uma visão integrada para transformar dados de pessoas em contexto, desenvolvimento e próxima ação.</p>
        </div>
        <div className="platform-view-switch" role="tablist" aria-label="Visualização da plataforma">
          {(["desktop", "mobile"] as ProductView[]).map((option) => <button key={option} type="button" role="tab" aria-selected={view === option} aria-controls="platform-demo-panel" tabIndex={view === option ? 0 : -1} className={view === option ? "is-selected" : ""} onClick={() => setView(option)}>{option === "desktop" ? "Desktop" : "Mobile"}</button>)}
        </div>
        <div className={`platform-demo-stage is-${view}`} id="platform-demo-panel" role="tabpanel" aria-live="polite">
          <div className="platform-demo-glow" />
          {view === "desktop" ? <ProductScreen compact /> : <MobileProductScreen />}
        </div>
      </div>
    </section>
  );
};

const journeyStages = [
  { label: "Dados", kicker: "SINAIS DISPERSOS", message: "Eu organizo os sinais disponíveis.", detail: "Dados de pessoas, conversas e avaliações entram em uma mesma leitura." },
  { label: "Contexto", kicker: "LEITURA ORGANIZADA", message: "Aqui, os dados começam a fazer sentido.", detail: "A plataforma conecta cada informação à jornada e ao perfil certo." },
  { label: "Insight", kicker: "PONTO DE ATENÇÃO", message: "Identifico o que merece atenção.", detail: "A leitura evidencia os sinais que ajudam a orientar a conversa." },
  { label: "Recomendação", kicker: "PRÓXIMO PASSO", message: "A leitura se transforma em próximo passo.", detail: "A Bee organiza uma direção para apoiar a decisão humana." },
  { label: "Ação", kicker: "CONTINUIDADE", message: "A decisão ganha direção e continuidade.", detail: "O desenvolvimento avança com acompanhamento e contexto." },
];

const journeyLayers = [
  { title: "Dados de pessoas", text: "Estrutura e perfis para começar a leitura.", icon: Users },
  { title: "Conversas e feedbacks", text: "Sinais humanos conectados ao desenvolvimento.", icon: MessageCircle },
  { title: "Contexto com IA", text: "A Bee organiza o que merece atenção.", icon: Brain },
  { title: "Próxima ação", text: "Uma direção para apoiar a conversa.", icon: ArrowRight },
];

const journeyAnalytics = [
  [
    { label: "Comunicação", value: 78, change: "+12%", tone: "mint" },
    { label: "Liderança", value: 64, change: "+5%", tone: "lilac" },
    { label: "Feedback", value: 49, change: "atenção", tone: "amber" },
    { label: "Colaboração", value: 71, change: "+9%", tone: "mint" },
    { label: "Desenvolvimento", value: 83, change: "estável", tone: "stable" },
  ],
  [
    { label: "Comunicação", value: 81, change: "+15%", tone: "mint" },
    { label: "Liderança", value: 68, change: "+8%", tone: "mint" },
    { label: "Feedback", value: 54, change: "+6%", tone: "lilac" },
    { label: "Colaboração", value: 74, change: "+11%", tone: "mint" },
    { label: "Desenvolvimento", value: 83, change: "estável", tone: "stable" },
  ],
  [
    { label: "Comunicação", value: 84, change: "+18%", tone: "mint" },
    { label: "Liderança", value: 72, change: "+12%", tone: "mint" },
    { label: "Feedback", value: 49, change: "atenção", tone: "amber" },
    { label: "Colaboração", value: 76, change: "+13%", tone: "mint" },
    { label: "Desenvolvimento", value: 86, change: "+7%", tone: "lilac" },
  ],
  [
    { label: "Comunicação", value: 86, change: "+20%", tone: "mint" },
    { label: "Liderança", value: 76, change: "+14%", tone: "mint" },
    { label: "Feedback", value: 55, change: "+6%", tone: "lilac" },
    { label: "Colaboração", value: 79, change: "+16%", tone: "mint" },
    { label: "Desenvolvimento", value: 88, change: "+9%", tone: "lilac" },
  ],
  [
    { label: "Comunicação", value: 88, change: "+22%", tone: "mint" },
    { label: "Liderança", value: 79, change: "+17%", tone: "mint" },
    { label: "Feedback", value: 61, change: "+12%", tone: "mint" },
    { label: "Colaboração", value: 82, change: "+19%", tone: "mint" },
    { label: "Desenvolvimento", value: 90, change: "+11%", tone: "lilac" },
  ],
];

const InteractiveJourney = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [activeLayer, setActiveLayer] = useState(0);
  const stage = journeyStages[activeStage];
  const LayerIcon = journeyLayers[activeLayer].icon;

  return (
    <section className="journey-section" id="jornada" aria-labelledby="journey-title">
      <div className="container">
        <div className="journey-heading"><span className="section-kicker">COMO FUNCIONA</span><h2 id="journey-title">Como a inteligência da youB acompanha cada etapa.</h2><p>A Bee conecta dados, contexto e decisão em uma jornada contínua de desenvolvimento.</p></div>
        <div className="journey-flow" role="tablist" aria-label="Etapas da inteligência da youB">
          <div className="journey-line"><span style={{ width: `${activeStage * 25}%` }} /></div>
          {journeyStages.map((item, index) => <button key={item.label} type="button" role="tab" aria-selected={activeStage === index} aria-controls="journey-panel" tabIndex={activeStage === index ? 0 : -1} className={activeStage === index ? "is-active" : ""} onClick={() => setActiveStage(index)}><i>{index + 1}</i><span>{item.label}</span></button>)}
        </div>
        <div className="journey-panel" id="journey-panel" role="tabpanel" aria-live="polite">
          <div className="journey-visual">
            <div className="journey-halo" />
            <div className="journey-dashboard"><div className="journey-dashboard-top"><span>youB <small>visão integrada</small></span><span className="journey-status">● atualizado</span></div><div className="journey-dashboard-title"><span>{stage.kicker}</span><strong>{stage.label}</strong><p>{stage.detail}</p></div><div className="journey-analytics"><div className="journey-demo-label">DADOS DEMONSTRATIVOS <span>Contexto atualizado</span></div><div className="journey-mini-kpis"><span><strong>3</strong> habilidades evoluíram</span><span><strong>1</strong> ponto pede atenção</span><span><strong>1</strong> indicador estável</span></div><div className="journey-skill-chart">{journeyAnalytics[activeStage].map((skill, index) => <div className={`journey-skill-row tone-${skill.tone}${index === activeStage ? " is-priority" : ""}`} key={skill.label}><span className="journey-skill-name">{skill.label}</span><span className="journey-skill-track"><i style={{ width: `${skill.value}%` }} /></span><strong>{skill.value}</strong><em>{skill.change}</em></div>)}</div></div><div className="journey-dashboard-footer"><span>leitura organizada</span><strong>{activeStage === 4 ? "continuidade" : "em acompanhamento"}</strong></div></div>
            {journeyLayers.map((layer, index) => { const Icon = layer.icon; return <button key={layer.title} type="button" className={`journey-float journey-float-${index + 1}${activeLayer === index ? " is-active" : ""}`} onClick={() => setActiveLayer(index)}><Icon size={14} /><span>{layer.title}</span></button>; })}
            <div className="journey-bee-note"><div className="bee-avatar bee-avatar-journey"><BeeAvatar /></div><div><span className="mini-label">{activeStage === 3 ? "COMPETÊNCIA PRIORITÁRIA" : activeStage === 4 ? "PRÓXIMA AÇÃO" : "BEE · IA MENTORA"}</span><strong>{activeStage === 3 ? "Feedback contínuo · índice demonstrativo 49" : activeStage === 4 ? "Conversa estruturada de alinhamento." : stage.message}</strong></div></div>
          </div>
          <div className="journey-copy"><span className="section-kicker">{stage.kicker}</span><h3>{stage.label}</h3><p>{stage.detail}</p><div className="journey-layer-detail"><div className="feature-icon"><LayerIcon size={17} /></div><div><strong>{journeyLayers[activeLayer].title}</strong><span>{journeyLayers[activeLayer].text}</span></div></div><div className="journey-next"><span>Etapa {activeStage + 1} de {journeyStages.length}</span><button type="button" onClick={() => setActiveStage((activeStage + 1) % journeyStages.length)}>Avançar etapa <ArrowRight size={14} /></button></div></div>
        </div>
      </div>
    </section>
  );
};

const VisualRedesign = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", role: "", interest: "Plataforma" });
  const [submitted, setSubmitted] = useState(false);
  const [activeCapability, setActiveCapability] = useState<(typeof capabilities)[number] | null>(null);

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const ActiveCapabilityIcon = activeCapability?.icon;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Olá, conheci a youB pelo site e gostaria de agendar uma demonstração.",
      "",
      `Nome: ${form.name.trim()}`,
      `E-mail corporativo: ${form.email.trim()}`,
      `Empresa: ${form.company.trim()}`,
      `Cargo: ${form.role.trim()}`,
      `Interesse: ${form.interest}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="redesign-page">
      <section className="saas-hero" aria-labelledby="hero-title">
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow-pill"><span className="eyebrow-dot" /> DHO · IA · DADOS</div>
            <h1 id="hero-title">Inteligência para desenvolver pessoas com mais clareza.</h1>
            <p className="hero-lede">A youB organiza dados, desenvolvimento e decisões de pessoas em uma plataforma feita para RH e lideranças.</p>
            <div className="hero-actions"><a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar demonstração <ArrowRight size={16} /></a><button className="button button-secondary" type="button" onClick={() => document.getElementById("demonstracao-plataforma")?.scrollIntoView({ behavior: "smooth" })}>Conheça a plataforma <ChevronRight size={16} /></button></div>
            <div className="hero-proof"><span><CheckCircle2 size={16} /> Método aplicado</span><span><CheckCircle2 size={16} /> Tecnologia própria</span><span><CheckCircle2 size={16} /> IA com supervisão humana</span></div>
          </div>
          <div className="hero-product"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><ProductScreen /></div>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Indicadores institucionais youB"><div className="container metrics-grid"><div className="metrics-intro"><span>Experiência que vira produto</span><strong>Impacto real<br /><em>nas organizações.</em></strong></div><MetricCount target={11} prefix="+" suffix=" mil" label="profissionais impactados" /><MetricCount target={50} prefix="+" label="empresas atendidas" /><MetricCount target={2016} prefix="desde " label="atuação em DHO" /><MetricCount target={5} label="frentes integradas em desenvolvimento" /></div></section>

      <section className="problem-section" aria-labelledby="problem-title"><div className="container problem-grid"><div><span className="section-kicker">O DESAFIO DO RH</span><h2 id="problem-title">Quando o contexto se perde, o desenvolvimento perde continuidade.</h2></div><div><p>A youB organiza sinais, conversas e planos de desenvolvimento para que RH e lideranças avancem com uma visão comum.</p><Link to="/plataforma" className="text-link">Conheça a plataforma <ArrowRight size={15} /></Link></div></div></section>

      <PlatformDemo />

      <InteractiveJourney />

      <section className="capabilities-section" id="capacidades" aria-labelledby="capabilities-title"><div className="container"><div className="section-heading capabilities-heading"><span className="section-kicker">CAPACIDADES DO ECOSSISTEMA</span><h2 id="capabilities-title">Tudo se conecta para desenvolver pessoas.</h2><p>Uma arquitetura integrada para acompanhar pessoas, conversas, aprendizagem e decisões.</p></div><div className="capability-ecosystem-grid">{capabilityGroups.map((group, groupIndex) => <details className="capability-group" key={group.title} open={groupIndex === 0}><summary><span className="capability-group-index">0{groupIndex + 1}</span><span><strong>{group.title}</strong><small>{group.items.length} camadas conectadas</small></span><ChevronRight size={17} /></summary><div className="capability-group-items">{group.items.map((capability, index) => { const Icon = capability.icon; const isActive = activeCapability?.title === capability.title; return <button className={`feature-card${isActive ? " is-active" : ""}`} type="button" key={capability.title} aria-expanded={isActive} onClick={() => setActiveCapability(isActive ? null : capability)} style={{ animationDelay: `${(groupIndex + index) * 55}ms` }}><div className="feature-icon">{capability.title === "IA Mentora Bee" ? <BeeAvatar /> : <Icon size={19} />}</div><span><strong>{capability.title}</strong><small>{capability.text}</small></span><ArrowRight size={15} /></button>; })}</div></details>)}</div>{activeCapability && <div className="feature-dialog-backdrop" role="presentation" onClick={() => setActiveCapability(null)}><div className="feature-dialog" role="dialog" aria-modal="true" aria-labelledby="feature-dialog-title" onClick={(event) => event.stopPropagation()}><button className="feature-dialog-close" type="button" aria-label="Fechar detalhe" onClick={() => setActiveCapability(null)}><X size={18} /></button><div className="feature-icon">{activeCapability.title === "IA Mentora Bee" ? <BeeAvatar /> : ActiveCapabilityIcon && <ActiveCapabilityIcon size={19} />}</div><span className="section-kicker">Na plataforma youB</span><h3 id="feature-dialog-title">{activeCapability.title}</h3><p>{activeCapability.text}</p><Link to="/plataforma" className="button button-dark" onClick={() => setActiveCapability(null)}>Conhecer a plataforma <ArrowRight size={16} /></Link></div></div>}</div></section>

      <section className="bee-section" aria-labelledby="bee-title"><div className="container bee-section-grid"><div className="bee-product-card"><div className="bee-product-header"><div className="bee-avatar bee-avatar-large"><BeeAvatar /></div><div><span className="section-kicker">BEE · IA MENTORA</span><strong>Contexto que vira recomendação.</strong></div></div><div className="bee-flow" aria-label="Fluxo da Bee"><span>Dados</span><i>→</i><span>Contexto</span><i>→</i><span>Insight</span><i>→</i><span>Recomendação</span><i>→</i><span>Ação</span></div><div className="bee-recommendation"><BeeAvatar /><div><small>RECOMENDAÇÃO DA BEE</small><strong>Uma próxima conversa, no contexto certo.</strong><p>IA para apoiar a decisão humana no desenvolvimento contínuo.</p></div></div></div><div className="bee-copy"><span className="section-kicker">INTELIGÊNCIA DENTRO DA PLATAFORMA</span><h2 id="bee-title">A Bee ajuda a transformar leitura em próxima ação.</h2><p>A Bee organiza os sinais disponíveis na plataforma e orienta o próximo passo para líderes, RH e colaboradores.</p><ul><li><CheckCircle2 size={17} /> Lê o contexto da jornada.</li><li><CheckCircle2 size={17} /> Organiza o insight principal.</li><li><CheckCircle2 size={17} /> Recomenda uma ação com supervisão humana.</li></ul></div></div></section>

      <section className="authority-section"><div className="container"><div className="authority-heading"><span className="section-kicker brand-kicker">EMPRESAS QUE CONFIAM NA youB</span><h2>Empresas que confiam na youB.</h2><p>Experiência aplicada para contextos complexos de pessoas, liderança e cultura.</p></div><div className="client-lane" aria-label="Empresas que já caminharam com a youB"><div className="client-lane-track">{[...clients, ...clients].map((client, index) => <span key={`${client}-${index}`}>{client}</span>)}</div></div></div></section>

      <section className="media-strip"><div className="container media-strip-inner"><div><span className="section-kicker brand-kicker">youB NA MÍDIA</span><strong>Ideias que ampliam a conversa sobre pessoas e futuro.</strong></div><div className="media-links">{media.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{item.source}<ArrowRight size={13} /></a>)}</div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><div><span className="section-kicker">PRÓXIMO PASSO</span><h2>Veja a <em>youB</em> funcionando na sua empresa.</h2><p>Uma conversa para entender seu contexto e mostrar como a plataforma pode apoiar suas decisões de pessoas.</p><div className="final-cta-actions"><a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar demonstração <ArrowRight size={16} /></a><a className="button button-secondary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Falar no WhatsApp <MessageCircle size={15} /></a></div></div><div className="final-bee-visual"><div className="final-glow" /><div className="final-bee-card"><div className="bee-avatar large"><BeeAvatar /></div><span className="mini-label">BEE · IA MENTORA</span><strong>A evolução das pessoas começa com uma boa conversa.</strong><span className="bee-pulse" /></div></div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-layout"><div><span className="section-kicker">DEMONSTRAÇÃO</span><h2>Uma conversa orientada ao seu desafio.</h2><p>Conte rapidamente sobre o seu contexto. A equipe youB apresenta a plataforma e indica o formato mais adequado para a sua realidade.</p><div className="contact-points"><span><MessageCircle size={17} /> Atendimento pelo WhatsApp oficial</span><span><ShieldCheck size={17} /> Seus dados usados apenas para este contato</span></div></div><div className="contact-card">{submitted ? <div className="form-success" role="status"><div className="success-icon"><MessageCircle size={22} /></div><h3>WhatsApp preparado</h3><p>A mensagem foi aberta com as suas informações. Envie-a para concluir o contato com a equipe youB.</p><button type="button" onClick={() => setSubmitted(false)}>Enviar outro pedido</button></div> : <form onSubmit={handleSubmit}><h3>Agendar demonstração</h3><p className="form-intro">Fale com a equipe youB.</p><div className="form-grid"><label>Nome<input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Seu nome" /></label><label>E-mail corporativo<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="voce@empresa.com.br" /></label><label>Empresa<input required value={form.company} onChange={(event) => update("company", event.target.value)} placeholder="Nome da empresa" /></label><label>Cargo<input required value={form.role} onChange={(event) => update("role", event.target.value)} placeholder="Seu cargo" /></label></div><label>Tenho interesse em<select value={form.interest} onChange={(event) => update("interest", event.target.value)}><option>Plataforma</option><option>Consultoria</option><option>Liderança</option><option>Sucessão</option><option>Educação corporativa</option></select></label><small className="form-privacy">Ao continuar, você autoriza o uso dessas informações para este contato.</small><button type="submit" className="button button-primary form-submit">Solicitar demonstração <ArrowRight size={16} /></button></form>}</div></div></section>
    </main>
  );
};

export default VisualRedesign;

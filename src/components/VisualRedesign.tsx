import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ChevronRight,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

const WHATSAPP_NUMBER = "5521991417327";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, vim pelo site e gostaria de agendar uma sessão estratégica.")}`;

const capabilities = [
  { icon: Users, title: "Pessoas e estrutura", text: "Uma visão consistente de pessoas, áreas, posições e relações de gestão." },
  { icon: Workflow, title: "Ciclos de desenvolvimento", text: "Contexto, acompanhamento e próximos passos para cada jornada." },
  { icon: BarChart3, title: "Avaliações e feedbacks", text: "Conversas e sinais organizados para apoiar decisões mais claras." },
  { icon: Layers3, title: "PDI e visões por perfil", text: "Ações de desenvolvimento no contexto de cada papel e população." },
  { icon: Brain, title: "IA Mentora Bee", text: "Inteligência para organizar insights e orientar a próxima ação." },
];

const clients = ["ArcelorMittal", "Gerdau", "MRV", "Orient Life", "Grupo Sartori", "FCV"];

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

const ProductScreen = () => (
  <div className="product-browser" aria-label="Prévia visual da plataforma youB">
    <div className="browser-bar">
      <div className="browser-dots"><span /><span /><span /></div>
      <span className="browser-address">app.youb.com.br / visão de desenvolvimento</span>
      <span className="browser-status"><CheckCircle2 size={13} /> seguro</span>
    </div>
    <div className="product-shell">
      <aside className="product-sidebar">
        <span className="product-mark">you<span>B</span>.</span>
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
            <div className="chart-area"><div className="chart-grid-lines" /><svg viewBox="0 0 420 150" role="img" aria-label="Gráfico ilustrativo de evolução"><path d="M0 127 C38 122 44 104 78 110 S125 91 154 97 S198 65 226 79 S270 46 298 57 S350 26 420 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><path d="M0 127 C38 122 44 104 78 110 S125 91 154 97 S198 65 226 79 S270 46 298 57 S350 26 420 10 V150 H0Z" fill="url(#chartFill)" opacity=".18" /><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#7357f3" /><stop offset="1" stopColor="#7357f3" stopOpacity="0" /></linearGradient></defs></svg></div>
            <div className="chart-axis"><span>Contexto</span><span>Ações</span><span>Evolução</span></div>
          </div>
          <div className="donut-card"><span className="chart-heading">Distribuição de perfis</span><div className="donut" /><div className="donut-legend"><span><i className="legend-dot purple" /> Lideranças</span><span><i className="legend-dot blue" /> Times</span><span><i className="legend-dot lilac" /> Em desenvolvimento</span></div></div>
        </div>
        <div className="product-bottom-row"><span><CheckCircle2 size={14} /> leitura organizada</span><span><CheckCircle2 size={14} /> supervisão humana</span><span><CheckCircle2 size={14} /> ação recomendada</span></div>
      </div>
    </div>
    <div className="bee-card"><div className="bee-avatar"><Brain size={20} /></div><div><strong>Bee <small>IA Mentora</small></strong><p>Encontrei um próximo passo para esta jornada.</p><span>Ver recomendação <ArrowRight size={12} /></span></div></div>
  </div>
);

const VisualRedesign = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", role: "", interest: "Plataforma" });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

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
            <div className="eyebrow-pill"><span className="eyebrow-dot" /> PLATAFORMA YOUB · DHO + IA</div>
            <h1 id="hero-title">A experiência da youB transformada em um <em>ecossistema inteligente</em> para desenvolver pessoas e organizações.</h1>
            <p className="hero-lede">Método, tecnologia e inteligência artificial para organizar pessoas, desenvolver lideranças e apoiar decisões estratégicas com mais clareza e continuidade.</p>
            <div className="hero-actions"><a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar demonstração <ArrowRight size={16} /></a><button className="button button-secondary" type="button" onClick={() => document.getElementById("plataforma")?.scrollIntoView({ behavior: "smooth" })}>Conhecer a plataforma <ChevronRight size={16} /></button></div>
            <div className="hero-proof"><span><CheckCircle2 size={16} /> Método aplicado</span><span><CheckCircle2 size={16} /> Tecnologia própria</span><span><CheckCircle2 size={16} /> IA com supervisão humana</span></div>
          </div>
          <div className="hero-product"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><ProductScreen /></div>
        </div>
      </section>

      <section className="metrics-strip" aria-label="Indicadores institucionais youB"><div className="container metrics-grid"><div className="metrics-intro"><span>Experiência que vira produto</span><strong>Impacto real<br /><em>nas organizações.</em></strong></div><div className="metric"><strong>+11 mil</strong><span>profissionais impactados</span></div><div className="metric"><strong>+50</strong><span>empresas atendidas</span></div><div className="metric"><strong>desde 2016</strong><span>atuação em DHO</span></div><div className="metric"><strong>5 frentes</strong><span>integradas em desenvolvimento</span></div></div></section>

      <section className="platform-section" id="plataforma" aria-labelledby="platform-title"><div className="container"><div className="section-heading split-heading"><div><span className="section-kicker">DA ESTRATÉGIA À PRÁTICA</span><h2 id="platform-title">Uma plataforma completa para o <em>ciclo de desenvolvimento.</em></h2></div><div><p>Da leitura do contexto à próxima ação, a youB integra dados, desenvolvimento e inteligência em uma experiência contínua.</p><Link to="/plataforma" className="text-link">Conheça todas as soluções <ArrowRight size={15} /></Link></div></div><div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="capability-card" key={title}><div className="capability-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowRight size={15} /></span></article>)}</div></div></section>

      <section className="narrative-section"><div className="container narrative-grid"><div className="narrative-visual"><div className="narrative-label"><Sparkles size={15} /> Produto que transforma contexto em ação</div><div className="signal-card"><div className="signal-header"><span className="signal-icon"><BarChart3 size={16} /></span><div><strong>Leitura de desenvolvimento</strong><small>Uma visão para orientar a conversa</small></div></div><div className="signal-bars"><span style={{ width: "42%" }} /><span style={{ width: "67%" }} /><span style={{ width: "54%" }} /><span style={{ width: "82%" }} /><span style={{ width: "72%" }} /></div><div className="signal-footer"><span>Contexto organizado</span><span className="signal-positive">Próximo passo identificado</span></div></div><div className="action-card"><div className="bee-mini"><Brain size={17} /></div><div><span className="mini-label">BEE · IA MENTORA</span><strong>Comece pela conversa certa.</strong><p>Recomendações para apoiar líderes e colaboradores no desenvolvimento contínuo.</p></div><ArrowRight size={17} /></div></div><div className="narrative-copy"><span className="section-kicker">PROBLEMA → INSIGHT → AÇÃO</span><h2>Menos planilhas soltas. Mais continuidade para desenvolver pessoas.</h2><p>A plataforma organiza sinais, conversas e planos de desenvolvimento para que RH e lideranças avancem com clareza — sem perder o contexto humano.</p><ul><li><CheckCircle2 size={17} /> Decida com dados e escuta.</li><li><CheckCircle2 size={17} /> Conecte avaliação, feedback e PDI.</li><li><CheckCircle2 size={17} /> Acompanhe a evolução de cada jornada.</li></ul><Link to="/plataforma" className="button button-dark">Ver a plataforma <ArrowRight size={16} /></Link></div></div></section>

      <section className="authority-section"><div className="container"><div className="authority-heading"><span className="section-kicker">ECOSSISTEMA YOU B</span><h2>Empresas que já caminharam com a youB.</h2><p>Experiência aplicada para contextos complexos de pessoas, liderança e cultura.</p></div><div className="client-lane">{clients.map((client) => <span key={client}>{client}</span>)}</div></div></section>

      <section className="stories-section"><div className="container stories-layout"><div><span className="section-kicker">PROVA SOCIAL</span><h2>Histórias reais, com contexto.</h2><p>O espaço está preparado para receber depoimentos reais, com cargo, empresa e autorização de uso — sem retratos genéricos ou promessas inventadas.</p><div className="stories-note"><Quote size={18} /><span>Depoimentos validados entram nesta faixa após aprovação do conteúdo.</span></div></div><div className="story-placeholder"><div className="placeholder-top"><span className="placeholder-line short" /><span className="placeholder-dot" /></div><div className="placeholder-quote">Depoimento real · cargo · empresa<br /><small>Conteúdo entra após validação e autorização de uso.</small></div><div className="placeholder-bottom"><span>Formato visual preparado</span><span>Swipe no mobile</span></div></div></div></section>

      <section className="final-cta"><div className="container final-cta-inner"><div><span className="section-kicker">VAMOS CONVERSAR?</span><h2>Veja a <em>youB</em> funcionando na sua empresa.</h2><p>Conheça como dados, desenvolvimento e inteligência se conectam para transformar decisões em evolução.</p><a className="button button-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Agendar demonstração <ArrowRight size={16} /></a></div><div className="final-bee-visual"><div className="final-glow" /><div className="final-bee-card"><div className="bee-avatar large"><Brain size={30} /></div><span className="mini-label">BEE · IA MENTORA</span><strong>A evolução das pessoas começa com uma boa conversa.</strong><span className="bee-pulse" /></div></div></div></section>

      <section className="media-strip"><div className="container media-strip-inner"><div><span className="section-kicker">youB NA MÍDIA</span><strong>Ideias que ampliam a conversa sobre pessoas e futuro.</strong></div><div className="media-links">{media.map((item) => <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{item.source}<ArrowRight size={13} /></a>)}</div></div></section>

      <section className="contact-section" id="demonstracao"><div className="container contact-layout"><div><span className="section-kicker">PRÓXIMO PASSO</span><h2>Uma conversa orientada ao seu desafio.</h2><p>Conte rapidamente sobre o seu contexto. A equipe youB apresenta a plataforma e indica o formato mais adequado para a sua realidade.</p><div className="contact-points"><span><MessageCircle size={17} /> Atendimento pelo WhatsApp oficial</span><span><ShieldCheck size={17} /> Seus dados usados apenas para este contato</span></div></div><div className="contact-card">{submitted ? <div className="form-success" role="status"><div className="success-icon"><MessageCircle size={22} /></div><h3>WhatsApp preparado</h3><p>A mensagem foi aberta com as suas informações. Envie-a para concluir o contato com a equipe youB.</p><button type="button" onClick={() => setSubmitted(false)}>Enviar outro pedido</button></div> : <form onSubmit={handleSubmit}><h3>Agendar demonstração</h3><p className="form-intro">Fale com a equipe youB.</p><div className="form-grid"><label>Nome<input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Seu nome" /></label><label>E-mail corporativo<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="voce@empresa.com.br" /></label><label>Empresa<input required value={form.company} onChange={(event) => update("company", event.target.value)} placeholder="Nome da empresa" /></label><label>Cargo<input required value={form.role} onChange={(event) => update("role", event.target.value)} placeholder="Seu cargo" /></label></div><label>Tenho interesse em<select value={form.interest} onChange={(event) => update("interest", event.target.value)}><option>Plataforma</option><option>Consultoria</option><option>Liderança</option><option>Sucessão</option><option>Educação corporativa</option></select></label><small className="form-privacy">Ao continuar, você autoriza o uso dessas informações para este contato.</small><button type="submit" className="button button-primary form-submit">Solicitar demonstração <ArrowRight size={16} /></button></form>}</div></div></section>
    </main>
  );
};

export default VisualRedesign;

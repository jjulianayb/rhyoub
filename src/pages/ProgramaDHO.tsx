import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, CheckCircle2, Target, Users, BarChart3, Award, Briefcase, Send } from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

const pains = [
  {
    pain: "Dificuldade em provar o valor financeiro dos treinamentos.",
    solution: "Metodologias exatas para medir a eficácia e apresentar o ROI das capacitações para a diretoria.",
  },
  {
    pain: "Insegurança ao confrontar ou orientar a alta gestão.",
    solution: "Técnicas de comunicação executiva e posicionamento como Consultor Interno de autoridade.",
  },
  {
    pain: "Processos de RH engessados e times desestruturados.",
    solution: "Engenharia prática para estruturação de times, análise de políticas e elaboração de Planos de Carreira e PDIs que realmente funcionam.",
  },
];

const levels = [
  {
    level: "Nível 1",
    title: "Base – Fundamentos e Operação DHO/BP",
    focus: "Execução impecável e transição segura para o papel de BP.",
    items: [
      "Análise de Políticas: Como ler, interpretar e aplicar as políticas organizacionais sem burocracia.",
      "Engenharia de PDIs: Passo a passo para elaborar Planos de Carreira e PDIs baseados em competências reais.",
      "Comunicação Tática: Como se comunicar com líderes de primeira linha para garantir adesão aos processos de RH.",
    ],
  },
  {
    level: "Nível 2",
    title: "Pleno – Consultoria Interna e Eficácia",
    focus: "Posicionamento de autoridade e medição de resultados iniciais.",
    items: [
      "O Consultor Interno: Como fazer a transição de 'tirador de pedidos' para Consultor Interno respeitado.",
      "Eficácia de Treinamentos: Como avaliar e medir a eficácia das capacitações (além da pesquisa de satisfação).",
      "Mentoria de Liderança (Nível 1): Como mapear e mentorar as necessidades operacionais e táticas dos líderes.",
    ],
  },
  {
    level: "Nível 3",
    title: "Pleno Avançado – Arquitetura de Soluções",
    focus: "Estruturação de áreas e comprovação de valor.",
    items: [
      "Design Organizacional: Como estruturar times de alta performance e desenhar mapas de sucessão.",
      "Apresentação de Resultados: Como compilar dados de DHO e apresentar resultados financeiros e de engajamento.",
      "Trilhas Complexas: Desenho de arquitetura de aprendizagem (70-20-10) vinculada às metas de vendas e produção.",
    ],
  },
  {
    level: "Nível 4",
    title: "Sênior – Estratégia e Mentoria Executiva",
    focus: "Influência no C-Level e ROI avançado.",
    items: [
      "Mentoria Executiva: Como confrontar, orientar e mentorar Diretores e C-Level com embasamento em dados.",
      "ROI em DHO: Modelagem financeira para comprovar o retorno sobre o investimento de programas de longo prazo.",
      "Revisão Estratégica: Como reescrever políticas de RH para suportar o crescimento exponencial da empresa.",
    ],
  },
  {
    level: "Nível 5",
    title: "Executivo – Visão Organizacional (Heads/CHRO)",
    focus: "DHO como motor de riqueza e expansão de mercado.",
    items: [
      "Posicionamento no Board: Como liderar a pauta de capital humano nas reuniões de conselho.",
      "Gestão de Portfólio: Otimização de investimentos em DHO com análise de trade-offs e impacto no EBITDA.",
      "Cultura de Alta Performance: Estabelecimento de KPIs estratégicos globais para a organização.",
    ],
  },
];

const deliverables = [
  { icon: Target, title: "Diagnóstico de Ponto de Partida", text: "Avaliação exata do nível de senioridade para alocação na trilha correta." },
  { icon: Users, title: "Mentoria Intensiva", text: "4 a 8 sessões diretas de mentoria com especialistas em DHO reconhecidos de mercado." },
  { icon: BarChart3, title: "Relatórios Executivos", text: "O aluno sai com relatórios prontos, em linguagem de negócios, para apresentar à sua diretoria." },
  { icon: Award, title: "PDI Automatizado", text: "Automação exclusiva que sugere ações de desenvolvimento baseadas nas habilidades do profissional." },
];

const knowledgeLevels = [
  "Iniciante – Estou começando na área de DHO/BP",
  "Júnior – Tenho até 2 anos de experiência",
  "Pleno – Tenho 2 a 5 anos de experiência",
  "Sênior – Tenho mais de 5 anos de experiência",
  "Executivo – Sou Head/CHRO ou equivalente",
];

const aspirations = [
  "Quero me tornar um Business Partner estratégico",
  "Quero provar ROI das iniciativas de DHO",
  "Quero influenciar o C-Level com dados",
  "Quero estruturar a área de DHO da empresa",
  "Quero me reposicionar no mercado de RH",
];

const levelIcons = [Briefcase, Users, BarChart3, Award, Target];

const ProgramaDHO = () => {
  const [name, setName] = useState("");
  const [knowledge, setKnowledge] = useState("");
  const [aspiration, setAspiration] = useState("");
  const [payer, setPayer] = useState("");
  const [showDiag, setShowDiag] = useState(false);

  const canSubmit = name.trim() && knowledge && aspiration && payer;

  const getDiagnostic = () => {
    const knowledgeIdx = knowledgeLevels.indexOf(knowledge);
    const suggestedLevel = Math.min(knowledgeIdx + 1, 5);
    const suggestedLevelData = levels[suggestedLevel - 1];

    let insight = "";
    if (knowledgeIdx <= 1) {
      insight = `${name}, você está no momento ideal para construir uma base sólida em DHO. O programa vai acelerar sua transição para um papel de Business Partner com autoridade e método.`;
    } else if (knowledgeIdx <= 2) {
      insight = `${name}, você já tem experiência prática. Agora é hora de estruturar soluções mais complexas e começar a apresentar resultados financeiros para a diretoria.`;
    } else {
      insight = `${name}, com sua experiência, o programa vai potencializar sua influência estratégica no C-Level e sua capacidade de gerar ROI mensurável em DHO.`;
    }

    return { suggestedLevel, suggestedLevelData, insight };
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    setShowDiag(true);
  };

  const diag = showDiag ? getDiagnostic() : null;

  const whatsappLink = diag
    ? `${WHATSAPP_BASE}${encodeURIComponent(
        `Olá, fiz o diagnóstico do Programa DHO & Business Partners youB:\n\n- Nome: ${name.trim()}\n- Nível atual: ${knowledge}\n- Aspiração: ${aspiration}\n- Investimento: ${payer}\n- Nível sugerido: ${diag.suggestedLevel} – ${diag.suggestedLevelData.title}\n\nGostaria de saber mais sobre o programa!`
      )}`
    : "";

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden bg-foreground">
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Programa DHO & Business Partners</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-5">
              Programa Executivo
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
              Programa Executivo de Formação DHO & Business Partners <span className="text-primary">youB</span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mb-6">
              Transforme a gestão de pessoas em um ativo financeiro mensurável.
            </p>
            <p className="text-white/60 max-w-3xl leading-relaxed mb-8">
              O Programa youB é uma imersão arquitetada para elevar profissionais de DHO e Business Partners (BPs) do nível operacional à mesa de decisões estratégicas, garantindo ROI em cada iniciativa de capital humano.
            </p>
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent("Olá, quero saber mais sobre o Programa Executivo de Formação DHO & Business Partners youB.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Quero participar do programa
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Para quem é + Dores */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Para quem é</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Para Quem É Este Programa e as Dores que Resolvemos
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              Este programa foi desenhado para profissionais de DHO e Business Partners que precisam parar de apagar incêndios e começar a ditar a estratégia do negócio.
            </p>
            <div className="grid gap-6">
              {pains.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 md:p-8 grid md:grid-cols-2 gap-5"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-destructive/80 mb-2">A Dor</p>
                    <p className="text-foreground font-medium leading-relaxed">{item.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">A Solução</p>
                    <p className="text-muted-foreground leading-relaxed">{item.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trilha de Aprendizagem */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Trilha de Aprendizagem</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Roteiro por Nível de Senioridade
            </h2>
            <p className="text-muted-foreground mb-10 max-w-3xl leading-relaxed">
              O conteúdo é cirúrgico. O aluno estuda exatamente o que precisa para avançar ao próximo nível de faturamento e autoridade dentro da empresa.
            </p>
            <div className="space-y-6">
              {levels.map((lvl, i) => {
                const Icon = levelIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="glass-card p-6 md:p-8"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">{lvl.level}</span>
                        <h3 className="text-lg font-bold text-foreground">{lvl.title}</h3>
                        <p className="text-sm text-muted-foreground">Foco: {lvl.focus}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4 pl-0 md:pl-16">
                      {lvl.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodologia</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">
              Metodologia e Entregáveis de Elite
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {deliverables.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <d.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculadora / Diagnóstico */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Diagnóstico Rápido</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">
              Descubra seu ponto de partida no programa
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Responda algumas perguntas e receba um diagnóstico personalizado com o nível sugerido para você.
            </p>

            <div className="glass-card p-8 space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Seu nome</label>
                <input
                  type="text"
                  maxLength={100}
                  value={name}
                  onChange={(e) => { setName(e.target.value); setShowDiag(false); }}
                  placeholder="Ex: Maria Silva"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              {/* Nível de conhecimento */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Qual o seu nível de conhecimento atual?</label>
                <div className="space-y-2">
                  {knowledgeLevels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => { setKnowledge(lvl); setShowDiag(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        knowledge === lvl
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aspiração */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Qual a sua principal aspiração?</label>
                <div className="space-y-2">
                  {aspirations.map((asp) => (
                    <button
                      key={asp}
                      onClick={() => { setAspiration(asp); setShowDiag(false); }}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        aspiration === asp
                          ? "border-primary bg-primary/10 text-primary font-medium"
                          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      {asp}
                    </button>
                  ))}
                </div>
              </div>

              {/* Pagador */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Quem fará o investimento?</label>
                <div className="flex flex-wrap gap-2">
                  {["Eu mesmo(a)", "Minha empresa"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setPayer(opt); setShowDiag(false); }}
                      className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                        payer === opt
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Gerar meu diagnóstico
              </button>

              {/* Resultado */}
              {showDiag && diag && (
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-5 pt-2">
                  <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-foreground leading-relaxed mb-4">{diag.insight}</p>
                    <p className="text-sm text-muted-foreground mb-1">Nível sugerido para você:</p>
                    <p className="text-xl font-bold text-primary">
                      {diag.suggestedLevelData.level} – {diag.suggestedLevelData.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Foco: {diag.suggestedLevelData.focus}</p>
                  </div>

                  <div className="p-5 rounded-xl border border-border bg-card">
                    <p className="font-bold text-foreground mb-3">Resumo do diagnóstico</p>
                    <div className="space-y-2 text-sm">
                      {[
                        ["Nome", name.trim()],
                        ["Nível atual", knowledge],
                        ["Aspiração", aspiration],
                        ["Investimento", payer],
                        ["Nível sugerido", `${diag.suggestedLevel} – ${diag.suggestedLevelData.title}`],
                      ].map(([label, value], i, arr) => (
                        <div key={label} className={`flex justify-between py-1.5 ${i < arr.length - 1 ? "border-b border-border/50" : ""}`}>
                          <span className="text-muted-foreground">{label}</span>
                          <span className="font-medium text-foreground text-right max-w-[60%]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    <Send className="w-4 h-4" />
                    Falar com um consultor sobre meu diagnóstico
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_68%/0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Eleve sua carreira em DHO ao próximo nível.
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            O mercado precisa de profissionais de DHO que falem a linguagem do negócio. Seja um deles.
          </p>
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent("Olá, quero saber mais sobre o Programa Executivo de Formação DHO & Business Partners youB.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Quero participar do programa
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProgramaDHO;

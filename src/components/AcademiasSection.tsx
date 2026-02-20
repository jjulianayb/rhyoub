import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, CheckCircle2, AlertTriangle, ShieldCheck, Calculator } from "lucide-react";

const WHATSAPP_TRAIL = "https://wa.me/5521991417327?text=Olá,%20montei%20uma%20trilha%20no%20site%20da%20youB%20e%20quero%20conversar%20sobre%20uma%20Academia%20Corporativa.";
const WHATSAPP_DIAG = "https://wa.me/5521991417327?text=Olá,%20gostaria%20de%20aprofundar%20o%20diagnóstico%20de%20liderança%20e%20sucessão%20para%20a%20minha%20empresa.";

// --- Trail Builder Data ---
const q1Options = [
  {
    label: "Falta de alinhamento e comunicação entre líderes",
    themes: ["Comunicação não violenta", "Feedback contínuo e conversas difíceis", "Reuniões de alinhamento de alta performance"],
  },
  {
    label: "Líderes tecnicamente bons, mas fracos em gestão de pessoas",
    themes: ["Liderança situacional", "Inteligência emocional aplicada à liderança", "Delegação e acompanhamento eficaz"],
  },
  {
    label: "Dificuldade em lidar com mudanças e pressão",
    themes: ["Resiliência e gestão de estresse", "Tomada de decisão sob pressão", "Gestão da mudança na prática"],
  },
  {
    label: "Falta de visão estratégica na gestão do dia a dia",
    themes: ["Pensamento estratégico no dia a dia", "Gestão por OKRs e metas", "Prioridades e foco (matriz de Eisenhower/PDCA)"],
  },
];

const q2Options = [
  {
    label: "Baixo engajamento",
    themes: ["Cultura de reconhecimento", "Segurança psicológica", "Propósito, engajamento e pertencimento"],
  },
  {
    label: "Alta rotatividade",
    themes: ["Conversas de carreira e desenvolvimento", "One-on-one eficaz", "Onboarding estruturado de novos colaboradores"],
  },
  {
    label: "Conflitos e clima pesado",
    themes: ["Gestão de conflitos", "Escuta ativa", "Acordos de convivência e trabalho em equipe"],
  },
  {
    label: "Falta de autonomia",
    themes: ["Empowerment e delegação", "Gestão por responsabilidades", "Desenvolvimento de equipes auto-organizadas"],
  },
];

// --- Trail Builder Component ---
const TrailBuilder = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);

  const handleQ1 = (themes: string[]) => {
    setSelectedThemes(themes);
    setStep(2);
  };

  const handleQ2 = (themes: string[]) => {
    const combined = [...selectedThemes, ...themes].slice(0, 12);
    setSelectedThemes(combined);
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setSelectedThemes([]);
  };

  return (
    <div className="glass-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-primary" />
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Monte uma trilha inicial para a sua Academia
        </h3>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
              {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
            </div>
            {s < 3 && <div className={`w-8 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />}
          </div>
        ))}
        <span className="text-xs text-muted-foreground ml-2">
          {step === 1 ? "Dor principal" : step === 2 ? "Equipes" : "Sua trilha"}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="q1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <p className="text-foreground font-semibold mb-4">Hoje, qual dor é mais urgente na sua liderança?</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {q1Options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleQ1(opt.themes)}
                  className="text-left p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-foreground"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="q2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <p className="text-foreground font-semibold mb-4">E quando você olha para as equipes, o que mais te preocupa hoje?</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {q2Options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleQ2(opt.themes)}
                  className="text-left p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 transition-all text-sm text-muted-foreground hover:text-foreground"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <p className="text-foreground font-semibold mb-4">Uma trilha inicial para a sua Academia poderia incluir estes temas:</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {selectedThemes.map((theme, i) => (
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{theme}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Na prática, refinamos essa trilha junto com você, conectando cada tema à estratégia, à cultura e aos indicadores do seu negócio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_TRAIL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Quero revisar essa trilha com um consultor
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button onClick={reset} className="px-6 py-3 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                Refazer
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Risk Calculator ---
const RiskCalculator = () => {
  const [totalLeaders, setTotalLeaders] = useState("");
  const [criticalLeaders, setCriticalLeaders] = useState("");
  const [substitutes, setSubstitutes] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const total = parseInt(totalLeaders) || 0;
    const critical = parseInt(criticalLeaders) || 0;

    if (total === 0 || critical === 0) return;

    const ratio = critical / total;

    if (substitutes === "Nenhum" || (substitutes === "Alguns" && ratio > 0.5)) {
      setResult("Alto risco de sucessão: sua empresa pode sofrer impactos fortes se perder 1 ou 2 nomes-chave. Esse é um dos pontos mais sensíveis que trabalhamos em nossos projetos de Sucessão e Academias.");
    } else if (substitutes === "Alguns") {
      setResult("Risco moderado: existem alguns sucessores em vista, mas ainda há vulnerabilidade em cargos-chave. Com uma estratégia estruturada, é possível reduzir significativamente esse risco.");
    } else {
      setResult("Risco mais controlado: existe algum nível de preparação. Mesmo assim, é possível fortalecer ainda mais a continuidade por meio de planos estruturados de desenvolvimento e sucessão.");
    }
  };

  const substituteOptions = ["Nenhum", "Alguns", "A maioria", "Praticamente todos"];

  return (
    <div className="glass-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Visão inicial de risco em liderança e sucessão
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Quantos líderes a sua empresa tem hoje?</label>
          <input
            type="number"
            min="0"
            value={totalLeaders}
            onChange={(e) => setTotalLeaders(e.target.value)}
            placeholder="Ex: 25"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Desses, quantos você considera críticos?</label>
          <input
            type="number"
            min="0"
            value={criticalLeaders}
            onChange={(e) => setCriticalLeaders(e.target.value)}
            placeholder="Ex: 8"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">Quantos desses líderes críticos têm substitutos preparados?</label>
        <div className="flex flex-wrap gap-2">
          {substituteOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSubstitutes(opt)}
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                substitutes === opt
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
        onClick={calculate}
        disabled={!totalLeaders || !criticalLeaders || !substitutes}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Calcular
      </button>

      <AnimatePresence>
        {result && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-6 space-y-4">
            <div className="flex items-start gap-3 p-5 rounded-xl bg-primary/5 border border-primary/10">
              {result.startsWith("Alto") ? (
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              )}
              <p className="text-foreground text-sm leading-relaxed">{result}</p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Essa é apenas uma visão inicial. Em nossos projetos, usamos diagnósticos completos para mapear riscos por líder, cargo e área – e transformar isso em um plano concreto de ação.
            </p>

            <a
              href={WHATSAPP_DIAG}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Quero um diagnóstico completo para a minha empresa
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Section ---
const AcademiasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="academias" ref={ref} className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Solução 1
          </p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">
            Academias Corporativas & Programas de Liderança
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Do treinamento pontual à construção de um ecossistema contínuo de desenvolvimento.
          </p>

          <div className="space-y-4 mb-12 max-w-3xl">
            {[
              "Se a sua empresa já investiu em treinamentos e, mesmo assim, pouca coisa mudou na prática, você não está sozinha.",
              "Academias Corporativas youB são ecossistemas de aprendizagem contínua, conectados à estratégia do negócio, à cultura e às dores reais das lideranças e times.",
              "Em vez de pacotes prontos, construímos Learning Journeys sob medida: jornadas que combinam encontros ao vivo, prática no dia a dia, tecnologia e acompanhamento próximo.",
              "Abaixo, você pode ter um gostinho de como isso funciona: responda algumas perguntas e veja uma trilha inicial de 12 temas se formando para a sua realidade.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-8"
        >
          <TrailBuilder />
          <RiskCalculator />
        </motion.div>
      </div>
    </section>
  );
};

export default AcademiasSection;

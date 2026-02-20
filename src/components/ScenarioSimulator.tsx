import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator, Copy, Check } from "lucide-react";

const levels = ["Essencial", "Estratégico", "Ecossistema completo"];

const estimate = (leaders: number, roles: number, level: string): [number, number] => {
  const base = leaders * 1200 + roles * 2500;
  const multiplier = level === "Essencial" ? 1 : level === "Estratégico" ? 1.8 : 2.8;
  const min = Math.round((base * multiplier) / 1000) * 1000;
  const max = Math.round((min * 1.6) / 1000) * 1000;
  return [Math.max(min, 15000), Math.max(max, 25000)];
};

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

interface Props {
  solutionName: string;
}

const ScenarioSimulator = ({ solutionName }: Props) => {
  const [numLeaders, setNumLeaders] = useState("");
  const [numRoles, setNumRoles] = useState("");
  const [level, setLevel] = useState("");
  const [objective, setObjective] = useState("");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);
  const [copied, setCopied] = useState(false);

  const canCalc = numLeaders && numRoles && level && objective.trim();

  const calculate = () => {
    if (!canCalc) return;
    const [min, max] = estimate(parseInt(numLeaders), parseInt(numRoles), level);
    setResult({ min, max });
  };

  const summaryText = result
    ? `Solução: ${solutionName}\nNº de líderes: ${numLeaders}\nCargos críticos: ${numRoles}\nNível desejado: ${level}\nObjetivo principal: ${objective.trim()}\nInvestimento estimado: ${fmt(result.min)} a ${fmt(result.max)}`
    : "";

  const whatsappLink = result
    ? `https://wa.me/5521991417327?text=${encodeURIComponent(
        `Olá, acabei de simular um cenário no site da youB e gostaria de aprofundar:\n\n- Solução: ${solutionName}\n- Nº de líderes: ${numLeaders}\n- Cargos críticos: ${numRoles}\n- Nível: ${level}\n- Objetivo: ${objective.trim()}\n\nPodemos avaliar juntos um formato de projeto e investimento ideal para essa realidade?`
      )}`
    : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="w-6 h-6 text-primary" />
        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Simule um cenário para a sua empresa
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Quantos líderes você quer incluir nessa solução?
          </label>
          <input
            type="number"
            min="0"
            value={numLeaders}
            onChange={(e) => { setNumLeaders(e.target.value); setResult(null); }}
            placeholder="Ex: 15"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Quantos cargos críticos você deseja mapear/trabalhar?
          </label>
          <input
            type="number"
            min="0"
            value={numRoles}
            onChange={(e) => { setNumRoles(e.target.value); setResult(null); }}
            placeholder="Ex: 6"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-medium text-foreground mb-2">
          Nível de profundidade desejado
        </label>
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => { setLevel(l); setResult(null); }}
              className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                level === l
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">
          Descreva em 1 frase o principal objetivo desse projeto
        </label>
        <input
          type="text"
          maxLength={200}
          value={objective}
          onChange={(e) => { setObjective(e.target.value); setResult(null); }}
          placeholder="Ex: reduzir turnover, preparar sucessores, estruturar liderança média"
          className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <button
        onClick={calculate}
        disabled={!canCalc}
        className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Calcular investimento estimado
      </button>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-6"
          >
            {/* Estimate */}
            <div className="p-5 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-foreground text-sm leading-relaxed mb-3">
                Para um cenário com <strong>{numLeaders} líderes</strong> e{" "}
                <strong>{numRoles} cargos críticos</strong>, no nível{" "}
                <strong>{level}</strong>, o investimento estimado para essa solução fica em uma faixa de:
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary">
                {fmt(result.min)} a {fmt(result.max)}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Essa não é uma proposta comercial final, mas uma estimativa para ajudar você a ter ordem de grandeza do investimento.
              </p>
            </div>

            {/* Summary card */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-foreground">Resumo do cenário</p>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? "Copiado!" : "Copiar resumo"}
                </button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Solução</span>
                  <span className="font-medium text-foreground">{solutionName}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Nº de líderes</span>
                  <span className="font-medium text-foreground">{numLeaders}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Cargos críticos</span>
                  <span className="font-medium text-foreground">{numRoles}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Nível desejado</span>
                  <span className="font-medium text-foreground">{level}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-border/50">
                  <span className="text-muted-foreground">Objetivo principal</span>
                  <span className="font-medium text-foreground text-right max-w-[60%]">{objective.trim()}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-muted-foreground">Investimento estimado</span>
                  <span className="font-bold text-primary">{fmt(result.min)} – {fmt(result.max)}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Com base nessas informações, já conseguimos montar um esqueleto de projeto para você. A partir daqui, um consultor youB ajusta escopo, cronograma e valores finais.
              </p>
            </div>

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Enviar esse cenário para um consultor
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScenarioSimulator;

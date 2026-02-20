import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { getSolutionBySlug } from "@/data/solutions";
import ScenarioSimulator from "@/components/ScenarioSimulator";

const WHATSAPP_BASE = "https://wa.me/5521991417327?text=";

const plans = [
  {
    name: "Essencial",
    plan: "youB Start",
    description: "Para empresas que estão começando a estruturar.",
    features: ["Diagnóstico inicial", "Trilha base de 3 meses", "1 workshop ao vivo/mês", "Relatório de impacto"],
    highlight: false,
  },
  {
    name: "Estratégico",
    plan: "youB Pro",
    description: "Para empresas que querem transformação com profundidade.",
    features: ["Diagnóstico completo + 9-Box", "Trilha de 6–12 meses", "Mentoria individual", "Plataforma digital + IA", "Dashboards de progresso"],
    highlight: true,
  },
  {
    name: "Ecossistema",
    plan: "youB Enterprise",
    description: "Para empresas que querem um ecossistema completo.",
    features: ["Tudo do Estratégico", "Consultoria contínua", "Academia autoral completa", "Plano de sucessão integrado", "Suporte dedicado 12 meses"],
    highlight: false,
  },
];

const SolutionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug || "");

  if (!solution) return <Navigate to="/" replace />;

  return (
    <main>
      {/* Mini Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/15 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Soluções</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">{solution.title.split(" & ")[0]}</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-4">
              {solution.tags.map((tag) => (
                <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-2xl">
              {solution.title}
            </h1>
            <p className="text-lg text-white/80 max-w-xl">{solution.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Público-alvo</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">Para quem é</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {solution.forWhom.map((item, i) => (
                <div key={i} className="glass-card p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qual dor resolve */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Diagnóstico</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">Qual dor resolve</h2>
            <div className="glass-card p-8">
              <p className="text-muted-foreground leading-relaxed text-lg">{solution.pain}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodologia</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">Como funciona</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Planos e investimento */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Investimento</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">Planos e investimento</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl p-7 flex flex-col ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-2 ring-primary"
                      : "glass-card"
                  }`}
                >
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${plan.highlight ? "text-primary-foreground/70" : "text-primary"}`}>
                    {plan.plan}
                  </p>
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-3 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-primary-foreground/80" : "text-primary"}`} />
                        <span className={plan.highlight ? "text-primary-foreground/90" : "text-muted-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={solution.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                      plan.highlight
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Falar com consultor
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculadora */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <ScenarioSimulator solutionName={solution.title} />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_68%/0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Pronto para transformar {solution.title.split(" & ")[0].toLowerCase()}?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Converse com um consultor youB e descubra o melhor formato de projeto para a sua empresa.
          </p>
          <a
            href={solution.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {solution.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default SolutionPage;

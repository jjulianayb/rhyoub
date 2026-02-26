import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=" + encodeURIComponent("Olá, quero conversar sobre uma jornada de cultura para a minha empresa.");

const whenBullets = [
  "Times cansados, desconectados, com ruídos e desconfianças.",
  "Momentos de mudança intensa (crescimento, fusão, reestruturação).",
  "Empresas que querem fortalecer pertencimento e segurança psicológica.",
  "Situações em que as pessoas sentem que \"algo não está bem\", mas não sabem como falar sobre isso.",
];

const steps = [
  { label: "Escuta e entendimento do contexto", text: "Conversamos com RH, lideranças e, quando faz sentido, com pessoas do time, para compreender o que está acontecendo." },
  { label: "Desenho sob medida", text: "Criamos encontros e experiências que combinam conversa, prática, escuta, corpo, reflexão e construção coletiva." },
  { label: "Cuidado com o depois", text: "Não são só \"eventos\". Sempre perguntamos: o que essa jornada precisa deixar plantado para o dia seguinte?" },
];

const outcomes = [
  "Times que se olham de novo como pessoas, não só como funções.",
  "Mais abertura para falar sobre temas difíceis com respeito.",
  "Sensação de reconexão e pertencimento.",
  "Acordos mais claros sobre como queremos nos relacionar e trabalhar.",
];

const JornadasCultura = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden bg-foreground">
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Jornadas de Cultura</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Jornadas de Cultura, Pertencimento e <span className="text-primary">Times</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-6">
              Encontros e experiências para reconstruir confiança, fortalecer vínculos e alinhar o jeito de caminhar juntos.
            </p>
            <p className="text-white/60 max-w-2xl leading-relaxed mb-8">
              Nossas jornadas convidam pessoas e times a olharem para como estão se relacionando, o que está doendo, o que já é potência e o que precisa ser combinado de um jeito novo. É sobre abrir espaço para conversas que geralmente são evitadas – com cuidado, profundidade e responsabilidade.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20">
              Quero saber mais sobre estas jornadas
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quando faz sentido */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Contexto</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">Quando faz sentido trazer a youB.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {whenBullets.map((item, i) => (
                <div key={i} className="glass-card p-5 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Metodologia</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">Como as jornadas são construídas.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card p-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-4">{i + 1}</div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{step.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* O que muda */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Resultados</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">O que costuma emergir após as jornadas.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {outcomes.map((r, i) => (
                <div key={i} className="glass-card p-5 flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 px-6 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_68%/0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Quer olhar para a sua cultura com mais profundidade?
          </h2>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg">
            Quero conversar sobre uma jornada para a minha empresa
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default JornadasCultura;

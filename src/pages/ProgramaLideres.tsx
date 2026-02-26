import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=" + encodeURIComponent("Olá, quero falar sobre o Programa de Desenvolvimento de Líderes.");

const forWhom = [
  "Têm líderes técnicos que foram promovidos e agora gerem pessoas.",
  "Estão crescendo rápido e precisam alinhar práticas de liderança.",
  "Vivem desafios de comunicação, feedback, conflitos ou clima pesado.",
  "Querem líderes mais responsáveis, disponíveis e maduros nas relações.",
];

const steps = [
  { label: "Diagnóstico e escuta inicial", text: "Entendemos o momento da empresa, da cultura e das lideranças antes de desenhar o programa." },
  { label: "Encontros em jornada", text: "Encontros em grupo, com temas como autoconsciência, responsabilidade, conversas difíceis, feedback, confiança, cuidado com o time, limites, vulnerabilidade e tomada de decisão." },
  { label: "Espaços de prática e reflexão", text: "Convites práticos para o dia a dia, entre os encontros, com retorno e trocas." },
  { label: "Acompanhamento e ajustes", text: "Revisamos junto com RH/diretoria o andamento da jornada, percebendo o que está emergindo e o que precisa de mais cuidado." },
];

const results = [
  "Líderes mais presentes e responsáveis pelas pessoas, e não só pelas entregas.",
  "Times com mais segurança psicológica para falar sobre o que está difícil.",
  "Redução de comportamentos tóxicos e conflitos silenciosos.",
  "Mais coerência entre discurso de cultura e prática no dia a dia.",
];

const ProgramaLideres = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden bg-foreground">
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Programa de Líderes</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Programa de Desenvolvimento de Líderes <span className="text-primary">youB</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mb-6">
              Uma jornada viva e profunda para líderes que cuidam de pessoas, decisões difíceis e resultados.
            </p>
            <p className="text-white/60 max-w-2xl leading-relaxed mb-8">
              Mais do que formar líderes "perfeitos", o programa da youB convida cada liderança a se reconhecer, ganhar consciência, ampliar repertório e assumir, de forma mais madura, o impacto que tem na vida das pessoas e na cultura da empresa.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20">
              Quero falar sobre este programa
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Público-alvo</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4">Para quem é este programa.</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">Indicado para empresas que:</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {forWhom.map((item, i) => (
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
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-10">Como o programa acontece na prática.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Resultados */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Resultados</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-8">O que as empresas costumam perceber.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {results.map((r, i) => (
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
            Esse é o momento de cuidar das suas lideranças.
          </h2>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg">
            Quero falar sobre este programa
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ProgramaLideres;

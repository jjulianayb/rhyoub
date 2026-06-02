import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  BarChart3,
  Users,
  Layers,
  Cpu,
  MessageCircle,
} from "lucide-react";
import { getSegmentBySlug } from "@/data/segments";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const SegmentPage = () => {
  const { slug } = useParams();
  const segment = getSegmentBySlug(slug || "");

  if (!segment) return <Navigate to="/" replace />;

  return (
    <main className="pt-16">
      {/* 1. Capa / Hero */}
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden flex items-end">
        <img
          src={segment.image}
          alt={segment.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative z-10 container mx-auto px-5 md:px-6 pb-16 md:pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-white/70 text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
              Vertical youB
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              you<span className="text-primary">B</span> {segment.shortName}
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl mb-8">{segment.tagline}</p>
            <a
              href={segment.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Agendar conversa estratégica
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. Visão da vertical */}
      <section className="container mx-auto px-5 md:px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-3xl">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Visão da vertical</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Por que existe a {segment.name}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{segment.vision}</p>
        </motion.div>
      </section>

      {/* 3. Principais desafios */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-5 md:px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-10 max-w-2xl">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Principais desafios do segmento</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3">{segment.challengesTitle}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {segment.challenges.map((c, i) => (
              <motion.div
                key={c}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="flex items-start gap-3 glass-card p-4"
              >
                <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Nossa solução */}
      <section className="container mx-auto px-5 md:px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Nossa solução</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Ecossistema {segment.name}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{segment.solutionIntro}</p>
        </motion.div>
      </section>

      {/* 5. Soluções ofertadas */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-5 md:px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-10">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Soluções ofertadas</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3">O que entregamos</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {segment.solutions.map((group, i) => (
              <motion.div key={group.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{group.title}</h3>
                </div>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Tecnologia e governança */}
      <section className="container mx-auto px-5 md:px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Tecnologia e governança</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3">Estrutura tecnológica</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {segment.techGovernance.map((t, i) => (
            <motion.div key={t} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.03 }} className="flex items-center gap-3 glass-card p-4">
              <Cpu className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm md:text-base text-foreground">{t}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Modelos de entrega */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-5 md:px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="mb-10">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Modelos de entrega</span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3">Formatos disponíveis</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {segment.deliveryModels.map((m, i) => (
              <motion.div key={m.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass-card p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 + 10. Indicadores e públicos */}
      <section className="container mx-auto px-5 md:px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-12">
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Indicadores e resultados</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Indicadores acompanhados</h2>
          <div className="flex flex-wrap gap-2">
            {segment.indicators.map((ind) => (
              <span key={ind} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {ind}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div {...fadeUp}>
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Públicos atendidos</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Quem atendemos</h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {segment.audiences.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* 11. LGPD e IA responsável */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-5 md:px-6 py-20 md:py-28">
          <motion.div {...fadeUp} className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">LGPD e IA responsável</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Governança e ética por padrão</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{segment.lgpd}</p>
          </motion.div>
        </div>
      </section>

      {/* 12. Arquitetura operacional */}
      <section className="container mx-auto px-5 md:px-6 py-20 md:py-28">
        <motion.div {...fadeUp} className="mb-10 max-w-2xl">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Arquitetura operacional</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3">Estrutura de implantação</h2>
        </motion.div>
        <div className="space-y-4">
          {segment.architecture.map((step, i) => (
            <motion.div key={step.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-start gap-4 glass-card p-5 md:p-6">
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-foreground">{step.label}</h3>
                <p className="text-sm md:text-base text-muted-foreground mt-1">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 13. Posicionamento final + CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-5 md:px-6 py-20 md:py-28 text-center">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Posicionamento</span>
            <p className="text-xl md:text-3xl font-semibold mt-4 mb-10 leading-snug">{segment.positioning}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={segment.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-primary/90"
              >
                <MessageCircle className="w-4 h-4" />
                Falar com a youB
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border-2 border-background/40 text-background px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-background/10"
              >
                Ver outras verticais
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SegmentPage;

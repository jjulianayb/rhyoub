import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import campusImage from "@/assets/campus-youb.jpg";

const About = () => {
  return (
    <main>
      {/* Mini Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden bg-foreground">
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Sobre</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Conheça a <span className="text-primary">youB</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Ecossistema de Desenvolvimento Humano e Organizacional que integra tecnologia, dados e metodologias autorais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">História</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6">
                Transformando organizações desde 2016
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A youB é um ecossistema completo de Desenvolvimento Humano e Organizacional, que integra tecnologia, dados estratégicos e metodologias de mercado com práticas humanizadas.
                </p>
                <p>
                  Desde 2016, construímos um histórico de impacto em diferentes segmentos e players nacionais, sempre respeitando a cultura e a singularidade de cada negócio.
                </p>
                <p>
                  Atuamos de forma integrada em três frentes — <strong className="text-foreground">Educação Executiva</strong>, <strong className="text-foreground">Consultoria Estratégica</strong> e <strong className="text-foreground">Tecnologia & IA</strong> — para ampliar o impacto e promover o desenvolvimento de pessoas, organizações e resultados.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={campusImage} alt="Campus youB" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section-padding bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Nossos números</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "11.000+", label: "Profissionais impactados" },
              { value: "8+", label: "Anos de atuação" },
              { value: "50+", label: "Empresas atendidas" },
              { value: "5", label: "Soluções integradas" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Propósito</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">O que nos move</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Impacto real", text: "Não entregamos conteúdo genérico. Criamos ecossistemas de aprendizagem que transformam comportamentos e resultados mensuráveis." },
              { title: "Singularidade", text: "Cada empresa tem sua cultura, desafios e momento. Nossas soluções são desenhadas sob medida para cada contexto." },
              { title: "Integração", text: "Educação, consultoria e tecnologia caminham juntas. O resultado é um ecossistema que funciona de verdade." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-7"
              >
                <h3 className="font-bold text-foreground mb-3 text-lg">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

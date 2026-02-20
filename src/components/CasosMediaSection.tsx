import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Testimonials from "./Testimonials";

const clients = Array.from({ length: 8 }, (_, i) => `Logo Cliente ${i + 1}`);

const articles = [
  {
    source: "Valor Business",
    title: "Sustentabilidade organizacional além do discurso",
    link: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
  },
  {
    source: "Ego Brazil",
    title: "Até 2026, IA substituirá 85 milhões de empregos",
    link: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
  },
  {
    source: "Frisson Online",
    title: "IA, carreira e salário emocional no mercado",
    link: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
  },
  {
    source: "Brasil Agora",
    title: "Nova era da liderança com academias autorais",
    link: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
  },
];

const CasosMediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="casos-midia" ref={ref} className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Portal youB
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Casos & Mídia
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Empresas confiam na youB e nossa atuação é referência em veículos de negócios.
          </p>
        </motion.div>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-16">
          {clients.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center justify-center h-16 rounded-xl border border-border bg-card text-muted-foreground text-xs font-medium"
            >
              {name}
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* Media articles – blog style like FDC */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-foreground">Na mídia</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((article, i) => (
              <motion.a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="group rounded-xl border border-border bg-card p-5 hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-3">
                  {article.source}
                </p>
                <h4 className="text-sm font-bold text-foreground leading-snug flex-1 mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  Ler matéria <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasosMediaSection;

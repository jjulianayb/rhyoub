import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Testimonials from "./Testimonials";

const articles = [
  {
    source: "Valor Business",
    category: "Gestão",
    readTime: "4min de leitura",
    title: "Sustentabilidade organizacional além do discurso",
    description: "Como a liderança pode garantir perenidade e resultados com práticas de desenvolvimento sustentável.",
    link: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
    featured: true,
  },
  {
    source: "Ego Brazil",
    category: "Carreira",
    readTime: "3min de leitura",
    title: "Até 2026, IA substituirá 85 milhões de empregos",
    description: "O impacto da inteligência artificial no mercado de trabalho e como se preparar para essa transformação.",
    link: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
    featured: false,
  },
  {
    source: "Frisson Online",
    category: "Carreira",
    readTime: "5min de leitura",
    title: "IA, carreira e salário emocional no mercado",
    description: "Novas exigências do mercado incluem plano de carreira estruturado e salário emocional como diferencial.",
    link: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
    featured: false,
  },
  {
    source: "Brasil Agora",
    category: "Liderança",
    readTime: "4min de leitura",
    title: "Nova era da liderança com academias autorais",
    description: "Grandes empresas estão substituindo treinamentos genéricos por academias autorais como as da youB.",
    link: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
    featured: false,
  },
];

const CasosMediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Seja Relevante
          </h2>
        </motion.div>

        {/* FDC-style blog grid: 1 featured + 3 side cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Featured article */}
          {featured && (
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="group glass-card overflow-hidden flex flex-col hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/20">youB</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">{featured.category}</span>
                  <span className="text-[11px] text-muted-foreground">{featured.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors mt-4">
                  Ler matéria <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          )}

          {/* Side articles */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <motion.a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="group glass-card p-5 flex gap-5 items-start hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-24 h-20 rounded-lg bg-gradient-to-br from-primary/15 to-accent/10 shrink-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary/30">youB</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">{article.category}</span>
                    <span className="text-[11px] text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />
      </div>
    </section>
  );
};

export default CasosMediaSection;

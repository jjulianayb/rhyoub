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
    image: "https://valorbusiness.com.br/wp-content/uploads/2025/04/youb-sustentabilidade-1024x576.jpg",
    featured: true,
  },
  {
    source: "Ego Brazil",
    category: "Carreira",
    readTime: "3min de leitura",
    title: "Até 2026, IA substituirá 85 milhões de empregos",
    description: "O impacto da inteligência artificial no mercado de trabalho e como se preparar para essa transformação.",
    link: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
    image: "https://egobrazil.ig.com.br/wp-content/uploads/2025/05/ia-empregos.jpg",
    featured: false,
  },
  {
    source: "Frisson Online",
    category: "Carreira",
    readTime: "5min de leitura",
    title: "IA, carreira e salário emocional no mercado",
    description: "Novas exigências do mercado incluem plano de carreira estruturado e salário emocional como diferencial.",
    link: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
    image: "https://www.frissononline.com.br/img/noticias/164892/ia-plano-carreira_m1.jpg",
    featured: false,
  },
  {
    source: "Brasil Agora",
    category: "Liderança",
    readTime: "4min de leitura",
    title: "Nova era da liderança com academias autorais",
    description: "Grandes empresas estão substituindo treinamentos genéricos por academias autorais como as da youB.",
    link: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
    image: "https://brasilagoraonline.com.br/wp-content/uploads/2025/05/youb-academias.jpg",
    featured: false,
  },
];

const CasosMediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <section id="casos-midia" ref={ref} className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-primary">Be</span>{" "}
            <span className="text-foreground">Move</span>
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-10" />

        {/* FDC-style portal grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Featured article */}
          {featured && (
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="group lg:col-span-3 flex flex-col"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-secondary">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary uppercase tracking-wider">
                  {featured.source}
                </span>
                <span className="text-[11px] text-muted-foreground">{featured.category}</span>
                <span className="text-[11px] text-muted-foreground">{featured.readTime}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {featured.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                Ler matéria <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          )}

          {/* Side articles */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {rest.map((article, i) => (
              <motion.a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="group flex gap-4 pb-6 border-b border-border last:border-b-0 last:pb-0"
              >
                {/* Thumbnail */}
                <div className="w-28 h-20 rounded-lg overflow-hidden shrink-0 bg-secondary">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider">
                      {article.source}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
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

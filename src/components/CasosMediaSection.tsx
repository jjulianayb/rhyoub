import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import Testimonials from "./Testimonials";

import logoIg from "@/assets/logos/ig-egobrazil.png";
import logoBrasilAgora from "@/assets/logos/brasil-agora.png";
import imgValor from "@/assets/media/valor-sustentabilidade.jpg";
import imgEgo from "@/assets/media/ego-ia-empregos.jpg";
import imgFrisson from "@/assets/media/frisson-carreira.jpg";
import imgBrasilAgora from "@/assets/media/brasil-agora-lideranca.jpg";

const articles = [
  {
    source: "Valor Econômico",
    logo: "valor" as string | null,
    category: "Gestão",
    readTime: "4min de leitura",
    title: "Sustentabilidade organizacional além do discurso",
    description: "Como a liderança pode garantir perenidade e resultados com práticas de desenvolvimento sustentável.",
    link: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
    image: imgValor,
    featured: true,
  },
  {
    source: "iG",
    logo: logoIg,
    category: "Carreira",
    readTime: "3min de leitura",
    title: "Até 2026, IA substituirá 85 milhões de empregos",
    description: "O impacto da inteligência artificial no mercado de trabalho e como se preparar para essa transformação.",
    link: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
    image: imgEgo,
    featured: false,
  },
  {
    source: "Frisson Online",
    logo: null as string | null,
    category: "Carreira",
    readTime: "5min de leitura",
    title: "IA, carreira e salário emocional no mercado",
    description: "Novas exigências do mercado incluem plano de carreira estruturado e salário emocional como diferencial.",
    link: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
    image: imgFrisson,
    featured: false,
  },
  {
    source: "Brasil Agora",
    logo: logoBrasilAgora,
    category: "Liderança",
    readTime: "4min de leitura",
    title: "Nova era da liderança com academias autorais",
    description: "Grandes empresas estão substituindo treinamentos genéricos por academias autorais como as da youB.",
    link: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
    image: imgBrasilAgora,
    featured: false,
  },
];

const SourceLogo = ({ article }: { article: (typeof articles)[0] }) => {
  if (article.logo === "valor") {
    return (
      <span className="text-xs font-extrabold tracking-tight" style={{ color: "#006B3F" }}>
        Valor Econômico
      </span>
    );
  }
  if (article.logo) {
    return (
      <img
        src={article.logo}
        alt={article.source}
        className="h-5 max-w-[100px] object-contain"
      />
    );
  }
  return (
    <span className="text-xs font-bold text-foreground tracking-tight">
      {article.source}
    </span>
  );
};

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
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <SourceLogo article={featured} />
                <span className="w-px h-4 bg-border" />
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
                className="group flex flex-col pb-6 border-b border-border last:border-b-0 last:pb-0"
              >
                {/* Thumbnail */}
                <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-secondary">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <SourceLogo article={article} />
                  <span className="w-px h-3.5 bg-border" />
                  <span className="text-[10px] text-muted-foreground">{article.readTime}</span>
                </div>
                <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
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

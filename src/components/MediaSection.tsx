import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const articles = [
  {
    source: "Valor Business",
    title: "Sustentabilidade organizacional além do discurso",
    subtitle: "Como a liderança pode garantir perenidade e resultados.",
    link: "https://valorbusiness.com.br/sustentabilidade-organizacional-alem-do-discurso-como-a-lideranca-pode-garantir-perenidade-e-resultados/",
  },
  {
    source: "Ego Brazil",
    title: "Até 2026, a inteligência artificial deve substituir 85 milhões de empregos",
    subtitle: "O papel das lideranças em um cenário de transformação radical.",
    link: "https://egobrazil.ig.com.br/ate-2026-a-inteligencia-artificial-deve-substituir-85-milhoes-de-empregos-no-mundo/",
  },
  {
    source: "Frisson Online",
    title: "IA, plano de carreira e salário emocional",
    subtitle: "Novas exigências do mercado e o papel da gestão de pessoas.",
    link: "https://www.frissononline.com.br/noticias/164892/ia-plano-de-carreira-e-salario-emocional-sao-novas-exigencias-do-mercado",
  },
  {
    source: "Brasil Agora",
    title: "A nova era da liderança",
    subtitle: "Por que grandes empresas estão substituindo treinamentos genéricos por academias autorais como as da youB.",
    link: "https://brasilagoraonline.com.br/noticias/2025/05/a-nova-era-da-lideranca-por-que-grandes-empresas-estao-substituindo-treinamentos-genericos-por-academias-autorais-como-as-da-youb/",
  },
];

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Imprensa
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Na mídia
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossas reflexões sobre liderança, IA, DHO e futuro do trabalho têm aparecido em diferentes veículos de negócios e notícias, reforçando nossa atuação como referência em desenvolvimento humano estratégico.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {articles.map((article, i) => (
            <motion.a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 flex flex-col group"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
                {article.source}
              </p>
              <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {article.subtitle}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                Ler matéria
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { segments } from "@/data/segments";

const SegmentsGrid = () => {
  return (
    <section id="verticais" className="bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-5 md:px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Verticais youB</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Um ecossistema, soluções por segmento
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Cada vertical adapta metodologia, tecnologia e IA à realidade do seu setor.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {segments.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/${s.slug}`}
                className="group block rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-xl md:text-2xl font-bold text-white">
                    you<span className="text-primary">B</span> {s.shortName}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-sm md:text-base text-muted-foreground mb-4">{s.tagline}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Conhecer vertical <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsGrid;

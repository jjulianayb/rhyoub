import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { solutions } from "@/data/solutions";

const ChooseYourPain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const navigate = useNavigate();

  return (
    <section id="escolha-dor" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Educação</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Conheça nossas soluções
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Geração de valor no ecossistema de negócios. A youB desenvolve soluções educacionais para os desafios que você e sua empresa se deparam, com metodologia única.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => navigate(`/${sol.slug}`)}
              className="group text-left rounded-3xl overflow-hidden w-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.3)] relative shadow-lg h-[420px] sm:h-[480px]"
              role="button"
              tabIndex={0}
            >
              {/* Full image background */}
              <img
                src={sol.image}
                alt={sol.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Purple gradient overlay at bottom */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary)/0.4)] to-transparent opacity-70"
                style={{ top: "40%" }}
              />

              {/* Tags at top */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                {sol.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-xl font-bold text-white leading-snug drop-shadow-lg">
                  {sol.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseYourPain;

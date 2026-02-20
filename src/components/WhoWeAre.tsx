import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import campusImage from "@/assets/campus-youb.jpg";

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              História
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Conheça a <span className="text-primary">youB</span>
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
            <div className="mt-8 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">11.000+</p>
                <p className="text-xs text-muted-foreground mt-1">profissionais impactados</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-xs text-muted-foreground mt-1">anos de atuação</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground mt-1">empresas atendidas</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={campusImage}
                alt="Campus youB"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

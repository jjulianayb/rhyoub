import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_YOUB, ABOUT_PILLARS } from "@/data/segments";

const AboutYoubSection = () => {
  return (
    <section id="quem-somos" className="container mx-auto px-5 md:px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Quem somos</span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight">
            Sobre a youB
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{ABOUT_YOUB}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 md:p-8"
        >
          <p className="text-sm font-semibold text-foreground mb-4">Atuamos unindo:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {ABOUT_PILLARS.map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutYoubSection;

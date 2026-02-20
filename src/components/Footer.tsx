import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="border-t border-border">
      {/* CTA Banner */}
      <div className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-balance">
            O próximo passo para blindar o{" "}
            <span className="glow-text">futuro do seu negócio.</span>
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.6)]"
          >
            Agendar Sessão Estratégica
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="border-t border-border py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground text-lg">
            you<span className="text-primary">B</span>.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-center">
            <span>WhatsApp: (21) 99141-7327</span>
            <span>Instagram: @youbusiness</span>
            <a
              href="https://linktr.ee/youbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              linktr.ee/youbusiness
            </a>
          </div>
          <p className="text-muted-foreground/60">© youB 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contato" ref={ref} className="border-t border-border">
      {/* Anchor quote */}
      <div className="section-padding pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-xl md:text-2xl italic text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          "O maior ativo de uma organização é a sua capacidade de aprender mais rápido do que a concorrência."
        </motion.p>
      </div>

      {/* CTA Banner */}
      <div className="py-16 px-6 relative overflow-hidden bg-secondary/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-balance text-foreground">
            O próximo passo para blindar o{" "}
            <span className="glow-text">futuro do seu negócio.</span>
          </h2>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Agendar Sessão Estratégica
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="border-t border-border py-10 px-6">
        <div className="container mx-auto flex flex-col items-center gap-6 text-sm text-muted-foreground text-center">
          <p className="font-semibold text-foreground text-lg">
            you<span className="text-primary">B</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Site: <a href="https://www.rhyoub.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.rhyoub.com.br</a></span>
            <span>E-mail: contato@rhyoub.com.br</span>
            <span>WhatsApp: (21) 99141-7327</span>
            <span>Instagram: @youbusiness</span>
          </div>
          <p className="text-muted-foreground/70 text-xs">
            Veja mais sobre a youB na mídia: <span className="font-medium">Brasil Agora</span> | <span className="font-medium">Valor Business</span> | <span className="font-medium">Ego Brasil</span>
          </p>
          <p className="text-muted-foreground/60 text-xs">© youB 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

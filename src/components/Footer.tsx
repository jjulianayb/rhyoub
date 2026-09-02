import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer id="contato" ref={ref} className="border-t border-border">
      {/* CTA Banner */}
      <div className="py-20 px-6 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(262_83%_68%/0.3)_0%,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="container mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-primary-foreground">
            O próximo passo para blindar o futuro do seu negócio.
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Agende uma sessão estratégica com nossos consultores e descubra como a youB pode transformar sua organização.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg text-sm font-semibold transition-all hover:bg-white/90 hover:shadow-lg"
          >
            Agendar Sessão Estratégica
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="py-10 px-6 bg-foreground">
        <div className="container mx-auto flex flex-col items-center gap-6 text-sm text-center">
          <p className="font-bold text-background text-lg">
            you<span className="text-primary">B</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-background/60">
            <span>Site: <a href="https://rhyoub.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">rhyoub.com.br</a></span>
            <span>E-mail: <a href="mailto:contato@rhyoub.com.br" className="hover:text-primary transition-colors">contato@rhyoub.com.br</a></span>
            <span>WhatsApp: (21) 99141-7327</span>
            <span>Instagram: <a href="https://instagram.com/youbusiness" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@youbusiness</a></span>
          </div>
          <p className="text-background/40 text-xs">
            Veja mais sobre a youB na mídia: <span className="font-medium">Brasil Agora</span> | <span className="font-medium">Valor Business</span> | <span className="font-medium">Ego Brasil</span>
          </p>
          <p className="text-background/30 text-xs">© youB 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

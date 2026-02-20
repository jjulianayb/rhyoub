import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const navLinks = [
  { label: "Institucional", target: "quem-somos" },
  { label: "Soluções", target: "escolha-dor" },
  { label: "Casos & Mídia", target: "casos-midia" },
  { label: "Contato", target: "contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className={`transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"} bg-primary/5 border-b border-border/30`}>
        <div className="container mx-auto flex items-center justify-end h-full px-6 gap-6">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            (21) 99141-7327
          </a>
          <span className="text-xs text-muted-foreground">contato@rhyoub.com.br</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => scrollTo("top")} className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            you<span className="text-primary">B</span><span className="text-primary">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
          >
            Fale Conosco
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border/50 bg-background/98 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50"
                >
                  {link.label}
                </button>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="sm:hidden mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold">
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

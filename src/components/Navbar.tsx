import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const solutionLinks = [
  { label: "Academias & Liderança", target: "academias" },
  { label: "Consultoria & DHO", target: "consultoria" },
  { label: "Arquitetura de Carreira", target: "carreira" },
  { label: "Sucessão Estratégica", target: "sucessao" },
  { label: "Plataforma & IA Mentora", target: "plataforma" },
];

const mainLinks = [
  { label: "Home", target: "top" },
  { label: "Sobre Nós", target: "quem-somos" },
  { label: "Contato", target: "contato" },
];

const allSections = ["top", "diagnostico", "solucoes", "quem-somos", "academias", "consultoria", "carreira", "sucessao", "plataforma", "contato"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    setDropdownOpen(false);
    setTimeout(() => {
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const isSolutionActive = solutionLinks.some((s) => activeSection === s.target);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => scrollTo("top")} className="text-2xl font-bold tracking-tight text-foreground">
          you<span className="text-primary">B</span><span className="text-primary">.</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {mainLinks.slice(0, 1).map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className={`text-sm font-medium transition-colors ${activeSection === link.target ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              {link.label}
            </button>
          ))}

          {/* Soluções dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`text-sm font-medium transition-colors flex items-center gap-1 ${isSolutionActive || activeSection === "solucoes" ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              Soluções
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-border bg-card shadow-xl py-2"
                >
                  {solutionLinks.map((s) => (
                    <button
                      key={s.target}
                      onClick={() => scrollTo(s.target)}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${activeSection === s.target ? "text-primary bg-primary/5 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
                    >
                      {s.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mainLinks.slice(1).map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className={`text-sm font-medium transition-colors ${activeSection === link.target ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
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
            className="hidden sm:inline-flex group items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Agendar Sessão
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              <button onClick={() => scrollTo("top")} className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50">Home</button>
              <p className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest text-primary">Soluções</p>
              {solutionLinks.map((s) => (
                <button key={s.target} onClick={() => scrollTo(s.target)} className={`text-left py-2.5 px-6 rounded-lg text-sm font-medium transition-colors ${activeSection === s.target ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-primary hover:bg-secondary/50"}`}>
                  {s.label}
                </button>
              ))}
              <button onClick={() => scrollTo("quem-somos")} className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50">Sobre Nós</button>
              <button onClick={() => scrollTo("contato")} className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50">Contato</button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="sm:hidden mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold">
                Agendar Sessão <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

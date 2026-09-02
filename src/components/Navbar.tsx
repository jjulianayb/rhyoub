import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { segments } from "@/data/segments";
import { solutions } from "@/data/solutions";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;

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
          <a href="mailto:contato@rhyoub.com.br" className="text-xs text-muted-foreground hover:text-primary transition-colors">contato@rhyoub.com.br</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-foreground">
            you<span className="text-primary">B</span><span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            Início
          </Link>

          {/* Soluções dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname.match(/^\/youb-/)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Verticais
              <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {segments.map((seg) => (
                    <Link
                      key={seg.slug}
                      to={`/${seg.slug}`}
                      className={`flex items-start gap-3 px-4 py-3 text-sm transition-colors hover:bg-primary/5 ${
                        isActive(`/${seg.slug}`) ? "bg-primary/5 text-primary" : "text-foreground"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 mt-0.5">
                        <img src={seg.image} alt={seg.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium leading-tight">{seg.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{seg.shortName}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions dropdown */}
          <div ref={solutionsRef} className="relative">
            <button
              onClick={() => { setSolutionsOpen(!solutionsOpen); setDropdownOpen(false); }}
              aria-expanded={solutionsOpen}
              aria-haspopup="menu"
              className={`inline-flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname.match(/^\/(academias|consultoria|carreira|sucessao|plataforma)/)
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              Soluções
              <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-80 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {solutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      to={`/${solution.slug}`}
                      className={`flex items-start gap-3 px-4 py-3 text-sm transition-colors hover:bg-primary/5 ${
                        isActive(`/${solution.slug}`) ? "bg-primary/5 text-primary" : "text-foreground"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 mt-0.5">
                        <img src={solution.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium leading-tight">{solution.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{solution.subtitle}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/sobre"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/sobre") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isActive("/contato") ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
            }`}
          >
            Contato
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
          >
            Agendar Conversa
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
              <Link to="/" className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50">
                Início
              </Link>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider px-3 pt-3 pb-1">Verticais</p>
              {segments.map((seg) => (
                <Link
                  key={seg.slug}
                  to={`/${seg.slug}`}
                  className="text-left py-2.5 px-5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50"
                >
                  {seg.name}
                </Link>
              ))}
              <p className="text-xs font-semibold text-primary uppercase tracking-wider px-3 pt-4 pb-1">Soluções</p>
              {solutions.map((solution) => (
                <Link
                  key={solution.slug}
                  to={`/${solution.slug}`}
                  className="text-left py-2.5 px-5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50"
                >
                  {solution.title}
                </Link>
              ))}
              <Link to="/sobre" className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50">
                Sobre
              </Link>
              <Link to="/contato" className="text-left py-3 px-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50">
                Contato
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="sm:hidden mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold">
                Agendar Conversa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

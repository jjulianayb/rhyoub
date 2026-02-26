import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Phone, Mail, MapPin, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Contact = () => {
  return (
    <main>
      {/* Mini Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden bg-foreground">
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Contato</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Fale com a <span className="text-primary">youB</span>.
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
              Se algum dos caminhos da youB fez sentido para você – ou se você ainda não sabe por onde começar, mas sente que é hora de olhar para suas pessoas, cultura e lideranças – escreva pra gente.
            </p>
            <p className="text-white/50 max-w-2xl mt-4 leading-relaxed">
              Vamos escutar sua história, seu contexto e, a partir daí, desenhar juntos os próximos passos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl font-bold text-foreground mb-8">Nossos canais</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "WhatsApp", value: "(21) 99141-7327", href: WHATSAPP_LINK },
                  { icon: Mail, label: "E-mail", value: "contato@rhyoub.com.br", href: "mailto:contato@rhyoub.com.br" },
                  { icon: Instagram, label: "Instagram", value: "@youbusiness", href: "https://instagram.com/youbusiness" },
                  { icon: MapPin, label: "Site", value: "www.rhyoub.com.br", href: "https://www.rhyoub.com.br" },
                ].map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <ch.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{ch.label}</p>
                      <p className="text-foreground font-semibold">{ch.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA card */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="glass-card p-8 md:p-10 h-full flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Enviar <span className="text-primary">mensagem</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Conte um pouco sobre o momento da sua empresa. Vamos escutar e desenhar juntos os próximos passos.
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Enviar mensagem
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=" + encodeURIComponent("Olá, gostaria de conversar com um consultor youB.");

const CtaConsultor = () => {
  return (
    <section className="bg-primary py-20 px-6 md:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Pronto para transformar sua organização?
        </h2>
        <p className="text-primary-foreground/80 mb-8 leading-relaxed">
          Agende uma conversa estratégica com nossos consultores e descubra qual solução se encaixa no momento da sua empresa.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:scale-105"
        >
          Converse com um consultor
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};

export default CtaConsultor;

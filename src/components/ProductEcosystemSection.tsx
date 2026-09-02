import { ArrowRight, ClipboardCheck, GitBranch, MessageSquareText, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: UsersRound,
    title: "Pessoas e estrutura",
    text: "Organize colaboradores, áreas, posições e relações de gestão em uma visão consistente da organização.",
  },
  {
    icon: ClipboardCheck,
    title: "Ciclos de desenvolvimento",
    text: "Transforme iniciativas de desenvolvimento em ciclos acompanháveis, com contexto e próximos passos.",
  },
  {
    icon: MessageSquareText,
    title: "Feedbacks, check-ins e PDI",
    text: "Dê continuidade às conversas e registre ações de desenvolvimento em vez de depender de planilhas soltas.",
  },
  {
    icon: GitBranch,
    title: "Visões por perfil",
    text: "Cada pessoa acessa o contexto necessário para sua atuação, com organização, papel e população autorizada.",
  },
];

const ProductEcosystemSection = () => (
  <section className="section-padding" aria-labelledby="ecossistema-produto">
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">O ecossistema youB</p>
          <h2 id="ecossistema-produto" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Método e tecnologia para acompanhar o desenvolvimento de pessoas.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Uma base integrada para RH, lideranças e colaboradores organizarem informações, conversas e ações de desenvolvimento
            com mais clareza e continuidade.
          </p>
        </div>
        <Link
          to="/plataforma"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all shrink-0"
        >
          Conhecer a plataforma <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {capabilities.map(({ icon: Icon, title, text }) => (
          <article key={title} className="group glass-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProductEcosystemSection;

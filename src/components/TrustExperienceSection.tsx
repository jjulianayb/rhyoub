import { Award, BarChart3, BriefcaseBusiness, ShieldCheck } from "lucide-react";

const proof = [
  {
    icon: BriefcaseBusiness,
    title: "Experiência de mercado",
    text: "A youB atua desde 2016 com desenvolvimento humano, liderança, cultura e inteligência organizacional.",
  },
  {
    icon: BarChart3,
    title: "Decisões com mais clareza",
    text: "Método e dados para transformar percepções sobre pessoas em prioridades e próximos passos.",
  },
  {
    icon: Award,
    title: "Conhecimento aplicado",
    text: "A plataforma traduz a experiência de profissionais que conhecem os desafios reais das organizações.",
  },
  {
    icon: ShieldCheck,
    title: "Governança responsável",
    text: "Desenvolvimento, tecnologia e inteligência artificial com cuidado, rastreabilidade e supervisão humana.",
  },
];

const metrics = [
  ["11.000+", "profissionais impactados"],
  ["50+", "empresas atendidas"],
  ["5", "soluções integradas"],
  ["2016", "início da atuação da youB"],
];

const TrustExperienceSection = () => (
  <section className="section-padding bg-secondary/20" aria-labelledby="credibilidade-youb">
    <div className="container mx-auto max-w-6xl">
      <div className="max-w-3xl mb-10">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Credibilidade youB</p>
        <h2 id="credibilidade-youb" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-5">
          Experiência de mercado por trás de cada decisão da plataforma.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          A Plataforma youB faz parte de um ecossistema criado por profissionais que atuam na prática com pessoas, liderança,
          cultura e estratégia — combinando método, tecnologia e inteligência para apoiar organizações de diferentes contextos.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {proof.map(({ icon: Icon, title, text }) => (
          <article key={title} className="glass-card p-6">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-border pt-8">
        {metrics.map(([value, label]) => (
          <div key={label} className="text-center md:text-left">
            <p className="text-2xl md:text-3xl font-bold text-primary">{value}</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustExperienceSection;

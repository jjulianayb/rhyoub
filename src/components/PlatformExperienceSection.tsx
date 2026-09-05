import { useState } from "react";
import { BarChart3, ClipboardList, MessageCircle, UsersRound } from "lucide-react";

const experiences = [
  {
    id: "rh",
    label: "RH / DHO",
    icon: UsersRound,
    title: "Uma visão organizada das pessoas e das prioridades.",
    text: "Estruture colaboradores, áreas, posições e ciclos de desenvolvimento em um contexto único para a organização.",
    bullets: ["Pessoas e estrutura organizacional", "Ciclos e avaliações", "Acompanhamento de desenvolvimento"],
  },
  {
    id: "gestao",
    label: "Gestão",
    icon: MessageCircle,
    title: "Conversas de desenvolvimento que continuam depois da reunião.",
    text: "Gestores acompanham sua população autorizada e registram check-ins, feedbacks e próximos passos com mais consistência.",
    bullets: ["População por subordinados diretos", "Check-ins e feedbacks", "PDIs e próximos passos"],
  },
  {
    id: "colaborador",
    label: "Colaborador",
    icon: ClipboardList,
    title: "Mais clareza sobre o próprio desenvolvimento.",
    text: "Cada colaborador encontra o contexto permitido para sua experiência e pode acompanhar suas informações de desenvolvimento.",
    bullets: ["Contexto pessoal", "Leitura do próprio check-in", "Acompanhamento individual"],
  },
  {
    id: "diretoria",
    label: "Diretoria",
    icon: BarChart3,
    title: "Uma leitura organizacional com responsabilidade.",
    text: "A liderança executiva acessa a visão autorizada da organização sem transformar posição hierárquica em acesso irrestrito a dados sensíveis.",
    bullets: ["Visão organizacional autorizada", "Decisões com contexto", "Governança por perfil"],
  },
];

const PlatformExperienceSection = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((item) => item.id === activeId) ?? experiences[0];
  const ActiveIcon = active.icon;

  return (
    <section className="section-padding bg-secondary/20" aria-labelledby="experiencia-plataforma">
      <div className="container mx-auto max-w-5xl">
        <div className="max-w-3xl mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Uma experiência para cada papel</p>
          <h2 id="experiencia-plataforma" className="text-2xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            A mesma organização. A visão certa para cada pessoa.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            O ecossistema youB respeita o papel de cada usuário e organiza a experiência a partir do contexto que ele precisa para agir.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Experiências por perfil">
          {experiences.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeId === id}
              onClick={() => setActiveId(id)}
              className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                activeId === id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="glass-card p-7 md:p-9 grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
          <div className="rounded-2xl bg-primary/10 p-8 min-h-[220px] flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-5">
              <ActiveIcon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Experiência {active.label}</p>
            <p className="text-xs text-muted-foreground mt-2">Contexto, papel e próximos passos</p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{active.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-5">{active.text}</p>
            <ul className="space-y-3">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformExperienceSection;

import { FormEvent, useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5521991417327";

type Interest = "Plataforma" | "Consultoria" | "Liderança" | "Sucessão" | "Educação corporativa";

const LeadCaptureSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", interest: "Plataforma" as Interest, newsletter: false });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string | boolean) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Olá, conheci a youB pelo site e gostaria de agendar uma demonstração.",
      "",
      `Nome: ${form.name.trim()}`,
      `E-mail corporativo: ${form.email.trim()}`,
      `Empresa: ${form.company.trim()}`,
      `Cargo: ${form.role.trim()}`,
      `Interesse: ${form.interest}`,
      form.newsletter ? "Também quero receber conteúdos e novidades da youB." : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section className="section-padding bg-foreground text-white" aria-labelledby="lead-capture-title">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-widest mb-3">Próximo passo</p>
            <h2 id="lead-capture-title" className="text-2xl md:text-4xl font-bold leading-tight mb-5">
              Veja como a youB pode funcionar na sua organização.
            </h2>
            <p className="text-white/70 leading-relaxed mb-7">
              Conte rapidamente sobre o seu contexto. A equipe youB apresenta o ecossistema e indica o formato mais adequado para a sua realidade.
            </p>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-start gap-3"><MessageCircle className="w-5 h-5 text-primary-foreground shrink-0" aria-hidden="true" /><span>Receba uma conversa orientada ao seu desafio, sem apresentação genérica.</span></div>
              <div className="flex items-start gap-3"><Mail className="w-5 h-5 text-primary-foreground shrink-0" aria-hidden="true" /><span>Se desejar, indique que quer receber conteúdos e novidades da youB.</span></div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 md:p-8 text-foreground shadow-2xl">
            {submitted ? (
              <div className="py-8 text-center" role="status">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                  <MessageCircle className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp preparado</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Abrimos o WhatsApp com as suas informações preenchidas. Envie a mensagem para concluir o contato com a equipe youB.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="text-sm font-semibold text-primary hover:underline">
                  Enviar outro pedido
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Agendar demonstração</h3>
                  <p className="text-sm text-muted-foreground">Usaremos estas informações apenas para entender o seu contexto.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium">Nome<input required value={form.name} onChange={(event) => update("name", event.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Seu nome" /></label>
                  <label className="text-sm font-medium">E-mail corporativo<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="voce@empresa.com.br" /></label>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="text-sm font-medium">Empresa<input required value={form.company} onChange={(event) => update("company", event.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Nome da empresa" /></label>
                  <label className="text-sm font-medium">Cargo<input required value={form.role} onChange={(event) => update("role", event.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" placeholder="Seu cargo" /></label>
                </div>
                <label className="block text-sm font-medium">Tenho interesse em
                  <select value={form.interest} onChange={(event) => update("interest", event.target.value)} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm">
                    <option>Plataforma</option><option>Consultoria</option><option>Liderança</option><option>Sucessão</option><option>Educação corporativa</option>
                  </select>
                </label>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" checked={form.newsletter} onChange={(event) => update("newsletter", event.target.checked)} className="mt-1 accent-[hsl(var(--primary))]" />
                  <span>Quero receber conteúdos e novidades da youB. Posso cancelar quando quiser.</span>
                </label>
                <p className="text-xs text-muted-foreground">Ao continuar, você autoriza o uso dessas informações para este contato, conforme a política de privacidade da youB.</p>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all">
                  Solicitar demonstração <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;

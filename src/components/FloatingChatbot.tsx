import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

type ChatStep = "name" | "challenge" | "profile" | "leaders" | "critical" | "location" | "summary" | "closing";

interface Message {
  from: "bot" | "user";
  text: string;
}

const challenges = [
  "Não estou retendo talentos",
  "Não tenho líderes preparados",
  "Falta processo estruturado de DHO",
  "Treinamentos pontuais que não geram resultado",
];

const challengeResponses: Record<string, string> = {
  "Não estou retendo talentos":
    "Essa é uma das dores mais caras para qualquer empresa. Quando não há uma estratégia clara de DHO, carreira e sucessão, os melhores profissionais acabam saindo – e o prejuízo não é só financeiro, é também de conhecimento e continuidade.",
  "Não tenho líderes preparados":
    "Você não está só. A maioria das empresas cresce em operação, mas não em liderança. Sem líderes preparados, a estratégia trava na execução, as equipes se sobrecarregam e os resultados ficam aquém do potencial.",
  "Falta processo estruturado de DHO":
    "Quando o DHO está apenas apagando incêndio, fica quase impossível pensar em desenvolvimento, sucessão e cultura. A empresa perde potência mesmo com bons profissionais e boa intenção.",
  "Treinamentos pontuais que não geram resultado":
    "Isso é muito comum. Treinamentos soltos, sem conexão com estratégia, cultura e dados, viram eventos pontuais. Bonitos, mas pouco transformadores. É por isso que trabalhamos com ecossistemas e jornadas, não com 'caixinhas de curso'.",
};

const profiles = [
  "RH / DHO / Gente & Gestão",
  "Diretor(a) / Sócio(a) / C-Level",
  "Gestor(a) de área",
  "Empreendedor(a) / Dono(a) de negócio",
  "Consultor(a) interno(a) / Business Partner",
];

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("name");
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Olá! 👋 Sou o assistente virtual da youB.\n\nPra começar, como você se chama?" },
  ]);

  // Collected data
  const [userName, setUserName] = useState("");
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [numLeaders, setNumLeaders] = useState("");
  const [numCritical, setNumCritical] = useState("");
  const [location, setLocation] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, step]);

  const addMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);

  const delayedBot = (text: string, delay = 600) => {
    setTimeout(() => addMessage({ from: "bot", text }), delay);
  };

  const handleNameSubmit = () => {
    const val = inputValue.trim();
    if (!val || val.length > 100) return;
    setUserName(val);
    addMessage({ from: "user", text: val });
    setInputValue("");
    delayedBot(`Prazer, ${val}! 😊\n\nMe conta: qual dessas situações mais parece com a sua realidade hoje?`);
    setTimeout(() => setStep("challenge"), 650);
  };

  const handleChallengeSelect = (challenge: string) => {
    setSelectedChallenge(challenge);
    addMessage({ from: "user", text: challenge });
    delayedBot(challengeResponses[challenge]);
    setTimeout(() => {
      addMessage({ from: "bot", text: "E você está falando da realidade de qual perfil?" });
      setStep("profile");
    }, 1200);
  };

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile);
    addMessage({ from: "user", text: profile });
    delayedBot("Perfeito. Me ajuda com alguns números para eu ter uma visão inicial?\n\nQuantos líderes (coordenadores, gerentes, supervisores, etc.) a sua empresa tem hoje?");
    setTimeout(() => setStep("leaders"), 650);
  };

  const handleLeadersSubmit = () => {
    const val = inputValue.trim();
    if (!val || isNaN(Number(val)) || Number(val) < 0) return;
    setNumLeaders(val);
    addMessage({ from: "user", text: val });
    setInputValue("");
    delayedBot("Quantos desses você considera realmente críticos (se saíssem hoje, fariam muita falta)?");
    setTimeout(() => setStep("critical"), 650);
  };

  const handleCriticalSubmit = () => {
    const val = inputValue.trim();
    if (!val || isNaN(Number(val)) || Number(val) < 0) return;
    setNumCritical(val);
    addMessage({ from: "user", text: val });
    setInputValue("");
    delayedBot("Ótimo. E em qual cidade e estado a sua empresa está localizada?");
    setTimeout(() => setStep("location"), 650);
  };

  const handleLocationSubmit = () => {
    const val = inputValue.trim();
    if (!val || val.length > 200) return;
    setLocation(val);
    addMessage({ from: "user", text: val });
    setInputValue("");

    const critical = parseInt(numCritical) || 0;
    const interpretive = critical > 0
      ? "Existe risco relevante caso um desses líderes críticos saia sem sucessor preparado. Esse é um ponto onde conseguimos apoiar bastante."
      : "Mesmo sem líderes críticos mapeados, normalmente encontramos oportunidades importantes de desenvolvimento e sucessão quando aprofundamos o diagnóstico.";

    const summary = `${userName}, com base no que você me contou, aqui vai um resumo da sua situação:\n\n• Dor principal: ${selectedChallenge}\n• Perfil: ${selectedProfile}\n• Nº de líderes: ${numLeaders}\n• Líderes críticos: ${numCritical}\n• Localização: ${val}\n\n${interpretive}`;

    setTimeout(() => {
      addMessage({ from: "bot", text: summary });
      setTimeout(() => {
        addMessage({
          from: "bot",
          text: "Um de nossos consultores especialistas pode olhar para esse cenário e desenhar um roadmap sob medida para você.\n\nQuer que eu gere um resumo com essas informações e te encaminhe para falar com um consultor agora?",
        });
        setStep("closing");
      }, 800);
    }, 600);

    setStep("summary");
  };

  const getWhatsAppLink = () => {
    const dor = encodeURIComponent(selectedChallenge);
    const perfil = encodeURIComponent(selectedProfile);
    const lideres = encodeURIComponent(numLeaders);
    const criticos = encodeURIComponent(numCritical);
    const cidade = encodeURIComponent(location);
    return `https://wa.me/5521991417327?text=Olá,%20conheci%20a%20youB%20pelo%20site%20e%20o%20assistente%20virtual%20montou%20um%20resumo%20da%20minha%20situação:%0A%0A-%20Dor%20principal:%20${dor}%0A-%20Perfil:%20${perfil}%0A-%20Nº%20de%20líderes:%20${lideres}%0A-%20Líderes%20críticos:%20${criticos}%0A-%20Localização:%20${cidade}%0A%0AGostaria%20de%20agendar%20uma%20sessão%20estratégica%20para%20entender%20melhor%20os%20cenários%20e%20próximos%20passos.`;
  };

  const resetChat = () => {
    setStep("name");
    setInputValue("");
    setUserName("");
    setSelectedChallenge("");
    setSelectedProfile("");
    setNumLeaders("");
    setNumCritical("");
    setLocation("");
    setMessages([
      { from: "bot", text: "Olá! 👋 Sou o assistente virtual da youB.\n\nPra começar, como você se chama?" },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "name") handleNameSubmit();
    else if (step === "leaders") handleLeadersSubmit();
    else if (step === "critical") handleCriticalSubmit();
    else if (step === "location") handleLocationSubmit();
  };

  const inputPlaceholder =
    step === "name" ? "Digite seu nome..." :
    step === "leaders" ? "Ex: 25" :
    step === "critical" ? "Ex: 8" :
    step === "location" ? "Ex: São Paulo – SP" : "";

  const inputType = (step === "leaders" || step === "critical") ? "number" : "text";
  const showInput = ["name", "leaders", "critical", "location"].includes(step);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            role="dialog" aria-label="Assistente youB"
            className="absolute bottom-20 right-0 w-[min(380px,calc(100vw-2rem))] max-h-[560px] rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Assistente youB</p>
                  <p className="text-xs text-muted-foreground">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => { setIsOpen(false); resetChat(); }}
                aria-label="Fechar assistente youB"
                className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[220px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Challenge buttons */}
              {step === "challenge" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pt-2">
                  {challenges.map((c) => (
                    <button key={c} onClick={() => handleChallengeSelect(c)} className="px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors text-left">
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Profile buttons */}
              {step === "profile" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pt-2">
                  {profiles.map((p) => (
                    <button key={p} onClick={() => handleProfileSelect(p)} className="px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors text-left">
                      {p}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Closing CTA */}
              {step === "closing" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Gerar resumo e falar com consultor
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            {showInput && (
              <div className="p-4 border-t border-border">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type={inputType}
                    min={inputType === "number" ? "0" : undefined}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={inputPlaceholder}
                    className="flex-1 bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    autoFocus
                  />
                  <button
                    type="submit"
                    aria-label="Enviar mensagem"
                    className="bg-primary text-primary-foreground p-2.5 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar assistente youB" : "Abrir assistente youB"}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingChatbot;

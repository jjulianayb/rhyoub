import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

type ChatStep = "name" | "challenge" | "closing";

interface Message {
  from: "bot" | "user";
  text: string;
}

const challenges = ["Sucessão", "Engajamento", "Cultura"];

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("name");
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Olá! Sou o assistente virtual da youB. Como você se chama?" },
  ]);

  const addMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);

  const handleNameSubmit = () => {
    if (!inputValue.trim()) return;
    const userName = inputValue.trim();
    setName(userName);
    addMessage({ from: "user", text: userName });
    setInputValue("");
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: `Prazer, ${userName}! Qual o principal desafio da sua liderança hoje?`,
      });
      setStep("challenge");
    }, 500);
  };

  const handleChallengeSelect = (challenge: string) => {
    addMessage({ from: "user", text: challenge });
    setTimeout(() => {
      addMessage({
        from: "bot",
        text: "Entendi. Um de nossos consultores especialistas pode desenhar um roadmap exato para resolver isso. Vamos agendar uma sessão estratégica?",
      });
      setStep("closing");
    }, 500);
  };

  const resetChat = () => {
    setStep("name");
    setName("");
    setInputValue("");
    setMessages([
      { from: "bot", text: "Olá! Sou o assistente virtual da youB. Como você se chama?" },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-20 right-0 w-[360px] max-h-[500px] rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Assistente youB</p>
                  <p className="text-xs text-muted-foreground">Online agora</p>
                </div>
              </div>
              <button
                onClick={() => { setIsOpen(false); resetChat(); }}
                className="p-1.5 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {challenges.map((c) => (
                    <button
                      key={c}
                      onClick={() => handleChallengeSelect(c)}
                      className="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Closing CTA */}
              {step === "closing" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-2"
                >
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]"
                  >
                    Falar com Consultor
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              )}
            </div>

            {/* Input (only for name step) */}
            {step === "name" && (
              <div className="p-4 border-t border-border">
                <form
                  onSubmit={(e) => { e.preventDefault(); handleNameSubmit(); }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite seu nome..."
                    className="flex-1 bg-secondary border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground p-2.5 rounded-xl hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] transition-all"
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
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 animate-pulse-glow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default FloatingChatbot;

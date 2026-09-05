import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5521991417327?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sessão%20estratégica.";

const Footer = () => (
  <footer className="saas-footer" id="contato">
    <div className="container footer-grid">
      <div className="footer-brand">
        <div className="footer-logo">you<span>B</span>.</div>
        <p>Inteligência para desenvolver pessoas e organizações.</p>
        <div className="footer-socials" aria-label="Redes sociais">
          <a href="https://instagram.com/youbusiness" target="_blank" rel="noopener noreferrer" aria-label="Instagram youB"><Instagram size={16} /></a>
          <a href="https://br.linkedin.com/company/youbeetecnologia" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn youB"><Linkedin size={16} /></a>
        </div>
      </div>
      <div className="footer-column"><h3>Plataforma</h3><a href="/plataforma">Visão executiva</a><a href="/plataforma">Desenvolvimento</a><a href="/plataforma">Performance</a><a href="/plataforma">Conversas</a><a href="/plataforma">IA Mentora</a></div>
      <div className="footer-column"><h3>Soluções</h3><a href="/consultoria">DHO</a><a href="/carreira">Liderança e carreira</a><a href="/academias">Educação corporativa</a><a href="/sucessao">Sucessão</a></div>
      <div className="footer-column"><h3>Empresa</h3><a href="/sobre">Sobre a youB</a><a href="/sobre#midia">Na mídia</a><a href="/contato">Carreiras</a><a href="/contato">Contato</a><a href="/contato">Blog</a></div>
      <div className="footer-contact"><h3>Fale com a nossa equipe</h3><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp <ArrowUpRight size={13} /></a><a href="mailto:contato@rhyoub.com.br"><Mail size={16} /> E-mail <ArrowUpRight size={13} /></a><a href="/contato"><MessageCircle size={16} /> Agendar demonstração <ArrowUpRight size={13} /></a></div>
    </div>
    <div className="container footer-bottom"><span>© 2026 youB. Todos os direitos reservados.</span><div><span>Privacidade</span><span>Termos de uso</span><span>LGPD</span></div></div>
  </footer>
);

export default Footer;

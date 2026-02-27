import { Button } from "@/components/ui/button";
import tglLogo from "@/assets/logo-tgl.svg";

const footerLinks = [
  {
    category: "Plataforma",
    links: [
      { label: "Funcionalidades", href: "#features" },
      { label: "Benefícios", href: "#benefits" },
      { label: "Preços", href: "#pricing" },
      { label: "Resultados", href: "#results" },
    ],
  },
  {
    category: "Recursos",
    links: [
      { label: "Agendamento", href: "#features" },
      { label: "Financeiro", href: "#features" },
      { label: "Loja Virtual", href: "#features" },
      { label: "WhatsApp", href: "#" },
    ],
  },
  {
    category: "Institucional",
    links: [
      { label: "Sobre Nós", href: "#" },
      { label: "Métricas", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contato", href: "#" },
    ],
  },
  {
    category: "Jurídico",
    links: [
      { label: "Privacidade", href: "#" },
      { label: "Termos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border/50 pt-16 pb-8 bg-background">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-x-12 gap-y-10 mb-12">
        <div className="col-span-2 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/tls_barber.png" alt="TLS Barber" className="h-10 w-auto object-contain" />
          </div>
          <p className="text-xs font-bold tracking-wider text-white mb-4">Inscreva-se na newsletter</p>
          <div className="flex gap-2 max-w-sm">
            <input
              type="email"
              placeholder="Seu email"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground flex-1 outline-none focus:border-primary transition-all shadow-inner"
            />
            <Button size="sm" className="px-5 h-10 font-bold">Enviar</Button>
          </div>
        </div>
        {footerLinks.map((section) => (
          <div key={section.category}>
            <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">{section.category}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[10px] md:text-xs text-muted-foreground order-2 md:order-1">
          © 2026 TLS Barber. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-3 order-1 md:order-2">
          <span className="text-[10px] md:text-xs text-muted-foreground">
            Desenvolvido por:
          </span>
          <a 
            href="https://www.tglsolutions.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-all"
          >
            <img 
              src={tglLogo} 
              alt="TGL Solutions" 
              className="h-5 md:h-6 w-auto" 
            />
          </a>
        </div>

        <div className="flex gap-4 order-3">
          <a href="#" className="text-[10px] md:text-xs text-muted-foreground hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="text-[10px] md:text-xs text-muted-foreground hover:text-white transition-colors">Termos de uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

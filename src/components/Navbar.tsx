import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Benefícios", href: "#benefits" },
  { label: "Resultados", href: "#results" },
  { label: "Preços", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleStartTrial = () => {
    window.location.href = "https://buy.stripe.com/test_dRm00k7Gf5wPa4oe7Cc3m00";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background">
      <div className="container max-w-4xl flex h-16 items-center justify-between px-2 md:px-4">
        <a href="/" className="flex items-center">
          <img src="/tls_barber.png" alt="TLS Barber" className="h-16 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-1">
          <Button onClick={handleStartTrial} size="sm" className="px-3 h-9 text-xs">Começar grátis</Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button onClick={handleStartTrial} className="w-full" size="sm">Começar grátis</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

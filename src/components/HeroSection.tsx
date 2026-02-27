import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardImg from "@/assets/dashboard-hero.png";

const HeroSection = () => {
  const handleStartTrial = () => {
    window.location.href = "https://buy.stripe.com/test_dRm00k7Gf5wPa4oe7Cc3m00";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511975678074?text=Olá! Gostaria de agendar uma demonstração do TGL Barber.", "_blank");
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="premium-blur top-[-10%] left-[20%] w-[400px] h-[400px] bg-primary/20 animate-float" />
      <div className="premium-blur bottom-[10%] right-[10%] right-[10%] w-[300px] h-[300px] bg-accent/10 sm:w-[500px] sm:h-[500px]" />
      
      <div className="container relative z-10 transition-all duration-1000 animate-in fade-in slide-in-from-bottom-5">
        <div className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] tracking-tighter">
            Escalar sua Barbearia ficou <span className="text-gradient"><br />mais fácil e automático.</span>
          </h1>
          <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            Organize sua agenda, reduza faltas em 80% e controle suas finanças de forma premium e segura.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={handleStartTrial}
              size="lg" 
              className="px-8 h-12 text-base font-bold glow-border hover:scale-105 active:scale-95 transition-all group shadow-xl shadow-primary/20"
            >
              Começar teste grátis <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button 
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline" 
              size="lg" 
              className="px-8 h-12 text-base font-bold border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition-all"
            >
              Ver plano
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground font-medium">
             ✓ Sem compromisso &nbsp; ✓ 7 dias grátis &nbsp; ✓ Setup em 5 min
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="rounded-[1.5rem] overflow-hidden shadow-2xl relative z-10 p-2 sm:p-4">
            <div className="rounded-[1rem] overflow-hidden">
              <img
                src={dashboardImg}
                alt="Dashboard CRM mostrando analytics e métricas"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.004]"
              />
            </div>
          </div>
          {/* Shadow behind image */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-16 bg-primary/20 blur-[60px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

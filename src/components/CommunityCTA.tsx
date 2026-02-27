import { Button } from "@/components/ui/button";

const CommunityCTA = () => {
  const handleStartTrial = () => {
    window.location.href = "https://buy.stripe.com/test_dRm00k7Gf5wPa4oe7Cc3m00";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511975678074?text=Olá! Vim pelo site e gostaria de falar com um especialista sobre o TGL Barber.", "_blank");
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container relative z-10">
        <div className="relative max-w-6xl mx-auto text-center rounded-[3rem] overflow-hidden border border-white/10 glass-card">
          {/* Background animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 rounded-[3rem] animate-gradient" />
          
          <div className="relative z-10 py-20 px-10 md:py-28 md:px-20">
            <h2 className="font-heading text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Pare de perder dinheiro <br />
              <span className="text-white">pelo WhatsApp hoje.</span>
            </h2>
            <p className="text-white/80 mb-12 text-sm md:text-base max-w-3xl mx-auto font-medium leading-relaxed">
              Tenha sua própria plataforma premium, venda produtos enquanto dorme e garanta receita recorrente. O TGL Barber é o upgrade que sua barbearia merece.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                onClick={handleStartTrial}
                size="lg" 
                className="px-12 h-16 text-xl font-black bg-white text-primary hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10"
              >
                Começar agora o teste grátis
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                size="lg" 
                className="px-12 h-16 text-xl font-black border-white/20 bg-transparent text-white hover:bg-white/10 transition-all"
              >
                Falar com especialista
              </Button>
            </div>
            <p className="mt-8 text-sm text-white/60 font-bold uppercase tracking-[0.2em]">
               ✓ SEM CARTÃO &nbsp; ✓ 7 DIAS GRÁTIS &nbsp; ✓ CANCELAMENTO INSTANTÂNEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;

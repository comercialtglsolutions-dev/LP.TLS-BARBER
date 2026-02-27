import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "Plano Premium",
    price: "59",
    priceId: "price_1T5G5tJzowwAPsUdWsDmMIHa",
    description: "Acesso completo a todas as ferramentas para transformar sua barbearia.",
    features: [
      "Agenda Online 24/7",
      "Confirmações via WhatsApp",
      "Gestão de Barbeiros Ilimitada",
      "Loja Virtual de Produtos",
      "Relatórios Financeiros Avançados",
      "Suporte Prioritário",
      "7 Dias de Teste Grátis"
    ],
    buttonText: "Testar Grátis por 7 Dias",
    popular: true
  }
];

const PricingSection = () => {
  const handleCheckout = () => {
    try {
      toast.info("Redirecionando para o checkout seguro...");
      window.location.href = "https://buy.stripe.com/test_dRm00k7Gf5wPa4oe7Cc3m00";
    } catch (err) {
      console.error("Erro no checkout:", err);
      toast.error("Não foi possível iniciar o pagamento.");
    }
  };

  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-white/[0.02]">
      <div className="premium-blur bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-primary/10" />
      
      <div className="container relative z-10 transition-all duration-1000 animate-in fade-in slide-in-from-bottom-5">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 tracking-tighter">
            Investimento que se <br />
            <span className="text-gradient">paga sozinho</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            O melhor plano para você focar no que realmente importa: seu talento. Inicie sua jornada hoje.
          </p>
        </div>

        <div className="flex justify-center max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className="relative glass-card glass-card-hover group rounded-[2rem] p-8 md:p-12 flex flex-col border-white/10 bg-white/5 max-w-md w-full shadow-2xl overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <span className="inline-block bg-primary text-primary-foreground text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 shadow-lg shadow-primary/20">
                  Acesso Completo
                </span>
                
                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black font-heading tracking-tighter">R${plan.price}</span>
                    <span className="text-muted-foreground text-lg font-medium">/mês</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80">O que está incluso:</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground/90">
                        <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Check size={12} className="text-primary font-black" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={handleCheckout}
                  className="w-full h-12 text-lg font-black bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                  variant="default"
                >
                  {plan.buttonText}
                </Button>
                
                <p className="text-center mt-6 text-sm text-muted-foreground/60 font-semibold flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Setup em menos de 5 minutos
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-muted-foreground font-medium italic">
          *Cancele a qualquer momento. Garantia total de satisfação.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;

import { TrendingUp, Clock, Star, Zap } from "lucide-react";

const benefits = [
  { 
    icon: Zap, 
    title: "Redução drástica de faltas", 
    desc: "Com lembretes automáticos e opção de pré-pagamento, o índice de 'no-show' cai em até 80%. Proteja seu tempo e seu lucro.",
    label: "Resultado: +Previsibilidade"
  },
  { 
    icon: TrendingUp, 
    title: "Aumento do faturamento", 
    desc: "Agenda sempre otimizada, permitindo que você atenda mais clientes por dia sem o caos de mensagens cruzadas.",
    label: "Resultado: +30% Agendamentos"
  },
  { 
    icon: Clock, 
    title: "Economia de tempo real", 
    desc: "Recupere até 2 horas do seu dia que antes eram gastas no chat do WhatsApp. Deixe o sistema trabalhar enquanto você corta.",
    label: "Resultado: +2h Livres/Dia"
  },
];

const AppsSection = () => (
  <section id="benefits" className="section-padding bg-secondary/20">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          O Pulo do Gato para <br />
          <span className="text-gradient">escalar seu lucro</span>
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          Não é apenas um sistema de agendamento. É o motor de crescimento que sua barbearia precisa.
        </p>
      </div>
      <div className="space-y-8 max-w-5xl mx-auto">
        {benefits.map((benefit, i) => (
          <div key={benefit.title} className={`glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                {benefit.label}
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
            </div>
            <div className="flex-1 w-full max-w-sm">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/50 rounded-2xl flex items-center justify-center border border-primary/20 shadow-2xl shadow-primary/5">
                <benefit.icon size={80} className="text-primary animate-float" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AppsSection;

import { Calendar, MessageSquare, Users, CreditCard, ShoppingBag, BarChart3 } from "lucide-react";

const features = [
  { icon: Calendar, title: "Agenda Online 24h", desc: "Seu cliente marca o corte a qualquer hora, sem você precisar estar acordado." },
  { icon: MessageSquare, title: "Confirmação por WhatsApp", desc: "Envio automático de alertas e confirmações direto para o celular do cliente." },
  { icon: Users, title: "Gestão de Barbeiros", desc: "Controle individual de horários, serviços e produtividade de cada profissional." },
  { icon: CreditCard, title: "Pagamento Integrado", desc: "Receba via Stripe com total segurança direto pelo sistema." },
  { icon: ShoppingBag, title: "Loja de Produtos", desc: "Venda pomadas, shampoos e acessórios diretamente na plataforma." },
  { icon: BarChart3, title: "Relatórios Financeiros", desc: "Dashboard completo para controle de entradas, saídas e comissões." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding relative overflow-hidden">
    <div className="premium-blur top-[20%] right-[-5%] w-[300px] h-[300px] bg-primary/10" />
    
    <div className="container relative z-10 transition-all duration-1000 animate-in fade-in slide-in-from-bottom-5">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-black mb-4 tracking-tighter">
          Ferramentas de Elite para <br />
          <span className="text-gradient">dominar o mercado</span>
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          Tudo que você precisa para automatizar processos, aumentar faturamento e focar no seu talento.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, idx) => (
          <div 
            key={f.title} 
            className="glass-card glass-card-hover group p-6 rounded-2xl border-white/5 bg-white/5"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/5">
              <f.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

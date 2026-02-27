import { Code, ShieldCheck, Globe } from "lucide-react";

const OpenSourceSection = () => (
  <section id="infrastructure" className="section-padding">
    <div className="container">
      <div className="relative max-w-5xl mx-auto glass-card rounded-2xl p-10 md:p-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Infraestrutura de <br />
            <span className="text-gradient">Classe mundial</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mb-12">
            Construído sobre o estado da arte em tecnologia para garantir que seu negócio nunca pare. Velocidade, segurança e integridade de dados para sua tranquilidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Code, title: "Next.js 14", desc: "Performance ultrarrápida para uma experiência de agendamento instantânea." },
              { icon: ShieldCheck, title: "Segurança Stripe", desc: "Processamento de pagamentos com padrão bancário e proteção total." },
              { icon: Globe, title: "Alta Disponibilidade", desc: "Sua barbearia aberta para agendamentos digitalmente 24 horas por dia." },
            ].map((item) => (
              <div key={item.title} className="bg-secondary/30 rounded-xl p-6 border border-border/30 group hover:border-primary/50 transition-colors">
                <item.icon size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading font-semibold text-base mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OpenSourceSection;

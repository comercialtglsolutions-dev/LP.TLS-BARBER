const testimonials = [
  {
    name: "Ricardo S.",
    role: "Dono da Barber Shop Classic",
    text: "Antes do TGL Barber, eu perdia muito tempo no WhatsApp. Hoje, minha agenda se preenche sozinha enquanto eu trabalho. Minhas faltas caíram quase a zero!",
    avatar: "RS",
  },
  {
    name: "André L.",
    role: "Proprietário da Barbearia do André",
    text: "O controle de comissões era um pesadelo. Agora, com um clique, eu sei exatamente quanto cada barbeiro produziu. O sistema se pagou na primeira semana.",
    avatar: "AL",
  },
  {
    name: "Carlos M.",
    role: "CEO, Vintage Cuts",
    text: "A experiência para o cliente é outro nível. Eles adoram poder agendar pelo celular sem precisar esperar uma resposta minha. Profissionalismo total.",
    avatar: "CM",
  },
];

const TestimonialsSection = () => (
  <section id="results" className="section-padding relative">
    <div className="premium-blur top-[10%] left-[-5%] w-[400px] h-[400px] bg-accent/5" />
    
    <div className="container relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-20 animate-in fade-in slide-in-from-bottom-5">
        <h2 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tighter">
          Quem domina o jogo, <br />
          <span className="text-gradient">usa e recomenda</span>
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          Dê voz a quem já transformou sua barbearia com a nossa tecnologia.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div 
            key={t.name} 
            className="glass-card glass-card-hover rounded-[2.5rem] p-10 flex flex-col border-white/5 bg-white/5 relative group"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Decorative Quote Mark */}
            <div className="absolute top-6 right-8 text-6xl font-serif text-primary/10 group-hover:text-primary/20 transition-colors select-none">
              &ldquo;
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 italic relative z-10">
              "{t.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg font-black text-primary shadow-lg shadow-primary/5">
                {t.avatar}
              </div>
              <div>
                <p className="text-lg font-bold text-foreground tracking-tight">{t.name}</p>
                <p className="text-sm text-primary/80 font-semibold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;

const news = [
  { title: "Product lança integração com Gmail para gestão de privacidade", date: "Fev 15, 2026", tag: "Lançamento" },
  { title: "Como otimizar seu pipeline de vendas com automação", date: "Fev 10, 2026", tag: "Tutorial" },
  { title: "Os melhores serviços de CRM para engenharia em 2026", date: "Jan 28, 2026", tag: "Análise" },
];

const NewsSection = () => (
  <section id="news" className="section-padding">
    <div className="container">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold">Novidades</h2>
        <a href="#" className="text-sm text-primary hover:underline">Ver todas →</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((item) => (
          <article key={item.title} className="glass-card rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">
            <div className="h-44 bg-secondary/40 flex items-center justify-center">
              <span className="text-xs text-muted-foreground/50 uppercase tracking-wider">Imagem</span>
            </div>
            <div className="p-5">
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded mb-3">{item.tag}</span>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default NewsSection;

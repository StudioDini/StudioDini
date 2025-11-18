import { Heart, Target, Sparkles } from "lucide-react";

const handleNavigation = (page: string) => {
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão",
      description: "Amamos o que fazemos e isso se reflete em cada projeto que criamos.",
    },
    {
      icon: Target,
      title: "Estratégia",
      description: "Cada decisão é pensada para alcançar os objetivos da sua marca.",
    },
    {
      icon: Sparkles,
      title: "Criatividade",
      description: "Transformamos ideias em soluções visuais inovadoras e memoráveis.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">Sobre o <span className="text-primary">Studio Dini</span></h1>
            <p className="text-xl text-muted-foreground">
              Onde criatividade encontra propósito
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Existimos porque acreditamos que todo negócio merece ser visto e lembrado por aquilo que o torna único.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos um estúdio criativo e colaborativo que transforma ideias em identidades visuais consistentes, 
                cuidando do cliente como se fosse parte da equipe.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Queremos ser reconhecidos como um estúdio de design que entrega principalmente pertencimento, clareza 
                e diferenciação aos nossos clientes conquistando reconhecimento no mercado pelo impacto positivo de cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Nossos Valores</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title} 
                  className="text-center hover-lift bg-card border border-border rounded-lg p-8"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Vamos criar juntos?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Estamos prontos para ouvir o seu sonho e transformá-lo em realidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleNavigation("contato")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors text-center cursor-pointer"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => handleNavigation("portfolio")}
                className="px-8 py-3 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center cursor-pointer"
              >
                Ver Portfólio
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

import { 
  Palette, 
  Box, 
  Image, 
  FileText, 
  Smartphone, 
  BookOpen,
  Layers,
  Film,
  Video,
  PenTool
} from "lucide-react";

const handleNavigation = (page: string) => {
  window.location.hash = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ServicesPage = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Construção completa de marca: estratégia, posicionamento, naming e identidade única que reflete a essência do seu negócio.",
    },
    {
      icon: Layers,
      title: "Identidade Visual",
      description: "Criação de sistemas visuais coesos: logo, paleta de cores, tipografia e elementos gráficos que comunicam sua marca com consistência.",
    },
    {
      icon: Box,
      title: "Modelagem 3D",
      description: "Desenvolvimento de modelos tridimensionais realistas e estilizados para produtos, visualizações arquitetônicas e animações.",
    },
    {
      icon: Image,
      title: "Ilustração",
      description: "Ilustrações personalizadas e exclusivas que dão vida às suas ideias, do digital ao editorial, com estilo único.",
    },
    {
      icon: FileText,
      title: "Diagramação",
      description: "Design editorial profissional para revistas, catálogos, livros e materiais impressos com foco em legibilidade e estética.",
    },
    {
      icon: PenTool,
      title: "Media Kit",
      description: "Criação de kits completos para imprensa e parcerias, apresentando sua marca de forma profissional e impactante.",
    },
    {
      icon: Smartphone,
      title: "UX/UI",
      description: "Design de interfaces digitais intuitivas e atraentes, focadas na experiência do usuário e em conversões.",
    },
    {
      icon: BookOpen,
      title: "Editorial",
      description: "Projetos editoriais completos: design de capas, miolo, infográficos e elementos visuais para publicações.",
    },
    {
      icon: Layers,
      title: "Design Gráfico",
      description: "Soluções gráficas versáteis para materiais de marketing, redes sociais, apresentações e comunicação visual.",
    },
    {
      icon: Film,
      title: "Motion Design",
      description: "Animações e motion graphics que dão movimento às suas ideias, de logos animados a vídeos explicativos.",
    },
    {
      icon: Video,
      title: "Edição de Vídeo",
      description: "Edição profissional de conteúdo audiovisual para redes sociais, campanhas e projetos institucionais.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">Nossos <span className="text-primary">Serviços</span></h1>
            <p className="text-xl text-muted-foreground">
              Soluções completas em design para transformar sua marca
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="hover-lift bg-card border border-border rounded-lg group transition-all hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-base text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Interessado em algum serviço?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Entre em contato e vamos conversar sobre o seu projeto
            </p>
            <button
              onClick={() => handleNavigation("contato")}
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors cursor-pointer"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

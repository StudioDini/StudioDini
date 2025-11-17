import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "figma:asset/ae3199ad9128cc81c66aef2e4ca7b9f9d42467c3.png";

const HomePage = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "Centro Óptico Alphaville",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1728470164693-95f5e7bade80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMjU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Izabel Aleixo",
      category: "Identidade Visual",
      image: "https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBpZGVudGl0eXxlbnwxfHx8fDE3NjMxNzkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Macam Arquitetura",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzYzMTc5MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const services = [
    "Modelagem 3D",
    "Ilustração",
    "Diagramação",
    "Media Kit",
    "UX/UI",
    "Editorial",
    "Design Gráfico",
    "Motion",
    "Edição de Vídeo",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image with Black & White Filter */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Studio Dini Hero"
            className="w-full h-full object-cover grayscale"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6 text-balance text-white">
              Toda marca começa de um <span className="text-primary">sonho</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transformamos ideias em identidades visuais marcantes e experiências memoráveis.
            </p>
            <Link
              to="/contato"
              className="inline-block px-8 py-3 text-lg bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Studio Dini</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos um estúdio de design especializado em <strong>branding e identidade visual</strong>. 
              Com expertise em criar marcas autênticas e memoráveis, combinamos criatividade, estratégia 
              e cuidado estético para transformar cada sonho em uma marca única.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              {services.map((service) => (
                <span key={service} className="px-4 py-2 bg-background rounded-full border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default">
                  {service}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group"
              >
                Ver Todos os Serviços
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nosso <span className="text-primary">Portfólio</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos projetos que transformamos em realidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className="overflow-hidden rounded-lg border border-border hover-lift cursor-pointer group bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                  <h3 className="text-xl group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 group"
            >
              Ver Portfólio Completo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-accent bg-[rgb(233,187,56)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-primary-foreground">Pronto para criar algo incrível?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Vamos transformar o seu sonho em realidade
            </p>
            <Link
              to="/contato"
              className="inline-block px-8 py-3 text-lg bg-secondary text-foreground rounded-lg hover:bg-background transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

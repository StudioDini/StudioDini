import { useState } from "react";
import { X } from "lucide-react";

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Centro Óptico Alphaville",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1728470164693-95f5e7bade80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMjU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1728470164693-95f5e7bade80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMjU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      description: "O Centro Óptico Alphaville é uma ótica tradicional da região, com quase três décadas de atendimento dedicado e especializado em cuidados com a visão. Uma marca que cresceu junto com Alphaville e faz parte da rotina de diferentes gerações.\n\nNosso desafio no Studio Dini foi renovar essa história por meio de um rebranding completo, criando uma identidade visual que moderniza a marca sem perder sua essência. Desenvolvemos um sistema visual mais elegante, confiável e atual, traduzindo a tradição do Centro Óptico para uma linguagem contemporânea — capaz de conectar passado e futuro com clareza e propósito."
    },
    {
      id: 2,
      title: "Izabel Aleixo",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBpZGVudGl0eXxlbnwxfHx8fDE3NjMxNzkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBpZGVudGl0eXxlbnwxfHx8fDE3NjMxNzkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      description: "A Izabel Aleixo é uma marca que une estilo, sofisticação e autenticidade por meio de peças pensadas para valorizar a personalidade de cada cliente. Uma marca que se destaca pela delicadeza, pela força feminina e pelo cuidado em cada detalhe do seu processo criativo.\n\nNo projeto realizado pelo Studio Dini, desenvolvemos uma identidade visual completa, trazendo leveza, modernidade e uma estética marcante que reflete o universo da marca. Criamos um sistema visual coeso, versátil e elegante, capaz de transmitir a essência da Izabel Aleixo em todos os seus pontos de contato do digital ao físico."
    },
    {
      id: 3,
      title: "Macam Arquitetura",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzYzMTc5MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      images: [
        "https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzYzMTc5MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      ],
      description: "A Macam Arquitetura é um escritório que combina técnica, funcionalidade e sensibilidade estética para criar espaços contemporâneos, equilibrados e pensados para pessoas. Seu trabalho une criatividade e precisão, sempre buscando soluções inteligentes que valorizam a vivência e a identidade de cada projeto.\n\nNo projeto realizado pelo Studio Dini, desenvolvemos uma identidade visual sólida, clean e atemporal, refletindo a visão arquitetônica da Macam: organizada, sofisticada e orientada ao detalhe. O novo sistema visual traduz a personalidade do escritório e fortalece sua presença no mercado com clareza e propósito."
    },
  ];

  const categories = ["todos", "Branding", "3D", "Editorial", "Ilustração", "UX/UI", "Motion"];

  const filteredProjects = activeCategory === "todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6"><span className="text-primary">Portfólio</span></h1>
            <p className="text-xl text-muted-foreground">
              Conheça alguns dos nossos trabalhos e projetos realizados
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-background sticky top-20 z-10 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 flex justify-center">
          <div className="bg-muted/30 px-8 py-6 rounded-lg border border-border">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-xs md:text-sm capitalize px-4 py-2 rounded-md transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "hover:bg-muted hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-lg border border-border hover-lift cursor-pointer group bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(project)}
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
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Em breve novos projetos nesta categoria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-border flex items-start justify-between sticky top-0 bg-background">
              <div>
                <h2 className="text-2xl md:text-3xl mb-2">{selectedProject.title}</h2>
                <p className="text-sm text-primary font-medium">{selectedProject.category}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
              
              <div className="grid gap-4">
                {selectedProject.images.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden">
                    <img
                      src={img}
                      alt={`${selectedProject.title} - ${idx + 1}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Gostou do que viu?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vamos criar algo incrível juntos
            </p>
            <a
              href="#/contato"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
            >
              Iniciar um Projeto
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;

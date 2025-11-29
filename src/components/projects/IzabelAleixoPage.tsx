import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import GalleryLightbox from "../GalleryLightbox";

const IzabelAleixoPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1760287363707-851f4780b98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQzNjc3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1763069228076-c7e3995e1769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY0Mzc0OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1699061827014-5365ef3bbe5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYnJhbmQlMjBpZGVudGl0eXxlbnwxfHx8fDE3NjMxNzkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1558769132-cb1aea1f1b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQzNjc3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBmYXNoaW9uJTIwYnJhbmRpbmd8ZW58MXx8fHwxNzY0Mzc0OTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxmYXNoaW9uJTIwYm91dGlxdWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQzNjc3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev < galleryImages.length - 1 ? prev + 1 : prev
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <a
              href="#/portfolio"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Voltar ao Portfólio
            </a>
            
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-sm uppercase tracking-wider text-primary">Identidade Visual</span>
            </div>
            
            <h1 className="mb-6 animate-fade-in">
              Izabel <span className="text-primary">Aleixo</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Criação de identidade visual completa para a marca de moda Izabel Aleixo, 
              desenvolvendo uma estética elegante e contemporânea que reflete a sofisticação 
              e exclusividade da marca. O projeto abrangeu desde o conceito criativo até 
              aplicações em diversos touchpoints.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Cliente:</span>
                <p className="font-medium">Izabel Aleixo</p>
              </div>
              <div>
                <span className="text-muted-foreground">Categoria:</span>
                <p className="font-medium">Moda & Lifestyle</p>
              </div>
              <div>
                <span className="text-muted-foreground">Serviços:</span>
                <p className="font-medium">Branding, Editorial, Embalagens</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-12">
              Galeria do <span className="text-primary">Projeto</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border hover:border-primary/30 transition-all cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openLightbox(index)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Izabel Aleixo - Imagem ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8">Sobre o <span className="text-primary">Projeto</span></h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Izabel Aleixo é uma marca de moda que busca transmitir elegância atemporal 
                e sofisticação contemporânea. O desafio foi criar uma identidade visual que 
                comunicasse esses valores de forma consistente e memorável.
              </p>
              
              <p>
                Desenvolvemos um sistema visual completo, incluindo logotipo, paleta de cores 
                refinada, tipografia exclusiva e padrões gráficos que podem ser aplicados em 
                embalagens, etiquetas, materiais promocionais e plataformas digitais.
              </p>
              
              <p>
                O resultado é uma marca forte e coesa que se destaca no mercado de moda, 
                criando uma conexão emocional com o público-alvo através de uma estética 
                cuidadosamente elaborada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Gostou deste projeto?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vamos criar algo incrível para a sua marca também
            </p>
            <a
              href="#/contato"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <GalleryLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
          altPrefix="Izabel Aleixo"
        />
      )}
    </div>
  );
};

export default IzabelAleixoPage;

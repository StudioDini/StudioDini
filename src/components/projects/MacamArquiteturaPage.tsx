import { useState } from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import GalleryLightbox from "../GalleryLightbox";

const MacamArquiteturaPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1705181082998-2cc29bcae3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW8lMjBvZmZpY2V8ZW58MXx8fHwxNzY0Mzc0OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBkZXNpZ258ZW58MXx8fHwxNzY0Mjk0MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1635182473361-1f72e7b4be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzYzMTc5MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxhcmNoaXRlY3R1cmUlMjBzdHVkaW8lMjBvZmZpY2V8ZW58MXx8fHwxNzY0Mzc0OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhcmNoaXRlY3R1cmUlMjBzdHVkaW8lMjBvZmZpY2V8ZW58MXx8fHwxNzY0Mzc0OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxhcmNoaXRlY3R1cmUlMjBzdHVkaW8lMjBvZmZpY2V8ZW58MXx8fHwxNzY0Mzc0OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-sm uppercase tracking-wider text-primary">Branding</span>
            </div>
            
            <h1 className="mb-6 animate-fade-in">
              Macam <span className="text-primary">Arquitetura e Interiores</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Desenvolvimento de identidade visual completa para o escritório Macam Arquitetura e Interiores, 
              criando uma marca que reflete inovação, precisão técnica e visão criativa. 
              O projeto estabeleceu uma presença visual forte e profissional que comunica 
              a excelência dos serviços arquitetônicos e de design de interiores oferecidos.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Cliente:</span>
                <p className="font-medium">Macam Arquitetura e Interiores</p>
              </div>
              <div>
                <span className="text-muted-foreground">Categoria:</span>
                <p className="font-medium">Arquitetura & Design</p>
              </div>
              <div>
                <span className="text-muted-foreground">Serviços:</span>
                <p className="font-medium">Branding, Logo, Material Corporativo</p>
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
                    alt={`Macam Arquitetura e Interiores - Imagem ${index + 1}`}
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
                Macam Arquitetura e Interiores é um escritório que combina expertise técnica com uma abordagem 
                criativa e inovadora, atuando tanto em projetos arquitetônicos quanto em design de interiores. 
                O desafio foi criar uma identidade visual que transmitisse profissionalismo sem perder a essência 
                criativa que caracteriza o escritório.
              </p>
              
              <p>
                Desenvolvemos um sistema de identidade que equilibra elementos geométricos - 
                remetendo à precisão arquitetônica - com uma paleta de cores moderna e sofisticada. 
                O logotipo foi desenhado para ser versátil, funcionando perfeitamente em aplicações 
                digitais e impressas.
              </p>
              
              <p>
                O resultado é uma marca profissional e memorável que posiciona o escritório como 
                referência em arquitetura e design de interiores contemporâneos, facilitando o reconhecimento 
                e fortalecendo a presença no mercado.
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
          altPrefix="Macam Arquitetura e Interiores"
        />
      )}
    </div>
  );
};

export default MacamArquiteturaPage;

import { useState } from "react";
import { ArrowLeft, Eye } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import GalleryLightbox from "../GalleryLightbox";

const CentroOpticoPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1589708136696-6fb7e82702c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjQzNzQ5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1760337741510-1a4661e036fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWV3ZWFyJTIwZGlzcGxheSUyMG1vZGVybnxlbnwxfHx8fDE3NjQzNzQ5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1728470164693-95f5e7bade80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMjU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1574331875403-ca8c140e4b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjQzNzQ5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1622461230993-7e26df1c2ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjQzNzQ5ODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1574331875403-ca8c140e4b12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleWV3ZWFyJTIwZGlzcGxheSUyMG1vZGVybnxlbnwxfHx8fDE3NjQzNzQ5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
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
              <Eye className="h-8 w-8 text-primary" />
              <span className="text-sm uppercase tracking-wider text-primary">Branding</span>
            </div>
            
            <h1 className="mb-6 animate-fade-in">
              Centro Óptico <span className="text-primary">Alphaville</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Desenvolvimento completo de identidade visual para o Centro Óptico Alphaville, 
              criando uma marca moderna e sofisticada que transmite confiança, qualidade e 
              atendimento premium. O projeto incluiu logotipo, paleta de cores, tipografia 
              e aplicações em diversos materiais.
            </p>

            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-muted-foreground">Cliente:</span>
                <p className="font-medium">Centro Óptico Alphaville</p>
              </div>
              <div>
                <span className="text-muted-foreground">Categoria:</span>
                <p className="font-medium">Branding & Identidade Visual</p>
              </div>
              <div>
                <span className="text-muted-foreground">Serviços:</span>
                <p className="font-medium">Logo, Paleta, Papelaria, Sinalização</p>
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
                    alt={`Centro Óptico Alphaville - Imagem ${index + 1}`}
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
                O Centro Óptico Alphaville buscava uma identidade visual que refletisse sua 
                excelência em produtos e serviços ópticos, destacando-se no competitivo mercado 
                de ópticas premium.
              </p>
              
              <p>
                Desenvolvemos uma marca que combina elementos visuais modernos com a confiabilidade 
                e precisão associadas ao setor óptico. A paleta de cores foi cuidadosamente escolhida 
                para transmitir profissionalismo e sofisticação, enquanto mantém acessibilidade visual.
              </p>
              
              <p>
                O resultado é uma identidade coesa e memorável que funciona perfeitamente em todos 
                os pontos de contato com o cliente, desde a fachada da loja até materiais digitais 
                e impressos.
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
          altPrefix="Centro Óptico Alphaville"
        />
      )}
    </div>
  );
};

export default CentroOpticoPage;

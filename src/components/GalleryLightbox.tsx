import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface GalleryLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  altPrefix: string;
}

const GalleryLightbox = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  altPrefix,
}: GalleryLightboxProps) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrevious();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/70 hover:bg-[#E9BB38] text-white transition-all shadow-xl hover:scale-125 border-2 border-[#E9BB38]"
        aria-label="Fechar galeria"
      >
        <X className="h-6 w-6" strokeWidth={2.5} />
      </button>

      {/* Content Container with Arrows */}
      <div className="h-full flex items-center justify-between p-8 md:p-16 gap-4">
        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="flex-shrink-0 p-3 rounded-full bg-black/70 hover:bg-[#E9BB38] text-white transition-all shadow-xl hover:scale-125 disabled:opacity-30 disabled:cursor-not-allowed border-2 border-[#E9BB38]"
          disabled={currentIndex === 0}
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={2.5} />
        </button>

        {/* Image Container */}
        <div
          className="relative max-w-6xl max-h-[80vh] w-full rounded-lg overflow-hidden flex-shrink"
          style={{ boxShadow: '0 0 40px rgba(233, 187, 56, 0.6), 0 0 80px rgba(233, 187, 56, 0.3)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`${altPrefix} - Imagem ${currentIndex + 1}`}
            className="w-full h-full object-contain bg-black"
          />
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-2 rounded-full border-2 border-[#E9BB38] shadow-xl">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="flex-shrink-0 p-3 rounded-full bg-black/70 hover:bg-[#E9BB38] text-white transition-all shadow-xl hover:scale-125 disabled:opacity-30 disabled:cursor-not-allowed border-2 border-[#E9BB38]"
          disabled={currentIndex === images.length - 1}
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

export default GalleryLightbox;

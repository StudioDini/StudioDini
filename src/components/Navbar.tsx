import { useState } from "react";
import { Menu, X } from "lucide-react";
import StudioDiniLogo from "./StudioDiniLogo";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "Sobre", page: "sobre" },
    { name: "Serviços", page: "servicos" },
    { name: "Portfólio", page: "portfolio" },
    { name: "Contato", page: "contato" },
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (page: string) => currentPage === page;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("home")}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <StudioDiniLogo className="h-12 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavigation(link.page)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.page) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation("contato")}
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors inline-block"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavigation(link.page)}
                  className={`text-sm font-medium transition-colors hover:text-primary text-left ${
                    isActive(link.page) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavigation("contato")}
                className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors inline-block text-center"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

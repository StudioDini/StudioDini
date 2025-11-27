import { useState } from "react";
import { Menu, X } from "lucide-react";
import StudioDiniLogo from "./StudioDiniLogo";

interface NavbarProps {
  currentPath: string;
}

const Navbar = ({ currentPath }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Portfólio", path: "/portfolio" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#/" className="flex items-center hover:opacity-80 transition-opacity">
            <StudioDiniLogo className="h-12 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/contato"
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors inline-block"
            >
              Solicitar Orçamento
            </a>
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
                <a
                  key={link.path}
                  href={`#${link.path}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#/contato"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors inline-block text-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

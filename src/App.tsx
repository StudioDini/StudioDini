import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import CentroOpticoPage from "./components/projects/CentroOpticoPage";
import IzabelAleixoPage from "./components/projects/IzabelAleixoPage";
import MacamArquiteturaPage from "./components/projects/MacamArquiteturaPage";

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || "/");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || "/");
      // Scroll to top when navigating to a new page
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/sobre":
        return <AboutPage />;
      case "/servicos":
        return <ServicesPage />;
      case "/portfolio":
        return <PortfolioPage />;
      case "/contato":
        return <ContactPage />;
      case "/portfolio/centro-optico-alphaville":
        return <CentroOpticoPage />;
      case "/portfolio/izabel-aleixo":
        return <IzabelAleixoPage />;
      case "/portfolio/macam-arquitetura":
        return <MacamArquiteturaPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPath={currentPath} />
      <main className="flex-1 pt-20">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;

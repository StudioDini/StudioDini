import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  // Handle initial hash and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setCurrentPage(hash);
    };

    // Set initial page from hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Render the appropriate page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "sobre":
        return <AboutPage />;
      case "servicos":
        return <ServicesPage />;
      case "portfolio":
        return <PortfolioPage />;
      case "contato":
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 pt-20">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;

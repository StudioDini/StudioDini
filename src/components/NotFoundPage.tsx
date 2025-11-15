import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
        >
          <Home size={20} />
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

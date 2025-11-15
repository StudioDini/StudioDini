import { useState } from "react";
import { Instagram, Linkedin, MessageCircle, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    window.open(`https://wa.me/5511934859024?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6">Entre em <span className="text-primary">Contato</span></h1>
            <p className="text-xl text-muted-foreground">
              Vamos transformar o seu <span className="text-primary">sonho</span> em realidade
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all">
              <h2 className="text-2xl mb-6">Envie uma <span className="text-primary">mensagem</span></h2>
              {submitted && (
                <div className="mb-6 p-4 bg-primary/10 text-primary rounded-lg border border-primary/30">
                  ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    placeholder="Conte-nos sobre o seu projeto..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl mb-6">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground">+55 11 93485-9024</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:studiodini@outlook.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                        studiodini@outlook.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-lg p-6 shadow-lg shadow-primary/20">
                <div className="flex items-center gap-4 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <div>
                    <h3 className="text-xl">Fale conosco no WhatsApp</h3>
                    <p className="text-sm opacity-90">Resposta rápida e direta</p>
                  </div>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="w-full px-8 py-3 bg-secondary text-foreground rounded-lg hover:bg-background transition-colors shadow-md hover:shadow-lg"
                >
                  Abrir WhatsApp
                </button>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/studiodini_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/studio-dini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://wa.me/5511934859024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

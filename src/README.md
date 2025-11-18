# Studio Dini - Website

Site oficial do Studio Dini, especializado em branding, identidade visual, modelagem 3D, UX/UI e design gráfico.

**Slogan:** Toda marca começa de um sonho

## 🚀 Como rodar o projeto

### Desenvolvimento

```bash
npm install
npm run dev
```

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 📦 Deploy no Vercel

### Configurações necessárias no Vercel Dashboard:

1. **Framework Preset:** `Vite`
2. **Build Command:** `npm run build`
3. **Output Directory:** `dist`
4. **Install Command:** `npm install`

### Variáveis de Ambiente
Não são necessárias variáveis de ambiente para este projeto.

## 🛠️ Tecnologias

- **React 18** com TypeScript
- **React Router** para navegação
- **Vite** para build
- **Tailwind CSS 4.0** para estilização
- **Lucide React** para ícones

## 🎨 Design

- **Cor principal:** #E9BB38 (Amarelo Studio Dini)
- **Fontes:** 
  - Inter (corpo do texto)
  - Stack Sans Headline (títulos)
- **Tema:** Modo claro (fundo branco)

## 📄 Estrutura do Projeto

```
/
├── components/          # Componentes React
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── PortfolioPage.tsx
│   ├── ContactPage.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
├── styles/
│   └── globals.css     # Estilos globais e configuração Tailwind
├── App.tsx             # Componente principal com rotas
├── main.tsx            # Entry point
├── index.html          # HTML base
└── vite.config.ts      # Configuração Vite
```

## 🔧 Troubleshooting

Se você está vendo uma tela branca após o deploy:

1. Certifique-se de que o Vercel está usando **Framework Preset: Vite**
2. Verifique se o **Output Directory** está configurado como `dist`
3. Confirme que o arquivo `vercel.json` existe na raiz do projeto
4. Faça um novo deploy (Deployments → ... → Redeploy)

## 📝 Páginas

- **/** - Home (Hero, sobre, portfólio em destaque, CTA)
- **/sobre** - Sobre o Studio Dini
- **/servicos** - Lista de serviços oferecidos
- **/portfolio** - Portfólio completo
- **/contato** - Formulário de contato e informações

## 🔗 Links

- [Site em Produção](seu-link-vercel.vercel.app)
- [Repositório GitHub](seu-repositorio-github)

---

Desenvolvido por Studio Dini © 2024

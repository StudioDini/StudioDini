# Studio Dini - Website 🎨

Site oficial do Studio Dini, especializado em branding, identidade visual, modelagem 3D, UX/UI e design gráfico.

**Slogan:** Toda marca começa de um sonho

[![Deploy to GitHub Pages](https://github.com/SEU_USUARIO/StudioDini/actions/workflows/deploy.yml/badge.svg)](https://github.com/SEU_USUARIO/StudioDini/actions/workflows/deploy.yml)

## 🌐 Site Publicado

**URL:** [https://SEU_USUARIO.github.io/StudioDini/](https://SEU_USUARIO.github.io/StudioDini/)

---

## 🚀 Deploy Rápido (GitHub Pages)

### ✅ Projeto Já Configurado!

Todos os arquivos estão prontos para deploy. Basta:

```bash
# 1. Commit e push
git add .
git commit -m "Deploy para GitHub Pages"
git push origin main

# 2. Configurar GitHub Pages
# Settings → Pages → Source: "GitHub Actions"

# 3. Aguardar 2-3 minutos e acessar
# https://SEU_USUARIO.github.io/StudioDini/
```

📖 **[Guia Completo de Deploy](LEIA_PRIMEIRO.md)**

---

## 💻 Desenvolvimento Local

### Instalar e Rodar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev
# Acesse: http://localhost:5173

# Build de produção
npm run build

# Preview da build
npm run preview
# Acesse: http://localhost:4173
```

---

## 📦 Deploy (Outras Plataformas)

### Vercel

```bash
# Remover base do vite.config.ts (linha 6)
# base: '/StudioDini/', ← comentar ou remover

# Depois fazer deploy no Vercel normalmente
```

**Configurações no Vercel:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

### Netlify

```bash
# Remover base do vite.config.ts (linha 6)
# base: '/StudioDini/', ← comentar ou remover

# Criar arquivo netlify.toml na raiz:
```

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🎯 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção na pasta `dist` |
| `npm run preview` | Preview da build de produção |
| `npm run deploy` | Build + instruções de deploy |

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

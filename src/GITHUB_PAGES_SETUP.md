# 🚀 Guia Completo - Deploy no GitHub Pages

## ✅ Problemas Corrigidos

Todos os problemas que causavam a tela branca foram identificados e corrigidos:

1. ✅ Adicionado `base: '/StudioDini/'` no vite.config.ts
2. ✅ Removidos arquivos incorretos da pasta public/_redirects
3. ✅ Criado arquivo `.nojekyll` para evitar processamento Jekyll
4. ✅ Criado workflow do GitHub Actions para build automático
5. ✅ Configurado caminhos relativos para assets

## 📋 Configuração do GitHub Pages (PASSO A PASSO)

### 1. Configurar o Repositório no GitHub

**Passo 1.1:** Vá para as configurações do repositório
```
https://github.com/SEU_USUARIO/StudioDini/settings
```

**Passo 1.2:** No menu lateral, clique em **"Pages"**

**Passo 1.3:** Configure o Source:
- **Source:** GitHub Actions (NÃO escolha "Deploy from a branch")
- Isso permitirá que o workflow automático funcione

### 2. Fazer Push das Correções

```bash
# Adicionar todas as mudanças
git add .

# Commit com mensagem descritiva
git commit -m "Fix: Configurar projeto para GitHub Pages - adicionar base path e workflow"

# Push para GitHub
git push origin main
```

### 3. Aguardar o Deploy Automático

Após o push:
1. Vá para a aba **"Actions"** no GitHub
2. Você verá o workflow "Deploy to GitHub Pages" executando
3. Aguarde finalizar (leva ~2-3 minutos)
4. Quando aparecer ✅ verde, o deploy foi concluído

### 4. Acessar o Site

Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/StudioDini/
```

## 🔧 O que Foi Corrigido

### vite.config.ts
```typescript
// ANTES (ERRADO - causava caminhos absolutos)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

// DEPOIS (CORRETO - caminhos relativos ao repositório)
export default defineConfig({
  plugins: [react()],
  base: '/StudioDini/',  // ← ESSENCIAL para GitHub Pages!
  build: {
    outDir: 'dist',
  },
});
```

### Estrutura de Arquivos Corrigida
```
public/
  ├── .nojekyll          # ← NOVO - evita Jekyll
  └── .gitkeep           # mantém pasta vazia no git

.github/
  └── workflows/
      └── deploy.yml     # ← NOVO - build automático
```

## 🐛 Troubleshooting

### Problema: Ainda aparece tela branca

**Solução:**
1. Verifique se o repositório se chama exatamente **"StudioDini"**
   - Se o nome for diferente, altere o `base` no vite.config.ts
   - Exemplo: se o repo se chama "studio-dini", use `base: '/studio-dini/'`

2. Force um novo build:
   - Vá em Actions → Deploy to GitHub Pages
   - Clique em "Re-run all jobs"

### Problema: Erro 404 nas rotas (ex: /sobre, /portfolio)

**Solução:**
O GitHub Pages não suporta SPA routing como o Vercel. Você tem duas opções:

**Opção A - Hash Router (Recomendado para GitHub Pages):**

Alterar o App.tsx para usar HashRouter:
```typescript
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <HashRouter>
    {/* resto do código */}
  </HashRouter>
);
```

URLs ficarão assim:
- https://usuario.github.io/StudioDini/#/
- https://usuario.github.io/StudioDini/#/sobre
- https://usuario.github.io/StudioDini/#/portfolio

**Opção B - 404.html Fallback:**

Criar um arquivo `public/404.html` igual ao `index.html`:
```bash
cp public/index.html public/404.html
```

### Problema: CSS ou imagens não carregam

**Causa:** Caminhos absolutos iniciando com `/`

**Solução:** Já corrigido pelo `base: '/StudioDini/'` no vite.config.ts

### Problema: O workflow não executa

**Solução:**
1. Vá em Settings → Actions → General
2. Em "Workflow permissions", selecione:
   - ✅ "Read and write permissions"
3. Salve e faça novo push

## 📊 Verificação Pós-Deploy

Após o deploy, verifique:

- [ ] Site carrega sem tela branca
- [ ] Hero section aparece com imagem de fundo
- [ ] Texto branco é legível contra o fundo escuro
- [ ] Palavra "sonho" está em amarelo (#E9BB38)
- [ ] Botão "Solicitar Orçamento" está amarelo e funcional
- [ ] Navegação funciona (Home, Sobre, Serviços, Portfólio, Contato)
- [ ] Logo clicável retorna para home
- [ ] Footer aparece corretamente
- [ ] Imagens do Unsplash carregam
- [ ] Ícones Lucide aparecem
- [ ] Responsivo funciona em mobile

## 🔄 Como Fazer Updates Futuros

Sempre que fizer mudanças:

```bash
# 1. Fazer suas alterações nos arquivos
# 2. Testar localmente
npm run dev

# 3. Build local para verificar
npm run build
npm run preview

# 4. Se tudo estiver OK, fazer commit e push
git add .
git commit -m "Descrição das mudanças"
git push origin main

# 5. GitHub Actions fará deploy automático
```

## 🎯 Comandos Úteis

```bash
# Desenvolvimento local
npm install
npm run dev
# Acessar: http://localhost:5173

# Build de produção (para testar antes do deploy)
npm run build

# Preview da build local
npm run preview
# Acessar: http://localhost:4173

# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notas Importantes

### Diferença entre Vercel e GitHub Pages

| Recurso | Vercel | GitHub Pages |
|---------|--------|--------------|
| SPA Routing | ✅ Automático | ⚠️ Precisa HashRouter ou 404 trick |
| Deploy | ✅ Detecta Vite | ✅ Via Actions (manual) |
| Build | ✅ Automático | ✅ Via workflow |
| Domínio | ✅ vercel.app | ✅ github.io |
| Base Path | ❌ Não precisa | ✅ Precisa configurar |
| Server-side | ✅ Suporta | ❌ Apenas estático |

### Recomendação de Routing

Para GitHub Pages, recomendo usar **HashRouter** em vez de BrowserRouter:

```typescript
// App.tsx
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <HashRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          {/* ... outras rotas */}
        </Routes>
      </main>
      <Footer />
    </div>
  </HashRouter>
);
```

Isso resolve o problema de 404 em rotas e funciona perfeitamente no GitHub Pages.

## ✨ Checklist Final

Antes de fazer o deploy final:

- [ ] vite.config.ts tem `base: '/StudioDini/'`
- [ ] Arquivo `.nojekyll` existe em `/public/`
- [ ] Workflow `.github/workflows/deploy.yml` existe
- [ ] Nome do repositório no GitHub é exatamente "StudioDini"
- [ ] Configuração do GitHub Pages está em "GitHub Actions"
- [ ] Todos os arquivos foram commitados
- [ ] Push foi feito para branch main
- [ ] Workflow executou sem erros

## 🎉 Sucesso!

Se seguiu todos os passos, seu site estará rodando perfeitamente em:

**https://SEU_USUARIO.github.io/StudioDini/**

---

**Última atualização:** 18 de novembro de 2024
**Figma Make Export** + **GitHub Pages** = ✨ Funcionando!

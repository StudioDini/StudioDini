# 🔧 Troubleshooting - GitHub Pages

Guia de solução de problemas comuns ao fazer deploy no GitHub Pages.

---

## 🔴 Problema: Tela Branca Após Deploy

### Sintomas
- Site carrega mas aparece apenas uma tela branca
- Console do navegador mostra erros 404
- Network tab mostra arquivos não encontrados

### Causa Raiz
Caminhos incorretos para CSS, JS e assets.

### Solução

**1. Verificar vite.config.ts**
```bash
cat vite.config.ts | grep "base"
```

Deve aparecer:
```typescript
base: '/StudioDini/',
```

Se NÃO aparecer, editar o arquivo e adicionar.

**2. Verificar nome do repositório**

O valor em `base:` deve ser **exatamente** o nome do repositório no GitHub.

- Repositório: `StudioDini` → `base: '/StudioDini/',`
- Repositório: `studio-dini` → `base: '/studio-dini/',`
- Repositório: `site` → `base: '/site/',`

**3. Fazer novo build e push**
```bash
git add vite.config.ts
git commit -m "Fix: Adicionar base path correto"
git push origin main
```

---

## 🔴 Problema: Erro 404 nas Rotas

### Sintomas
- Home page funciona
- Ao clicar em "Sobre" ou outras páginas → 404
- URL muda mas conteúdo não carrega

### Causa Raiz
BrowserRouter não funciona nativamente no GitHub Pages (não há servidor para fazer rewrites).

### Solução

**1. Verificar se está usando HashRouter**
```bash
cat App.tsx | grep "Router"
```

Deve aparecer:
```typescript
import { HashRouter, Routes, Route } from "react-router-dom";
```

**2. Se aparecer BrowserRouter, alterar para HashRouter**

Editar `App.tsx`:
```typescript
// ANTES
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => <BrowserRouter>...</BrowserRouter>;

// DEPOIS
import { HashRouter, Routes, Route } from "react-router-dom";
const App = () => <HashRouter>...</HashRouter>;
```

**3. Fazer commit e push**
```bash
git add App.tsx
git commit -m "Fix: Usar HashRouter para GitHub Pages"
git push origin main
```

**URLs com HashRouter:**
- Home: `https://usuario.github.io/StudioDini/#/`
- Sobre: `https://usuario.github.io/StudioDini/#/sobre`

O `#` é normal e esperado.

---

## 🔴 Problema: GitHub Actions Não Executa

### Sintomas
- Após fazer push, nada acontece na aba Actions
- Workflow não aparece ou não inicia
- Não há indicação de deploy

### Causa Raiz
Permissões do workflow não configuradas.

### Solução

**1. Verificar se o workflow existe**
```bash
ls -la .github/workflows/deploy.yml
```

Se NÃO existir, o arquivo foi deletado acidentalmente.

**2. Configurar permissões**

1. Acesse: `Settings → Actions → General`
2. Em **"Workflow permissions"**:
   - ✅ Selecione: "Read and write permissions"
   - ✅ Marque: "Allow GitHub Actions to create and approve pull requests"
3. Clique em **Save**

**3. Fazer novo push**
```bash
git commit --allow-empty -m "Trigger workflow"
git push origin main
```

---

## 🔴 Problema: Build Falha no GitHub Actions

### Sintomas
- Workflow executa mas falha com ❌
- Logs mostram erros de build
- Deploy não completa

### Causa Raiz
Erro de TypeScript, import incorreto, ou dependência faltando.

### Solução

**1. Ver logs completos**

1. Vá em: `Actions → Deploy to GitHub Pages`
2. Clique no workflow que falhou
3. Clique em "build" para ver logs
4. Procure por linhas com ❌ ou "Error"

**2. Reproduzir erro localmente**
```bash
# Limpar node_modules
rm -rf node_modules package-lock.json

# Reinstalar
npm install

# Tentar build
npm run build
```

Se der erro, você verá a mensagem de erro completa.

**3. Erros comuns e soluções**

**Erro:** `Cannot find module 'X'`
```bash
npm install X
git add package.json package-lock.json
git commit -m "Fix: Adicionar dependência X"
git push
```

**Erro:** `Type error: ...`
- Corrigir o erro de TypeScript no arquivo mencionado
- Commit e push

**Erro:** `Failed to resolve import`
- Verificar imports nos arquivos .tsx
- Corrigir caminhos incorretos
- Commit e push

---

## 🔴 Problema: CSS Não Carrega

### Sintomas
- Site aparece sem estilização
- Apenas HTML puro visível
- Fontes não carregam
- Cores não aparecem

### Causa Raiz
1. Base path incorreto no vite.config.ts
2. Arquivo globals.css não foi importado
3. Build não incluiu o CSS

### Solução

**1. Verificar base path**
```bash
cat vite.config.ts | grep "base"
```

Deve ter: `base: '/StudioDini/',`

**2. Verificar import do CSS**
```bash
cat main.tsx | grep "globals.css"
```

Deve ter: `import './styles/globals.css';`

**3. Verificar se globals.css existe**
```bash
ls -la styles/globals.css
```

**4. Fazer novo build e push**
```bash
npm run build
git add .
git commit -m "Fix: Corrigir CSS"
git push origin main
```

---

## 🔴 Problema: Imagens Não Aparecem

### Sintomas
- Imagens quebradas (ícone de imagem quebrada)
- Hero section sem imagem de fundo
- Erro 404 para imagens no console

### Causa Raiz
1. URLs de imagens incorretas
2. Imagens não foram incluídas no build
3. Base path incorreto

### Solução

**1. Para imagens do Unsplash**

Verificar se URLs começam com `https://images.unsplash.com/`

Se sim, problema é de rede. Tente acessar a URL diretamente no navegador.

**2. Para imagens locais**

Imagens devem estar em `/public/` ou importadas nos componentes:

```typescript
// CORRETO - Imagem em public/
<img src="/minha-imagem.jpg" />

// CORRETO - Imagem importada
import minhaImagem from './assets/imagem.jpg';
<img src={minhaImagem} />
```

**3. Verificar ImageWithFallback**
```bash
cat components/HomePage.tsx | grep "ImageWithFallback"
```

Se usar ImageWithFallback, verificar se está importado:
```typescript
import { ImageWithFallback } from "./figma/ImageWithFallback";
```

---

## 🔴 Problema: Fontes Não Carregam

### Sintomas
- Texto aparece com fonte padrão do sistema
- Fontes personalizadas não funcionam
- Console mostra erro ao carregar fontes

### Causa Raiz
Google Fonts não sendo carregado ou bloqueado.

### Solução

**1. Verificar import no globals.css**
```bash
head -5 styles/globals.css
```

Deve ter:
```css
@import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&display=swap');
```

**2. Verificar se há bloqueador de conteúdo**

Alguns navegadores/extensões bloqueiam Google Fonts. Teste em navegador anônimo.

**3. Alternativa: Usar fontes do sistema**

Editar `styles/globals.css`:
```css
/* Substituir */
font-family: 'Stack Sans Headline', sans-serif;

/* Por */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

---

## 🔴 Problema: Site Funciona Localmente Mas Não no GitHub Pages

### Sintomas
- `npm run dev` funciona perfeitamente
- Após deploy, site não funciona
- Diferenças entre local e produção

### Causa Raiz
Configurações diferentes entre ambiente local e produção.

### Solução

**1. Testar build localmente**
```bash
npm run build
npm run preview
```

Acesse `http://localhost:4173` e teste todas as funcionalidades.

Se funcionar no preview mas não no GitHub Pages:

**2. Verificar base path**

Preview local funciona sem base path, mas GitHub Pages precisa.

Confirmar que `vite.config.ts` tem:
```typescript
base: '/StudioDini/',
```

**3. Verificar router**

Confirmar que está usando HashRouter, não BrowserRouter.

**4. Limpar cache do navegador**

Às vezes o navegador cacheia a versão antiga:
- Ctrl + Shift + R (Windows/Linux)
- Cmd + Shift + R (Mac)
- Ou abrir em aba anônima

---

## 🔴 Problema: Deploy Demora Muito

### Sintomas
- Workflow fica executando por mais de 10 minutos
- Never completa
- Fica em estado "running"

### Causa Raiz
1. node_modules muito grande
2. Dependências problemáticas
3. Timeout do GitHub Actions

### Solução

**1. Verificar se há loop infinito**

Cancelar o workflow:
1. Actions → Deploy to GitHub Pages
2. Clique nos três pontos (...)
3. "Cancel workflow"

**2. Limpar dependências**
```bash
# Remover node_modules local
rm -rf node_modules

# Verificar package.json
cat package.json
```

**3. Fazer novo push com cache limpo**
```bash
git commit --allow-empty -m "Rebuild com cache limpo"
git push origin main
```

---

## 🔴 Problema: URLs Não Funcionam (302 Redirect Loop)

### Sintomas
- Site redireciona infinitamente
- Navegador mostra "Too many redirects"
- Não consegue acessar nenhuma página

### Causa Raiz
Conflito entre BrowserRouter e GitHub Pages.

### Solução

**JÁ CORRIGIDO!** O projeto agora usa HashRouter.

Se ainda ocorrer:

1. Confirmar App.tsx usa HashRouter
2. Remover qualquer middleware de redirect
3. Verificar se não há _redirects ou vercel.json afetando

---

## 🔴 Problema: GitHub Pages Desabilitado

### Sintomas
- Settings → Pages não aparece
- Ou aparece mensagem "GitHub Pages is disabled"

### Causa Raiz
1. Repositório é privado (GitHub Pages só funciona em repos públicos no free tier)
2. GitHub Pages foi desabilitado nas configurações

### Solução

**1. Tornar repositório público**
```
Settings → General → Danger Zone → Change visibility → Make public
```

**2. Ou usar GitHub Pro/Team**

GitHub Pro permite Pages em repositórios privados.

---

## 🆘 Ainda Com Problemas?

### Checklist Geral

- [ ] `vite.config.ts` tem `base: '/StudioDini/',`
- [ ] `App.tsx` usa `HashRouter`
- [ ] `public/.nojekyll` existe
- [ ] `.github/workflows/deploy.yml` existe
- [ ] `npm run build` funciona localmente
- [ ] `npm run preview` mostra site corretamente
- [ ] GitHub Pages configurado para "GitHub Actions"
- [ ] Repositório é público ou você tem GitHub Pro
- [ ] Workflow tem permissões de escrita

### Comandos de Diagnóstico

```bash
# Verificar estrutura
ls -la

# Verificar configurações críticas
cat vite.config.ts | grep base
cat App.tsx | grep Router
ls -la public/.nojekyll
ls -la .github/workflows/deploy.yml

# Testar build
npm install
npm run build
npm run preview

# Ver logs do git
git status
git log --oneline -5
```

### Onde Buscar Ajuda

1. **Logs do GitHub Actions**
   - Actions → Deploy to GitHub Pages → build → logs

2. **Console do Navegador**
   - F12 → Console → procurar erros em vermelho

3. **Network Tab**
   - F12 → Network → procurar requisições 404

4. **Documentação Oficial**
   - [Vite - GitHub Pages](https://vitejs.dev/guide/static-deploy.html#github-pages)
   - [GitHub Pages Docs](https://docs.github.com/en/pages)

---

**Última atualização:** 18 de novembro de 2024

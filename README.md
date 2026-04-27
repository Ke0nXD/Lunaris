# 🌙 LUNARIS — Landing Page Premium

> **Seu projeto em outra órbita.**
> Landing page institucional premium para a Lunaris — agência de soluções web com identidade cósmica, animações fluidas e foco total em conversão via WhatsApp.

![Stack](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Framer](https://img.shields.io/badge/Framer_Motion-12-EF008F?logo=framer&logoColor=white)
![License](https://img.shields.io/badge/license-Proprietary-7C3AED)

---

## ✨ Sobre o projeto

Landing page **100% estática** (sem backend) construída com tema cósmico (lua, estrelas, planetas, órbitas) que converte visitantes em clientes via WhatsApp. Inclui:

- Header fixo com glassmorphism
- Hero com planeta animado + mockups de laptop/celular
- 5 cards de Soluções (Plataforma para Restaurantes em destaque)
- Carrossel de Templates Prontos (5 nichos)
- Stats de confiança + Portfólio (4 projetos) + Depoimentos
- 3 Planos (Start / Growth / Premium) + seção Suporte com astronauta
- Seção de venda da **Perplexity AI** (1 ano) com expansor "Mais Detalhes"
- CTA final impactante + Footer completo
- Botão flutuante WhatsApp (verde, com pulse)
- Background animado com estrelas piscando, nebulosas e linhas orbitais
- Layout 100% responsivo (mobile-first) e SEO-friendly

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | **React 19** (Create React App + CRACO) |
| Roteamento | react-router-dom v7 |
| Estilo | **Tailwind CSS 3** + tokens customizados (paleta Lunaris) |
| Animações | **Framer Motion 12** + animações CSS puras |
| Ícones | lucide-react |
| Componentes UI | shadcn/ui (Radix primitives) |
| Fontes | Unbounded (headings) + Manrope (body) — Google Fonts |
| Gerenciador | **yarn** (NÃO use npm) |

---

## 📋 Pré-requisitos

Antes de começar, garanta que tem instalado:

- **Node.js** 18+ ([nodejs.org](https://nodejs.org/))
- **Yarn** 1.22+
  ```bash
  npm install -g yarn
  ```
- **Git**

Verificação:
```bash
node -v   # v18+ esperado
yarn -v   # 1.22+ esperado
```

---

## 🚀 Instalação Local (Desenvolvimento)

### 1. Clonar / copiar o projeto

```bash
git clone <url-do-repo> lunaris
cd lunaris
```

> Se você está copiando os arquivos manualmente, certifique-se de copiar **toda a pasta `frontend/`**.

### 2. Instalar as dependências

```bash
cd frontend
yarn install
```

### 3. Configurar variáveis de ambiente

Crie ou ajuste o arquivo `frontend/.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:3000
WDS_SOCKET_PORT=3000
```

> Como a landing é estática, `REACT_APP_BACKEND_URL` não é usado no momento — pode deixar qualquer valor válido.

### 4. Rodar em modo desenvolvimento

```bash
yarn start
```

Abra: **http://localhost:3000**

Hot-reload está ativado: salve um arquivo e a página recarrega automaticamente.

---

## 📦 Build de Produção

```bash
cd frontend
yarn build
```

Isso gera a pasta **`frontend/build/`** com arquivos estáticos otimizados (HTML, CSS, JS minificados, com hashes para cache).

Para testar o build localmente:

```bash
npx serve -s build -l 5000
# acesse http://localhost:5000
```

---

## 🌐 Deploy Online

A pasta `build/` pode ser servida em **qualquer hospedagem estática**. Abaixo as opções mais comuns:

### Opção 1 — Vercel (recomendado, grátis)

1. Faça login em [vercel.com](https://vercel.com) com GitHub.
2. Importe o repositório.
3. **Root Directory**: `frontend`
4. **Build Command**: `yarn build`
5. **Output Directory**: `build`
6. Clique em **Deploy**.

Vercel detecta CRA automaticamente. Domínio grátis: `seu-projeto.vercel.app`.

### Opção 2 — Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import from Git**
2. **Base directory**: `frontend`
3. **Build command**: `yarn build`
4. **Publish directory**: `frontend/build`
5. **Deploy**

Adicione um arquivo `frontend/public/_redirects` para SPA routing:

```
/*    /index.html   200
```

### Opção 3 — GitHub Pages

```bash
cd frontend
yarn add --dev gh-pages
```

No `frontend/package.json` adicione:

```json
"homepage": "https://SEU-USUARIO.github.io/lunaris",
"scripts": {
  "deploy": "gh-pages -d build",
  "predeploy": "yarn build"
}
```

```bash
yarn deploy
```

### Opção 4 — Servidor próprio (VPS / Hostinger / DigitalOcean)

#### 4a. Build + Nginx

No servidor (Ubuntu/Debian):

```bash
sudo apt update && sudo apt install -y nginx nodejs npm
sudo npm install -g yarn

# Subir o código (via git clone ou rsync/scp)
cd /var/www
git clone <url-do-repo> lunaris
cd lunaris/frontend
yarn install
yarn build
```

Configure o Nginx em `/etc/nginx/sites-available/lunaris`:

```nginx
server {
    listen 80;
    server_name lunaris.com.br www.lunaris.com.br;

    root /var/www/lunaris/frontend/build;
    index index.html;

    # Compressão gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache de assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Ative e reinicie:

```bash
sudo ln -s /etc/nginx/sites-available/lunaris /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 4b. SSL grátis com Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d lunaris.com.br -d www.lunaris.com.br
```

#### 4c. Apache (alternativa ao Nginx)

`/etc/apache2/sites-available/lunaris.conf`:

```apache
<VirtualHost *:80>
    ServerName lunaris.com.br
    DocumentRoot /var/www/lunaris/frontend/build

    <Directory /var/www/lunaris/frontend/build>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # SPA fallback
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</VirtualHost>
```

```bash
sudo a2enmod rewrite
sudo a2ensite lunaris
sudo systemctl restart apache2
```

### Opção 5 — Docker

Crie `frontend/Dockerfile`:

```dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Runtime stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Crie `frontend/nginx.conf`:

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Build e run:

```bash
cd frontend
docker build -t lunaris .
docker run -d -p 80:80 --name lunaris lunaris
```

---

## ✏️ Personalização

Todo o conteúdo dinâmico está centralizado em **`frontend/src/lib/constants.js`**.

### Mudar o número do WhatsApp

```js
// frontend/src/lib/constants.js
export const WHATSAPP_NUMBER = "5511999999999";        // formato internacional, sem +
export const WHATSAPP_DISPLAY = "(11) 99999-9999";     // apenas para exibição
export const EMAIL = "contato@lunaris.com.br";
```

### Mudar serviços / templates / planos / depoimentos

Todos os arrays (`SERVICES`, `TEMPLATES`, `PORTFOLIO`, `TESTIMONIALS`, `PLANS`, `SUPPORT_FEATURES`) ficam no mesmo arquivo. Edite os textos, preços e imagens.

### Trocar imagens

As imagens vêm de Unsplash. Para usar imagens próprias:

1. Coloque na pasta `frontend/public/images/`
2. Referencie como: `image: "/images/meu-projeto.jpg"`

### Mudar a logo

Substitua a `LOGO_URL` em `constants.js` ou coloque sua logo em `frontend/public/logo.png` e use:
```js
export const LOGO_URL = "/logo.png";
```

### Atualizar oferta da Perplexity

`frontend/src/components/PerplexitySection.jsx`:
- Linha do `(valor)` — coloque o preço real (ex: `R$ 99`)
- Constante `LOREM_PLACEHOLDER` no topo — substitua pelo texto real de funções/benefícios
- Array `AI_MODELS` — adicione/remova modelos

### Cores / paleta

`frontend/tailwind.config.js`, seção `colors.lunaris`:

```js
lunaris: {
  bg: '#030108',         // fundo principal
  primary: '#7C3AED',    // roxo neon
  primaryHover: '#A78BFA',
  // ...
}
```

### Redes sociais (footer)

`frontend/src/components/Footer.jsx`, array de social — substitua `href: "#"` pelos links reais.

---

## 📁 Estrutura do Projeto

```
lunaris/
└── frontend/
    ├── public/
    │   ├── index.html              # HTML base (Google Fonts, meta tags)
    │   └── images/                 # (opcional) imagens próprias
    ├── src/
    │   ├── App.js                  # raiz que monta todas as seções
    │   ├── App.css
    │   ├── index.css               # tokens, utilitários, animações
    │   ├── index.js
    │   ├── lib/
    │   │   ├── constants.js        # 🎯 todo o conteúdo da página
    │   │   └── utils.js
    │   └── components/
    │       ├── CosmicBackground.jsx    # estrelas + nebulosas animadas
    │       ├── Header.jsx              # header fixo
    │       ├── Hero.jsx                # hero com planeta + mockups
    │       ├── Services.jsx            # 5 cards de soluções
    │       ├── Templates.jsx           # carrossel de templates
    │       ├── Portfolio.jsx           # stats + projetos + depoimentos
    │       ├── Plans.jsx               # 3 planos + seção suporte
    │       ├── PerplexitySection.jsx   # oferta Perplexity AI
    │       ├── FinalCTA.jsx            # CTA final
    │       ├── Footer.jsx
    │       ├── WhatsAppFloat.jsx       # botão flutuante
    │       └── ui/                     # shadcn/ui components
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── craco.config.js
    └── .env
```

---

## 🧪 Comandos úteis

```bash
yarn start          # dev server (port 3000)
yarn build          # build de produção
yarn test           # testes (não há suíte ainda)
```

---

## 🐛 Solução de Problemas

| Problema | Solução |
|---|---|
| `command not found: yarn` | `npm install -g yarn` |
| Erro de porta 3000 ocupada | `PORT=3001 yarn start` |
| Build falha por memória | `NODE_OPTIONS=--max-old-space-size=4096 yarn build` |
| Imagens externas não carregam | Verifique CSP/CORS; troque por imagens locais em `public/images/` |
| Animações travadas em mobile antigo | Reduza `density` em `<CosmicBackground density={60} />` no `App.js` |
| Página em branco no deploy | Configure SPA fallback (`/* → /index.html`) no servidor |
| Fontes não aparecem | Verifique conexão com Google Fonts ou hospede localmente |

---

## 🔍 SEO

Já configurado em `frontend/public/index.html`:

- `<title>` e `<meta description>` em PT-BR
- Open Graph tags (`og:title`, `og:description`, `og:type`)
- `lang="pt-BR"`
- `theme-color` para mobile

**Recomendado adicionar no deploy:**

1. **Favicon** — substitua `frontend/public/favicon.ico` pela logo Lunaris
2. **OG image** — crie uma imagem 1200x630px e adicione:
   ```html
   <meta property="og:image" content="https://seudominio.com/og-image.jpg" />
   ```
3. **Sitemap** (`public/sitemap.xml`) e **robots.txt** (`public/robots.txt`)
4. **Google Search Console** — verifique seu domínio
5. **Google Analytics / Tag Manager** — adicione no `<head>` do `index.html`

---

## ⚡ Performance

- ✅ Imagens com `loading="lazy"`
- ✅ CSS com `backdrop-filter` otimizado
- ✅ Animações via `transform/opacity` (GPU)
- ✅ Build minificado com tree-shaking
- ✅ Fontes com `&display=swap`

Para auditar: rode **Lighthouse** no Chrome DevTools (esperado 90+ em todas as métricas).

---

## 🔒 Segurança

- Não há backend → superfície de ataque mínima
- Sem cookies, sem coleta de dados
- Links externos com `rel="noopener noreferrer"`
- HTTPS obrigatório em produção (use Let's Encrypt ou Cloudflare)

---

## 📞 Suporte

- WhatsApp: configurado em `constants.js`
- Email: configurado em `constants.js`

---

## 📝 Licença

Proprietário © Lunaris. Todos os direitos reservados.

---

**Feito com 🌙 para colocar marcas em outra órbita.**

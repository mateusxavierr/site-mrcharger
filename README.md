# Mr. Charger — site

Landing em React + Vite + Tailwind.

## Desenvolvimento

```bash
npm install
npm run dev
```

## GitHub Pages

O **`index.html` na raiz do repo aponta para `/src/main.jsx`** (modo desenvolvimento). O GitHub Pages **não** roda o Vite; é preciso publicar a pasta **`dist`** depois do `npm run build`.

1. No repositório: **Settings → Pages**.
2. Em **Build and deployment**, em **Source**, escolha **GitHub Actions** (não “Deploy from a branch”).
3. Faça push na `main`; o workflow `.github/workflows/deploy-github-pages.yml` gera o build e publica o `dist`.

Se o repositório tiver **outro nome**, altere `GH_PAGES_BASE` em `vite.config.js` para `'/nome-do-repo/'`.

URL típica: `https://mateusxavierr.github.io/site-mrcharger/`

# Site da DS2 Corretora de Seguros

Site de uma página feito em Vite + React + Tailwind v4 + shadcn/ui. O visual segue um guia de design editorial (plano, títulos grandes em maiúsculas; o guia fica fora do repositório) com as cores da DS2 (Silver/Onyx). O coral aparece só na seção da Daia.

## Onde mexer

| O quê | Arquivo |
|---|---|
| Telefone, e-mail, Instagram, menu, seguradoras, telefones da Assistência 24h | `src/data.ts` |
| Cores e fontes | `src/index.css` (bloco `:root`) |
| Texto de cada seção | `src/sections/*.tsx` |
| Topo e menu | `src/components/Topo.tsx` |
| Imagens (logos, Daia, favicon) | `public/img/` |

## Rodar no computador

```powershell
npm install
npm run dev
```

O site abre em http://localhost:5173.

## Publicar

O GitHub Actions (`.github/workflows/deploy.yml`) gera e publica o site a cada push na branch `main`. No repositório, em Settings → Pages, escolha **Source: GitHub Actions**.

**Na virada do domínio:** crie `public/CNAME` com `www.ds2seguros.com.br` (o arquivo antigo está em `_previa-antiga/CNAME`) e configure o domínio em Settings → Pages.

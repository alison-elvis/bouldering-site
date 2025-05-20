# Bouldering Experience

Esta é uma página sobre bouldering, inspirada em um curso da playlist no YouTube de Kevin Powell. O projeto foi construído com **React** utilizando **Vite** para gerenciamento do build e **React Router DOM** para navegação. O site foi desenvolvido para ser hospedado no GitHub Pages.

---

## Funcionalidades

- **Home:**  
  Exibe uma introdução ao bouldering com imagens e explicações sobre o que é e por que praticá-lo.

- **Getting Started:**  
  Página com dicas e orientações para começar a praticar bouldering, incluindo passos simples e informações sobre segurança.

- **Navegação:**  
  Gerenciada pelo React Router DOM, facilitando a transição entre as páginas.

---

## Tecnologias Utilizadas

- **React:** Biblioteca para construção da interface de usuário.  
- **Vite:** Ferramenta de build e desenvolvimento rápida e moderna.  
- **React Router DOM:** Para roteamento e navegação entre as páginas da aplicação.  
- **GitHub Pages:** Plataforma de hospedagem da página.

---

## Estrutura do Projeto

```
bouldering-experience/
├── public/
│   └── index.html       // Template HTML para injetar a aplicação React
├── src/
│   ├── assets/          // Imagens e outros recursos
│   ├── components/      // Componentes compartilhados (ex.: Navbar)
│   ├── pages/           // Páginas da aplicação (Home, GettingStarted)
│   ├── App.jsx          // Componente principal, com definição de rotas
│   └── main.jsx         // Ponto de entrada da aplicação React
├── package.json         // Configurações do projeto e dependências
└── README.md            // Documentação do projeto
```
---

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/alison-elvis/bouldering-site.git
   ```

2. **Navegue até a pasta do projeto:**

   ```bash
   cd bouldering-site
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

---

## Execução Local

Para rodar o projeto em modo de desenvolvimento, execute:

```bash
npm run dev
```

Abra o navegador e acesse [http://localhost:5173](http://localhost:5173) (ou a porta especificada pelo Vite) para visualizar a aplicação.

---

## Build para Produção

Para gerar a versão otimizada do projeto, utilize o comando:

```bash
npm run build
```

A versão final será gerada na pasta `dist`.

---

## Publicação no GitHub Pages

1. **Instale o pacote `gh-pages` (se ainda não estiver instalado):**

   ```bash
   npm install gh-pages --save-dev
   ```

2. **Configure o `package.json`:**  
   Adicione o campo `homepage` com a URL do GitHub Pages (ex.: `https://seu-usuario.github.io/seu-repositorio`) e os scripts de deploy:

   ```json
   {
     "homepage": "https://seu-usuario.github.io/seu-repositorio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Realize o deploy com o comando:**

   ```bash
   npm run deploy
   ```

Após a conclusão, a página estará disponível no endereço definido no campo `homepage`.

---

## Créditos

- **Kevin Powell:** Inspirador e responsável pelo conteúdo da playlist que motivou este projeto.  
- **Imagens e Conteúdo:** Os recursos visuais e textos contidos na página são provenientes dos materiais utilizados no curso. Caso haja qualquer questão de direitos autorais, favor entrar em contato.

---

[bouldering](https://alison-elvis.github.io/bouldering-site)

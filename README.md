# 📚 Livraria Clássicos – Frontend

Interface web para gerenciamento de livros, desenvolvida com React e Vite. Permite cadastrar, editar, excluir e buscar livros, com suporte a upload de imagem e layout responsivo.

## 🚀 Funcionalidades

- 📖 Listagem de livros com visual moderno
- 🔍 Barra de busca com filtro por título, autor, gênero e editora
- 📝 Formulário de cadastro e edição com preview de imagem
- 🗑️ Exclusão com confirmação
- ✅ Alertas visuais para sucesso e erro
- 📱 Layout responsivo para dispositivos móveis

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- CSS modularizado por componente
- Fetch API para comunicação com backend

## 📁 Estrutura de pastas
LIVRARIA-FRONTEND/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── logo.png
│   └── icone.png
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── services/
│   │   └── api.js
│   ├── components/
│   │   ├── Alert.jsx
│   │   ├── Botao.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── LivroCard.jsx
│   │   ├── LivroForm.jsx
│   │   ├── LivroList.jsx
│   │   └── SearchBar.jsx
│   ├── styles/
│   │   ├── alert.css
│   │   ├── botao.css
│   │   ├── cards.css
│   │   ├── footer.css
│   │   ├── form.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── livrolist.css
│   │   └── searchbar.css


## 📦 Instalação e execução

1. Clone o repositório:
   git clone https://github.com/seu-usuario/livraria-frontend.git
  
npm install

npm run dev

- Acesse no navegador:
http://localhost:5173

🔗 Backend
Este frontend se comunica com uma API REST disponível em:
http://localhost:3000/api/livros
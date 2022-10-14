import moviesLibImg from "./imgs/movies_lib.jpeg";
import moviesLibGif from "./videos/movies_lib.gif";
import shoppingCartImg from "./imgs/shopping-cart.jpeg";
import shoppingCartGif from "./videos/shopping-cart.gif";
import trybewalletImg from "./imgs/trybewallet.jpeg";
import trybewalletGif from "./videos/trybewallet.gif";
import trybewartsImg from "./imgs/trybewarts.jpeg";
import trybewartsGif from "./videos/trybewarts.gif";
import pixelArtImg from "./imgs/pixel-art.jpeg";
import pixelArtGif from "./videos/pixel-art.gif";
import tryunfoImg from "./imgs/tryunfo.jpeg";
import tryunfoGif from "./videos/tryunfo.gif";
import trybetunesImg from "./imgs/trybetunes.jpeg";
import trybetunesGif from "./videos/trybetunes.gif";
import recipesAppImg from "./imgs/recipes-app.jpeg";
import recipesAppGif from "./videos/recipes-app.gif";

export const PROJECTS = [
  {
  id:1,
  name:"Recipes App",
  gif: recipesAppGif,
  image: recipesAppImg,
  technologies: ["javascript", "html", "css", "git", "react", "redux"],
  deploy: "https://recipes-app-sigma-three.vercel.app/",
  repository: "https://github.com/Levyhb/recipes-app",
  describe:"O projeto Recipes App consiste em uma aplicação em React.js que simula um aplicativo para consulta de receitas de comidas e bebidas, com um design feito somente para mobile. Para buscar as informações de cada receita, foi necessário fazer uma requisição á API de comidas TheMealDB e á API de bebidas CockTailDB.",
  },
  {
    id: 2,
    name: "Movies_Lib",
    gif: moviesLibGif,
    image: moviesLibImg,
    technologies: ["javascript", "html", "css", "git", "react"],
    deploy: "https://project-movieslib.vercel.app/",
    repository: "https://github.com/Levyhb/project-movieslib",
    describe: "O projeto MoviesLib consiste numa aplicação onde precisei fazer uma requisição á API do TMDB para exibir catálogo de filmes, onde é possível pesquisar um filme, ver eles por categorias e ver os detalhes do filme."
  },
  {
    id: 3,
    name: "Trybetunes",
    gif: trybetunesGif,
    image: trybetunesImg,
    technologies: ["javascript", "html", "css", "git", "react", "bootstrap"],
    deploy: "https://levyhb.github.io/project-trybetunes/",
    repository: "https://github.com/Levyhb/project-trybetunes",
    describe: "O trybetunes consiste em um projeto onde tive que criar uma aplicação para pesquisar e listar álbuns e músicas, através de uma requisição á API do iTunes.",
  },
  {
    id: 4,
    name: "Shopping Cart",
    gif: shoppingCartGif,
    image: shoppingCartImg,
    technologies: ["javascript", "html", "css", "git", "jest", "bootstrap"],
    deploy: "https://levyhb.github.io/project-shopping-cart/",
    repository: "https://github.com/Levyhb/project-shopping-cart",
    describe: "O projeto Shopping Cart consiste em uma aplicação onde é simulado um carrinho de compra, com um catálogo gerado através da API do mercado livre."
  },
  {
    id: 5,
    name: "Tryunfo",
    gif: tryunfoGif,
    image: tryunfoImg,
    technologies: ["javascript", "html", "css", "git", "react", "bootstrap"],
    deploy: "https://levyhb.github.io/project-tryunfo/",
    repository: "https://github.com/Levyhb/project-tryunfo",
    describe: "Projeto Tryunfo consiste em desenvolver um gerador de cartas com uso de estados de componentes em React, assim como captura de eventos e formulários.",
  },
  {
    id: 6,
    name: "Trybewallet",
    gif: trybewalletGif,
    image: trybewalletImg,
    technologies: ["javascript", "html", "css", "git", "react", "redux", "bulma"],
    deploy: "https://project-trybewallet-nu.vercel.app/",
    repository: "https://github.com/Levyhb/project-trybewallet",
    describe: "TrybeWallet é uma aplicação em React.js com Redux, que consiste em um sistema de controle de gastos, onde é possível adicionar ou remover uma despesa. Para esse projeto foi necessário fazer uma requisição a uma API de cotação de moedas.",
  },
  {
    id: 7,
    name: "Pixel art",
    gif: pixelArtGif,
    image: pixelArtImg,
    technologies: ["javascript", "html", "css", "git"],
    deploy: "https://levyhb.github.io/JavaScript-projects/meus-projetos/Pixel-Art/index.html",
    repository: "https://github.com/Levyhb/JavaScript-projects",
    describe: "Um projeto de pixel art, construído com javascript, html e css.",
  },
  {
    id: 8,
    name: "Trybewarts",
    gif: trybewartsGif,
    image: trybewartsImg,
    technologies: ["javascript", "html", "css", "git", "bootstrap"],
    deploy: "https://levyhb.github.io/project-trybewarts/",
    repository: "https://github.com/Levyhb/project-trybewarts",
    describe: "O projeto Trybewarts é um formulário responsivo com temática inspirada em Harry Potter.",
  },
];

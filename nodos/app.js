let dn = document;

// Suponiendo que container es una clase
let padre = document.querySelector(".container");

let node = document.createElement("h1");
node.textContent = "titulo de segundo nivel";
padre.appendChild(node);

let list = document.querySelector("#list");

let html = document.createElement("li");
let js = document.createElement("li");
let css = document.createElement("li");

html.classList.add("item");
js.classList.add("item");
css.classList.add("item");

html.textContent = "html";
js.textContent = "js";
css.textContent = "css";

list.append(html, js, css);

let card = document.querySelector(".card");
let lista_card = document.querySelector("#list");

let titulo = document.createElement("h2");
titulo.textContent = "titulo de la card";
card.insertBefore(titulo, lista_card);

// insertAdjacentElement
let beforebegin = document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent = "nuevo contenido de lista";

let afterbegin = document.createElement("li");
afterbegin.classList.add("item");
afterbegin.textContent = "texto ubicado al inicio de lista";

let beforeend = document.createElement("li");
beforeend.classList.add("item", "before");
beforeend.textContent = "nuevo contenido de lista";

let afterend = document.createElement("li");
afterend.classList.add("item");
afterend.textContent = "nuevo contenido de lista";

lista_card.insertAdjacentElement("beforebegin", beforebegin);
lista_card.insertAdjacentElement("beforeend", beforeend);
lista_card.insertAdjacentElement("afterbegin", afterbegin);
lista_card.insertAdjacentElement("afterend", afterend);


let card_dias = document.querySelector(".dias");

const dias = [
  { id: 1, nombre: "lunes", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
  { id: 2, nombre: "martes", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
  { id: 3, nombre: "miércoles", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
  { id: 4, nombre: "jueves", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
  { id: 5, nombre: "viernes", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
  { id: 6, nombre: "sábado", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
  { id: 7, nombre: "domingo", img: "https://picsum.photos/640/360", parrafo: "Lorem ipsum..." },
];

dias.map(({ nombre, img, parrafo }) => {
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  let card_body = document.createElement("div");
  let imagen = document.createElement("img");
  let p = document.createElement("p");

  card.classList.add("card");
  card_header.classList.add("card__header");
  card_titulo.classList.add("card__title");
  card_body.classList.add("card__body");
  imagen.classList.add("card__img");
  p.classList.add("card__paragraph");

  imagen.setAttribute("src", img);
  imagen.setAttribute("alt", nombre);

  card_titulo.textContent = nombre;
  p.textContent = parrafo;

  card_body.append(imagen, p);
  card_header.append(card_titulo);
  card.append(card_header, card_body);

  card_dias.append(card);
});

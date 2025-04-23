let dn = document;

let padre = document.querySelector("container");
let node = document.createElement("h1");
// let text = document.createTextNode("palabra del node de text ");

// node.textContent = "titulo  de segundo nivel";

// padre.appendChild(node);
// padre.appendChild(text);

let list = document.querySelector("#list");

let html = document.createElement("li"); /**crear el elemento */
let js = document.createElement("li");
let css = document.createElement("li");

html.classList.add("item");
js.classList.add("item");
css.classList.add("item");

html.textContent = "html";
js.textContent = "js";
css.textContent = "css";

list.append(html, js, css); /**mostrar */

let card = document.querySelector(".card");
let lista_card = document.querySelector("#list");
let titulo = document.createElement("h2");
titulo.textContent = "titulo de la card";

card.insertBefore(titulo, lista_card);

let beforebegin = document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent = "nuevo contenido de lista ";

let afterbegin = document.createElement("li");
afterbegin.classList.add("item");
afterbegin.textContent = "texto ubicado al inicio de lista";

let beforeend = document.createElement("li");
beforeend.classList.add("item", "before");
beforeend.textContent = "uevo contenido de lista";

let afterend = document.createElement("li");
afterend.classList.add("item");
afterend.textContent = "nuevo contenido de lista";

lista_card.insertAdjacentElement("beforebegin", beforebegin);
lista_card.insertAdjacentElement("beforeend", beforeend);
lista_card.insertAdjacentElement("afterbegin", afterbegin);
lista_card.insertAdjacentElement("afterend", afterend);

let dia = document.querySelector("dias");

const dias = [
  {
    id: 1,
    nombre: "lunes",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },

  {
    id: 2,
    nombre: "martes",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },
  {
    id: 3,
    nombre: "miercoles",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },
  {
    id: 4,
    nombre: "jueves",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },
  {
    id: 5,
    nombre: "viernes",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },
  {
    id: 6,
    nombre: "sabados",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },
  {
    id: 7,
    nombre: "domingos",
    img: "https://picsum.photos/640/360",
    parrafo: "lorem insump dolor sit ammet consstee",
  },
];

dias.map(({ nombre, img, parrafo }) => {
  /**crear elementos */
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  let card_body = document.createElement("div");
  let imagen = document.createElement("img");
  let p = document.createElement("p");

  /**agregar elemento */

  card.classList.add("card");
  card_header.classList.add("card__header");
  card_titulo.classList.add("card__title");
  card_body.classList.add("card__body");
  imagen.classList.add("card__img");
  p.classList.add("card__paragraph");

  /**administrar */
  imagen.setAttribute("src", img);
  imagen.setAttribute("alt", nombre);
  /**unir los elemenos */

  card_titulo.textContent = nombre;
  p.textContent = parrafo;
  card_body.append(imagen, p);
  card_header.append(card_titulo);
  card.append(card_header);
  card.append(card_body);
  card_dias.append(card);
});

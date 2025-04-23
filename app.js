let win = window;
let dn = document;
let p =
  document.querySelectorAll(
    "p"
  ); /**definod una variable y le asigno  document.querySelector("traer el selector") */

let formulario = dn.forms; /**mostrar los que hay en total */
let imagenes = dn.images;
let scrip = dn.scripts;
let lista = document.querySelectorAll("ul.list>li.item"); /**ruta css */
// let cards = document.querySelectorAll("div.cards>div.cards");

console.log(lista); /** dn. para imprimir el principa*/
console.clear();
// let elementos = document.querySelectorAll("elemento2");

// elementos.textcontec = "  ";
// elementos.innerHTML = "<p>texto</p>";

setTimeout(() => {
  let body = document.querySelector("body");
  body.classList.add("bg_red");
  console.log(classList);
}, 5000);

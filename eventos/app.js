/**importar  */

import { validacion } from "./modulo.js";
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name=nombre]');
const apellido = document.querySelector('[name=apellido]');
const telefono = document.querySelector('[name=telefono]');
const documento = document.querySelector('[name=documento]');
const usuario = document.querySelector('[name=usuario]');
const contrasena = document.querySelector('[name=contrasena]');
const boton = document.querySelector(`#btn_validar`);
const politica = document.querySelector(`#politica`)
const usuarios = document.querySelector(`#usuarios`)





const validar = (event) => {
  event.preventDefault();
  let mensaje = "ingrese correctamente: ";


  if (nombre.value === "") {
    mensaje += " nombre";
    const spam = document.createElement(`span`);
    nombre.classList.add("color-rojo");
    spam.textContent = "el nombre es obligatorio";
    nombre.insertAdjacentElement(`afterend`, spam);
    nombre.focus();


  }
  if (apellido.value === "") {
    mensaje += ", apellido";
    const spam = document.createElement(`span`);
    apellido.classList.add("color-rojo");
    spam.textContent = "el apellido  es obligatorio";
    apellido.insertAdjacentElement(`afterend`, spam);
    apellido.focus();
  }
  if (telefono.value === "") {
    mensaje += ", telefono";
    const spam = document.createElement(`span`);
    telefono.classList.add("color-rojo");
    spam.textContent = "el telefono es obligatorio";
    telefono.insertAdjacentElement(`afterend`, spam);
    telefono.focus();

  }
  if (documento.value === "") {
    mensaje += ", documento";
    const spam = document.createElement(`span`);
    documento.classList.add("color-rojo");
    spam.textContent = "el documento es obligatorio";
    documento.insertAdjacentElement(`afterend`, spam);
    documento.focus();
  }
  if (usuario.value === "") {
    mensaje += ", usuario";
    const spam = document.createElement(`span`);
    usuario.classList.add("color-rojo");
    spam.textContent = "el usuario es obligatorio";
    usuario.insertAdjacentElement(`afterend`, spam);
    usuario.focus();

  }
  if (contrasena.value === "") {
    mensaje += ", contraseña";
    const spam = document.createElement(`span`);
    contrasena.classList.add("color-rojo");
    spam.textContent = "la contraseña es obligatorio";
    contrasena.insertAdjacentElement(`afterend`, spam);
    contrasena.focus();
  }

  if (mensaje !== "ingrese correctamente: ") {
    alert(mensaje);
  }
};



const limpiar = (event) => {
  if (event.target !== "") {
    event.target.classList.remove(`color-rojo`)
    if (event.target.nextElementSibling) {
      event.target.nextElementSibling
    }
  }
}
/** */
addEventListener("DOMContentLoaded", (event) => {
  if (!politica.checked) {
    boton.setAttribute('disabled', '');
  }
})

/**mensaje de verificacion de check  */
politica.addEventListener(`change`, () => {
  if (politica.checked) {
    boton.removeAttribute('disabled');
  } else {
    boton.setAttribute(`disabled`, '');
  }
})



const letras = (event) => {
  const regexp = /^[a-zA-Z]$/;
  if (!regexp.test(event.key)) {
    event.preventDefault();
  }
};

//solo numeros y el limite es de 10 digitos
const telef = (event) => {
  if (!/^\d$/.test(event.key) || telefono.value.length >= 10) {
    event.preventDefault();
  }
};

//  eventos
formulario.addEventListener('submit', validacion);
nombre.addEventListener('keydown', letras, limpiar);
apellido.addEventListener('keydown', letras, limpiar);
telefono.addEventListener('keydown', telef, limpiar);


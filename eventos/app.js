
const formulario = document.querySelector('form');
const nombre = document.querySelector('[name=nombre]');
const apellido = document.querySelector('[name=apellido]');
const telefono = document.querySelector('[name=telefono]');
const documento = document.querySelector('[name=documento]');
const usuario = document.querySelector('[name=usuario]');
const contrasena = document.querySelector('[name=contrasena]');


const validar = (event) => {
  event.preventDefault();
  let mensaje = "ingrese correctamente: ";
  
  if (nombre.value === "") {
    mensaje += " nombre";
    nombre.focus();
  } else if (apellido.value === "") {
    mensaje += ", apellido";
    apellido.focus();
  } else if (telefono.value === "") {
    mensaje += ", telefono";
    telefono.focus();
  } else if (documento.value === "") {
    mensaje += ", documento";
    documento.focus();
  } else if (usuario.value === "") {
    mensaje += ", usuario";
    usuario.focus();
  } else if (contrasena.value === "") {
    mensaje += ", contraseña";
    contrasena.focus();
  }


  if (mensaje !== "ingrese correctamente: ") {
    alert(mensaje);
  }
};


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
formulario.addEventListener('submit', validar);
nombre.addEventListener('keydown', letras);
apellido.addEventListener('keydown', letras);
telefono.addEventListener('keydown', telef);

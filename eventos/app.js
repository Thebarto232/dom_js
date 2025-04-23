let dn = document;

const apellido = document.querySelector(`[name="apellido"]`);
const telefono = document.querySelector(`[name="telefono"]`);
const documento = document.querySelector(`[name="documento"]`);
const usuario = document.querySelector(`[name="usuario"]`);
const catrasena = document.querySelector(`[name="catrasena"]`);

const validar = (event) => {
  event.preventDefault();
  if (nombre.value == "") {
    alert("llene ese nombre");
    nombre.focus();
  }
  formulario.addEventListener(`submit`, validar);
};

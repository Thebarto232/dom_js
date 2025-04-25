export const validacion = (recibir) => {
  recibir.preventDefault();
  console.log(recibir.target.children);

  const campos = [...recibir.target].filter((elemento) => {
    if (elemento.hasAttribute(`required`)) {
      return elemento;
    }
  })
  campos.forEach(campo => {
    if (campo.value === "") {
      campo.classList.add(`color-rojo`)
      const spam = document.createElement(`span`)
      spam.textContent = "el usuario es obligatorio";
      campo.insertAdjacentElement(`afterend`, spam);

    }

    switch (campo, tagname) {
      case `INPUT`:
        console.log(campo.type);
        break;

      default:
        break;
    }
    if (campo.value === "") {
      campo.classList.add(`error`)
    }

  });



}

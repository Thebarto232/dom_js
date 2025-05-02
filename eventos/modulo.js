export const validacion = (recibir) => {
  recibir.preventDefault();
  console.log(recibir.target.children);

  let obj = {};

  /** recorrer el atributo */
  const campos = [...recibir.target].filter((elemento) => {
    if (elemento.hasAttribute(`required`)) {
      return elemento;
    }
  })

  const radios = [...campos].filter((elemento) => {
    return elemento.type === `radio`
  });

  const recorre_radio = radios.find((radio) => radio.checked) || [];
  console.log(recorre_radio);
  if (recorre_radio.length === 0) {
    obj[radios[0].name] = "";
  }
  else {
    obj[radios.name] = recorre_radio.value;
  }
  /**------------ */
  const checkep = [...campos].filter((elemento) => {
    return elemento.type === `checkbox`
  })

  const recorre_check = checkep.filter((checkbox) => checkbox.checked);
  console.log(recorre_check);
  if (recorre_check.length === 0) {
    obj[checkep.label] = "";
  }
  else {
    obj['lenguajes'] = recorre_check.map((checkep) => checkep.value);
  }






  /** */
  campos.forEach(elemento => {
    if (elemento.nextElementSibling) {
      elemento.nextElementSibling.remove();
      elemento.classList.remove(`color-rojo`)
      console.log(elemento.nextElementSibling);

    }


    switch (elemento.tagName) {
      case `INPUT`:
        if (elemento.value === "") {
          elemento.classList.add(`color-rojo`)
          const spam = document.createElement(`span`)
          spam.textContent = "el usuario es obligatorio";
          elemento.insertAdjacentElement(`afterend`, spam);
        }
        break;

      case `SELECT`:

        if (elemento.value === "") {
          elemento.classList.add(`color-rojo`)
          const spam = document.createElement(`span`)
          spam.textContent = "el usuario es obligatorio";
          elemento.insertAdjacentElement(`afterend`, spam);
        }



        break


      case `#btn_validar`:
        if (elemento.value === "") {
          elemento.classList.add(`error`)
        }
      case `#genero`:
        if (elemento.value === "") {


        }


      default:

    }
    // console.log(elemento.tagName);






    obj[elemento.name] = elemento.name == `ciudades` ? elemento.option
    [elemento.selectedIndex].text : elemento.value;


  });
  console.log(obj);




}

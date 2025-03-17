/**
 * indexOF
 */

 /**
  * LA función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
  */

 let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"];
 let pezPosicion = muchos_peces.indexOf("Nemo")
 console.log("Nemo está en la posición: " + pezPosicion);

 /**
  * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
  * Sucede porque el string es "Estrella" con mayúsculas y abajo está escrito con minúsculas y Javascript es case sensitive (tiene en cuenta mayúsculas y minúsculas). Si escribes un string que no está en el array indexOf te devuelve -1.
  */

  let pezPosicion2 = muchos_peces.indexOf("estrella")
  console.log("Estrella está en la posición: " + pezPosicion2);

  

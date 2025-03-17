/**
 * Poniéndolo todo junto
 */

/**
 * Ejecuta el código.
 * La variable 'pezEncontrado' acabará valiendo true si encontramos 
 * Sin embargo devuelve false. Hay DOS errores:
 *
 * 1. Un error lógico; que hace que el código no funcione como esperamos, puesto que "Estrella" SI está en el array de peces
 *
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 */


let listaPeces = ["Dory", "Nemo", "Shipho", "Estrella"];
let pezBuscado = "Estrella";
let pezEncontrado = false;
let i = 0;

// pezEncontrado és "false".
// El bucle s'executarà mentre pezEncontrado sigui fals, i "i" estigui dins de l'array (posicions 0 a 3). Si pezEncontrado és "true", el bucle s'aturarà. També s'aturarà quan "i" arribi a listaPeces.length -1 (3).
// listaPeces.length = 4 
// -1 serien 3
// Si i és més petit de 3, el bucle no recorrerà l'array fins a "Estrella" i per tant la resposta serà false perquè el bucle haurà recorregut l'array dels índex 0 a 2

while (!pezEncontrado && i < listaPeces.length - 1) {
  if (listaPeces[i] == pezBuscado) {
    pezEncontrado = true;
  }
  i++;
}

console.log("He encontrado al pez?: " + pezEncontrado);

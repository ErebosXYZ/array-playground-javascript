/**
 * Dado el array de peces
 */

let peces = ["Dory", "Nemo", "Estrella"];

/**
 * Modifica la primera posición del array 'peces'. Cambia a "Dory" por "Tory". 
 */

peces = peces.with(0, "Tory");

console.log(peces); // ["Tory", "Nemo", "Estrella"]

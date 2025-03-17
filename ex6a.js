/**
 * Convertir los nombres de los jugadores a mayúsculas
 * 
 * En Mario Party, cuando un jugador gana una estrella, grita su nombre con emoción.
 * Dado un array de nombres de jugadores, devuelve un nuevo array donde todos los nombres están en mayúsculas.
 * 
 * shoutPlayerNames recorre l'array players i en converteix cada string a majúscules
 */

function shoutPlayerNames(players) {
    // RECUERDA: PRIMERO escribe lo que hay que hacer con tus palabras. Luego, viene el código
    let arrayUpperCase = [];
    // la variable arrayUpperCase es mostra entre []
    // Codificar aquí....
    arrayUpperCase = players.map((players) => players.toUpperCase());
    // perquè arrayUpperCase retorni els arrays en majúscules, utilitzem el mètode map que serveix per retornar arrays nous a partir dels elements de l'array original. En aquest cas, players és substituït per players en majúscules
    return arrayUpperCase;
    // retornem la variable resultant

}

// Ejemplo de uso:
console.log(shoutPlayerNames(["Mario", "Luigi", "Peach"])); // ["MARIO", "LUIGI", "PEACH"]
console.log(shoutPlayerNames(["Bowser", "Yoshi", "Toad"])); // ["BOWSER", "YOSHI", "TOAD"]
console.log(shoutPlayerNames(["daisy", "wario", "waluigi"])); // ["DAISY", "WARIO", "WALUIGI"]
console.log(shoutPlayerNames(["rosalina"])); // ["ROSALINA"] -> Un solo jugador también grita

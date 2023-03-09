function countVowels(palabra, otraPalabra) {

    let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
    let contador = 0

    for (let letra = 0; letra < palabra.length; letra++) {
        if (vocales.indexOf(palabra[letra]) !== -1) {
            contador++;
        };
    };

    for (let letra2 = 0; letra2 < otraPalabra.length; letra2++) {
        if (vocales.indexOf(otraPalabra[letra2]) !== -1) {
            contador++;
        };
    };

    return contador;

};

console.log(countVowels("calor", "sal")); // 3
console.log(countVowels("la", "le")); // 2
console.log(countVowels("crwth", "crwth")); // 0 https://en.wikipedia.org/wiki/Crwth

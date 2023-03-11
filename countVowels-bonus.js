esVocal = (letra) => {
    let vocales = "aeiouáéíóú"
    return vocales.includes(letra);
};

countVowels = (palabra, otraPalabra) => {
    let contador = 0

    for (let i of palabra) {
        if (esVocal(i)) {
            contador++;
        };
    };

    for (let x of otraPalabra) {
        if (esVocal(x)) {
            contador++;
        };
    };
    return contador;
};

console.log(countVowels("calor", "sal")); // 3
console.log(countVowels("la", "le")); // 2
console.log(countVowels("crwth", "crwth")); // 0 https://en.wikipedia.org/wiki/Crwth

function countVowels(palabra) {

        let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
        let contador = 0

        for (let letra = 0; letra < palabra.length; letra++) {
                if (vocales.indexOf(palabra[letra]) !== -1) {
                        contador++;
                };
        };

        return contador;

};

console.log(countVowels("calor")); // 2
console.log(countVowels("la")); // 1
console.log(countVowels("crwth")); // 0 https://en.wikipedia.org/wiki/Crwth
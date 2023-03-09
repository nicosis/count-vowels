function countVowels(palabra) {
        // Defino una variable 'string' con los valores para comparar luego en un bucle
        const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
        // Defino una variable 'number' donde se almacenara la suma de vocales
        let contador = 0
        // iniciamos un bucle que recorrera cada letra de la palabra entregada en el parametro
        for (let letra = 0; letra < palabra.length; letra++) {
                // con el metodo indexOf() determinamos si alguna de las letras del parametro es igual a alguna de las letras definidas en la variable 'vocales'. Sabemos que si devuelve -1 es porque no fue encontrada
                if (vocales.indexOf(palabra[letra]) !== -1) {
                        // cada vez que se cumple la condicion, el contador se incrementa en uma una unidad
                        contador++;
                };
        };
        // retornamos el resultado de la variable 'contador'
        return contador;

};

console.log(countVowels("calor")); // 2
console.log(countVowels("la")); // 1
console.log(countVowels("crwth")); // 0 https://en.wikipedia.org/wiki/Crwth

let i = 0
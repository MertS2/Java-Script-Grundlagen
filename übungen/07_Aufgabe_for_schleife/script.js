/* Aufgabenstellung 1: Summe der Elemente eines Arrays
Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen und zurückzugeben.

    Test: */
function sumArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
};



console.log(sumArray([3, 7, 1, 4])); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)




/* Aufgabenstellung 2: Ausgabe einer Zahlenreihe
Implementiere eine for-Schleife, um die Zahlen von 1 bis n in aufsteigender Reihenfolge auszugeben.

    Test: */
function printNumbers(number) {
    for (let i = 1; i < number + 1; i++) {
        console.log(i);
    }
}



printNumbers(5); // Erwartete Ausgabe: 1, 2, 3, 4, 5

printNumbers(3); // Erwartete Ausgabe: 1, 2, 3




/* Aufgabenstellung 3: Rückwärts laufende for-Schleife
Aufgabe:

Implementiere eine for-Schleife, die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.
    Test: */
function printNumbersReverse(number) {
    for (let i = number; i > + 0; i--) {
        console.log(i);
    }
}



printNumbersReverse(5);

// Erwartete Ausgabe: 5, 4, 3, 2, 1


printNumbersReverse(3);

// Erwartete Ausgabe: 3, 2, 1


/* Aufgabenstellung 4: Nur jedes dritte Element ausgeben
Implementiere eine for-Schleife, die jedes dritte Element des gegebenen Arrays ausgibt.

    Test: */

function printEveryThirdElement(number) {
    for (let i = 0; i < number.length; i = i + 3) {
        console.log(number[i]);
    }
}


printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Erwartete Ausgabe: 1, 4, 7


printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']);

// Erwartete Ausgabe: 'a', 'd'



/* Bonusaufgabe: Prüfung auf Primzahlen
Implementiere eine for-Schleife, um zu überprüfen, ob die gegebene Zahl eine Primzahl ist(d.h.nur durch 1 und sich selbst teilbar ist).Gib true zurück, wenn sie eine Primzahl ist, andernfalls false.

    Test: */

function isPrime(number) {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // Erwartete Ausgabe: true (7 ist eine Primzahl)

console.log(isPrime(4)); // Erwartete Ausgabe: false (4 ist keine Primzahl)


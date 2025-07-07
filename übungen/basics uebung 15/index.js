/* 01 Aufgabe
Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt, sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).

Beispiel:  */


function fullName(Max, Mustermann) {
    let result = Max + " " + Mustermann;
    return result
}

/* 
Oder: MIt TamplateString: 

function fullName(Max, Mustermann) {
    let result = `${Max} ${Mustermann}`;
    return result
}
*/

console.log(fullName('Max', 'Mustermann')); // Ausgabe: Max Mustermann



/* 02 Aufgabe
Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt, jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.

Beispiel:  */

function capitalizeLetters(string) {
    let returnString = string.toUpperCase();
    return returnString
}

console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE



/* 03 Aufgabe
Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.

Beispiel:  */

function countCharacters(string_2) {
    let returnString_2 = string_2.length;
    return returnString_2
}

console.log(countCharacters('banana')); // Ausgabe: 6


/* Knacker-Aufgabe
Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.

Beispiel:  */

function formatToCurrency(number) {
    let price = number.toFixed(2).replace(".", ",") + "€";
    return price;
}

console.log(formatToCurrency(0.50)); // Ausgabe: "0,50€"

/* Man erstellst variablen, in denen du die Werte aus den Argumenten verarbeitest  */
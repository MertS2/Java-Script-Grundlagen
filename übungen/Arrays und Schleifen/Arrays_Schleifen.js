/* /* Aufgabenstellung 1: includes
Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.

Test: */

function containsElement(array, element) {
    let result = array.includes(element);
    return result;

    /* oder return array.includes(element); geht beides.  */
}


console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Ben')); // true

console.log(containsElement(['Anna', 'Ben', 'Clara'], 'Daniel'));  // false




/* Aufgabenstellung 2: indexOf
Implementiere eine Funktion namens findElementIndex(array, element), die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.

Test: */

function findElementIndex(array, element) {
    let result_2 = array.indexOf(element);
    return result_2;

    /* oder return array.indexOf(element); geht beides.  */

}

console.log(findElementIndex([10, 20, 30, 40], 30)); // 2

console.log(findElementIndex([10, 20, 30, 40], 50)); // -1 */



/* /* Aufgabenstellung 3: shift
Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.

/* Test: */
function removeFirstElement(array) {
    array.shift();
    return array;
}

console.log(removeFirstElement([10, 20, 30, 40])); // [20, 30, 40]

console.log(removeFirstElement(['a', 'b', 'c', 'd'])); //['b', 'c', 'd'] */



/* Aufgabenstellung 4: unshift
Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.

Test: */
function addElementToStart(array, element) {
    array.unshift(element);
    return array;
}

console.log(addElementToStart([2, 3, 4], 1)); // [1, 2, 3, 4]

console.log(addElementToStart(['b', 'c', 'd'], 'a')); // ['a', 'b', 'c', 'd'] */



/* Aufgabenstellung 5: slice
Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.

Test: */

function getSubArray(array, start, end) {
    let result_4 = array.slice(start, end);
    return result_4;
    /* oder return array.slice(start, end); */
}

console.log(getSubArray([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4]
console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3)); // ['a', 'b', 'c'] */



/* Aufgabenstellung 6: join
Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.

Test: */

function joinArray(array, separator) {
    let resutl_5 = array.join(separator);
    return resutl_5;

    /* oder return array.join(separator); */
}

console.log(joinArray(['apple', 'banana', 'cherry'], ', ')); // "apple, banana, cherry"

console.log(joinArray([1, 2, 3, 4], ' - '));  // "1 - 2 - 3 - 4" */ 
/* 

break: Beendet die Schleife oder den switch-Block vollständig


Beispiel: 

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Schleife stoppt, wenn i gleich 3 ist
  }
  console.log(i);
}


continue: Überspringt den aktuellen Schleifendurchlauf

Beispiel: 

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // überspringt i = 3
  }
  console.log(i);
}



*/
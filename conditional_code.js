/* 

! Operator = not Gibt das gegenteil aus:
Beispiel: 

let condition = !true; Gibt false aus. 
let condition = !false; Gibt true aus. 
console.log(condition);
Andere Schreibweise: 

let condition = true; 
condition = !condition; Gibt false aaus. 

let condition = false;
condition = !condition; Gibt true aaus. 



||  = or Operator: 
Es gibt true aus,wenn mindestens ein Wert true ist. 
Egal wie viele false Werte dabei sind, wenn nur ein true dabei ist. Ist es auch true. 

&& = and Operator: Er gibt nur true, wenn alles auf true ist, wenn nur ein false mit drinnen ist wird es direkt auf false. 

Bemerkung: 
Erst alle &&-Verknüpfungen auswerten dann alle || Verknüpfungen.

console.log(true && false);  Ergibt: false 

console.log(true || false); Ergibt: true

console.log(false && true); Ergibt: false

console.log(true && (false || true)); Ergibt: true
Erklärung: Kammer (false || true) ergibt true und dann true && true = true

console.log((true && false) || true); Ergibt: true
Erklärung: Klammer (true && false) ergibt false, dann false || true = true

console.log(!(true && false)); Ergiebt: true 
Erklärung, normal false aber ! gegenteil. 

console.log(!(false || true)); Ergibt: false
Normal false aber durch ! gegenteil

console.log(!(true && (false || true))); Ergibt: false

console.log((true && !(false || true)) || (false && (true || false))); Ergibt: false
                 flse                    ||         false

console.log((true || !(false && true)) && (!(true || false) || (false && true))); Ergiebt: false
                        true           &&        false     ||     false        
                         true           &&        false = false 
                         false ||     false  = false



== Testes ob es extakt gleich ist, jedoch nicht den Typ. 

condition = 45 == 45; Ergebnis True 
condition = 45 == 47; Ergebnis false 
condition = 45 == "47"; Ergebnis false 
condition = 45 == "45"; Ergebnis True 

=== Testes ob es extakt gleich ist mit typ.
condition = 45 === "45"; Ergebnis false 



>  < größer abfrage

condition = 45 > 100; Ergebnis false 
condition = 45 < 100; Ergebnis true 

Gräßegleich abfrage >= <=

condition = 45 <= 100; Ergebnis true  
condition = 45 >= 100; Ergebnis false  


Nicht gleich Abfrage: 
condition = 45 != 100; Ergebnis true  
condition = 45 !== 100; Ergebnis false  

Operator	Bedeutung
==	prüft nur auf Wert, Typ wird umgewandelt also ohne typ
===	prüft Wert und Typ
!=	prüft Ungleichheit, Typ wird umgewandelt
!==	prüft Ungleichheit inkl. Typ


console.log(5 <= 10); Ergebnis True. 

console.log(15 == 15); Ergebnis True

console.log(20 > 10); Ergebnis true

console.log((7 <= 7) == (5 < 10)); Ergebnis  true
Wil beide true sind true ==  true

console.log((10 > 5) == (3 < 2)); Ergebnis false

console.log((12 >= 8) && (8 < 9)); Ergebnis true

console.log((3 == 3) || (10 > 20)); Ergebnis true

console.log((6 != 6) || (15 <= 20)); Ergebnis true

console.log((7 < 5) == !(10 >= 10)); Ergebnis Ergebnis true

console.log((4 >= 4) && (8 < 15) && (3 == 3)); Ergebnis true








 Beispiele:  

let age = 17;

if (age < 16) {
    console.log("Du bist kleiner als 16");
} else if (age > 16) {
    console.log("Du bist größer als 16 aber kleiner als 18");
} else {
    console.log("Du bsit über 18");
} 

let if_statments = true;

if (if_statments) {
    console.log('If teil');
} else if (!if_statments) {
    console.log('if- else teil');
}
else {
    console.log('else-teil');
}

// Aufgabe 1:
if (5 <= 10) {
    console.log("a");
}

    Ergebnis: a

// Aufgabe 2:
if (15 == 15) {
    console.log("b");
}
     Ergebnis: b

// Aufgabe 3:
if (20 > 10) {
    console.log("c");
}
     Ergebnis: c

// Aufgabe 4:
if (7 <= 7) {
    console.log("a");
} else {
    console.log("b");
}
     Ergebnis: a

// Aufgabe 5:
if (10 > 5) {
    console.log("a");
} else if (3 < 2) {
    console.log("b");
} else {
    console.log("c");
}
     Ergebnis: a

// Aufgabe 6:
if (12 >= 8 && 8 < 9) {
    console.log("a");
} else {
    console.log("b");
} 
     Ergebnis: a

// Aufgabe 7:
if (3 == 3) {
    console.log("a");
} else if (10 > 20) {
    console.log("b");
} else {
    console.log("c");
}
     Ergebnis: a

// Aufgabe 8:
if (6 != 6) {
    console.log("a");
} else if (15 <= 20) {
    console.log("b");
} else {
    console.log("c");
}
     Ergebnis: b 
     Dadurch das das erste if statment ein ! hat wird das false und das 2 wid ausgeführt. 

// Aufgabe 9:
if (7 < 5) {
    console.log("a");
} else if (!(10 >= 10)) {
    console.log("b");
} else {
    console.log("c");
}
     Ergebnis: c

// Aufgabe 10:
if (4 >= 4 && 8 < 15 && 3 == 3) {
    console.log("a");
} else {
    console.log("b");
}
     Ergebnis: a

*/
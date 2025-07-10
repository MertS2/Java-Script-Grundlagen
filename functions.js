/* 
let = discount = 100;
let = price = 500;

console.log((price - discount) * 1.19);

let = price = 300;

console.log((price - discount) * 1.19);

let = price = 600;

console.log((price - discount) * 1.19);

Ist umständlich immer wieder den code so zu schreiben und unötigen code.  



logCalculatedPrice()

function logCalculatedPrice() {
    console.log((price - discount) * 1.19);
}

Das kann uns sehr viel Schreibarbeit sparen.


Java script lies von oben nach unten. 1. Der code wird gelessen und erst beim 2 mal ausgeführt. 

Mit Parametas: 



let = price = 700; kann man weg lassen
logCalculatedPrice (50 , 500);

logCalculatedPrice()

let = price = 300; kann man weg lassen
logCalculatedPrice (50 , 300);

logCalculatedPrice()

let = price = 600; kann man weg lassen
logCalculatedPrice (50 , 600);

logCalculatedPrice()

function logCalculatedPrice(discount, price) {
    console.log((price - discount) * 1.19);
}


console.log(logCalculatedPrice (50 , 500));

function logCalculatedPrice(discount, price) {
   let value = (price - discount) * 1.19);
   return value
}

return gibt etwas zurück. Nach einem return, geht die functinon nicht weiter und stop dort.



 Weiteren Lesestoff findest du bei w3schools: https://www.w3schools.com/js/js_functions.asp

*/

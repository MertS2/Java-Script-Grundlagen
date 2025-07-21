let array = ["Mert", 21, true];
/* List fängt mit der Zahl 0 an und nicht mit 1 */


/* function initArrays() {
    array[0] = "Ynus"

    console.log(array);

    console.log(array[2]);
} 
    
*/

/* push: Fügt Sachen in ein Array hinten dran hinzu. */
/* pop: Entfernt Sachen in ein Array hinten dran.  */

/* let fruits = ["Banane", "Orange", "Apple", "Mango"];
 *//* fruits.push("Kiwi", "Lemon"); */
/* fruits("Kiwi", "Lemon").pop(); */


/* let singeTestVar = fruits.push("Kiwi", "Lemon"); */

/* let singeTestVar = fruits.push("Kiwi", "Lemon");
 */
/* let singeTestVar = fruits("Kiwi", "Lemon").pop(); */

/* function initArrays() {
    console.log(fruits);
} */

/* function initArrays() {
    console.log(singeTestVar);
} */

/* Array =  https://www.w3schools.com/js/js_arrays.asp */

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */

/* function initArrays_2() {

 Vorlage
   for (start; solange; schritt) {

    } 
} */

/* function initArrays() {

    for (let i = 0; i < 6; i++) {
        console.log(i);
    }
} */

/* function initArrays() {

    for (let i = 0; i < 6; i += 2) {
        console.log(i);
    }
} */

/* function initArrays() {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        contentRef.innerHTML += "asd";
    }
} */


/* function initArrays() {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";
    for (let i = 0; i < 6; i++) {
        contentRef.innerHTML += i + "asd";
    }
} 
*/

/* getElementsByClassname */
/* function initArrays() {

    let reflist = document.getElementsByClassName('red_box')

    for (let i = 0; i < reflist.length; i++) {
        const singelRef = reflist[i];

        singelRef.innerText = i;
    }
}
 */

/* while loop */

function initArrays() {
    /*     let while_i = 0;
        while (while_i < 5) {
    
            console.log("while " + while_i);
            while_i++
        } */

    /* Gegenstück for Schleife*/

    /*     for (let i  = 0; i  < 5; i ++) {
            console.log("for " + i );
    
        } */
    /* ForEach Schleife */

 /*    array.forEach(element => {
        console.log(element);
    }); */
    /* Gegenstück for Schleife*/

    for (let index = 0; index < array.length; index++) { /* array ist oben der Varible name. */
        console.log(array[index]);
        
    }


}


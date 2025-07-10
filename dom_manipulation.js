let title = document.getElementById('website_title');

console.log(title.innerHTML);

title.innerHTML = "Meine Seite";

document.getElementById('test_div').innerHTML = '<p><u> Ich bin ein P-Element </u></p>';
document.getElementById('test_div_2').innerText = '<p><u> Ich bin ein P-Element </u></p>';



/*
innerText → nur Text, keine Tags
innerHTML → Text + HTML Tags  

Damit kann man Inhalt einer HTML Elemente verändern und Ausgeben.
Hinweis, da Javascript von oben nach unten lies muss die verlinkt der datei unter dem </body> sein, anstonsten kommt die Meldung null heraus.   



*/

document.getElementById('test_div').classList.add('blue_bg');
document.getElementById('test_div_2').classList.remove('yellow_bg');
document.getElementById('test_div_2').classList.toggle('yellow_bg');

/* 
classList.add: class hinzufügen.
classList.remove: class entfernen.

classList.toggle: Kombination aus add und remove, wenn die classe in HTML drinnen ist nehmt er es weg, wenn es nicht drinnen ist fügt er es hinzu. 
*/




/* Atribut ändern: */

document.getElementById('inputfield_test').setAttribute('type', 'text');
document.getElementById('inputfield_test').setAttribute('value', 'Einfügen');

/* Value in der Konsole anzeigen: */

console.log(document.getElementById('inputfield_test').value);



/* Mit set Atribut kann man die Atribute ändern, wie z,b die ID oder den typ von einem input usw. 

 Weiteren Lesestoff findest du bei w3schools: https://www.w3schools.com/js/js_htmldom.asp
Etwas komplexeren Lesestoff findest du bei SELFHTML: https://wiki.selfhtml.org/wiki/JavaScript/DOM
*/


function toogleDnone(id) {
    document.getElementById(id).classList.toggle('d_none');
};

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


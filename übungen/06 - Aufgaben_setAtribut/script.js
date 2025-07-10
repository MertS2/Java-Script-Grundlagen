/* 1. Aufgabe:
Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.
*/



/* 2. Aufgabe:
Füge mit JavaScript dem p-tag einen title hinzu.

Hinweis: das title Attribute ist meist auch als Tooltip zu verstehen, mehr dazu z.B. hier:

 https://www.w3schools.com/tags/att_global_title.asp
 */
document.getElementById('p_tag').setAttribute('title', 'headline');


/* 3. Probiere aus:
Kannst du auch eine css class mit setAttribute hinzufügen?
 */
document.getElementById('p_tag').setAttribute('id' , 'lightgray_bg');

/* 4. Probiere aus:
Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?

Verwende classList.add() für das Hinzufügen oder Entfernen einzelner Klassen.

Verwende setAttribute("class", ...) nur, wenn du explizit alle Klassen ersetzen willst.

Hinweis: Füge hierzu vorher schon einmal eine andere class ein!

 */


/* Wichtiger Tipp:
Du siehst, dass manchmal beides geht, sowohl setAttribute() als auch der direkte Zugriff.

Hierbei sollte dein Entwicklergeist geweckt sein. Wenn du nicht sicher bist, wie oder ob etwas geht, dann probier es aus! 

Genau das macht dich zum Entwickler!! */ 
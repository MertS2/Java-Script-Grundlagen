/* Arrays mit Pfaden zu Bildern, Überschriften und Beschreibungen – alle haben die gleiche Länge (Index-basiert). */

let imgs = [
    "./assets/belgium-4966646_1280.jpg",
    "./assets/berlin-61994_1280.jpg",
    "./assets/copenhagen-4746327_1280.jpg",
    "./assets/galata-4043037_1280.jpg",
    "./assets/las-vegas-2722762_1280.jpg",
    "./assets/linz-3743776_1280.jpg",
    "./assets/los-angeles-3580722_1280.jpg",
    "./assets/mallorca-3690605_1280.jpg",
    "./assets/paris-1726315_1280.jpg",
    "./assets/singapore-1927720_1280.jpg",
    "./assets/stuttgart-68760_1280.jpg",
    "./assets/switzerland-7899656_1280.jpg",
    "./assets/antalya-7572191_1280.jpg",
    "./assets/dubai-1227538_1280.jpg",
    "./assets/sea-984944_1280.jpg",
]

let headlines = [
    "Belgien",
    "Berlin",
    "Kopenhagen",
    "Istanbul",
    "Las Vegas",
    "Linz",
    "Los Angeles",
    "Mallorca",
    "Paris",
    "Singapure",
    "Stuttgart",
    "Schweiz",
    "Antalya",
    "Dubai",
    "Izmir"

]

let description = [
    "description_1",
    "description_2",
    "description_3",
    "description_4",
    "description_5",
    "description_6",
    "description_7",
    "description_8",
    "description_9",
    "description_10",
    "description_11",
    "description_12",
    "description_13",
    "description_14",
    "description_15",

]



/* Wird beim Laden der Seite aufgerufen, um den Inhalt direkt darzustellen. */
function init() {
    render();
}


function render() {
    /*Holt das HTML-Element mit der ID "main", um es später mit Inhalten zu füllen.*/
    let main_content = document.getElementById("main");

    /* Setzt den Inhalt des Elements zurück, bevor neuer Inhalt eingefügt wird.*/
    main_content.innerHTML = "";


    /* Schleife, die alle Bilder, Überschriften und Beschreibungen der Reihe nach einfügt.*/
    for (let i = 0; i < imgs.length; i++) {
        main_content.innerHTML += template(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */
    }
}


/* Gibt einen HTML-Block für einen Artikel zurück (Überschrift, Bild und Beschreibung).*/
function template(path, path2, path3, i) {
    return `   

    <article>

    <header>
        <h2>${path}</h2>
    </header>

    <figure>
        <figcaption>
            <p> Figcaption </p>
        </figcaption>

        <img onclick="addOverlay(${i})" class="imgs_container_main" src="${path2}">
        
        </figure>

        <p>${path3}</p>

    </article>
    `
}

/* Gibt einen HTML-Dialog (Overlay) mit Details zum jeweiligen Artikel zurück.*/
function dialog(path, path2, path3) {
    return `   

    <dialog class="dialog" >

    <header class="dialog_header" >
        <h2>${path}</h2>
        <button class="close_button" onclick="removeOverlay()">X</button>
    </header>

    <figure class="dialog_main" >
        <figcaption>
            <p> Figcaption </p>
        </figcaption>

        
            
        <button onclick="arrow(i)" class="dialog_arrow" > <= </button>
        
        <img class="imgs_container_main" src="${path2}">
        
        <button onclick="arrow(i)" class="dialog_arrow"> => </button>
    
        </figure>

        <p>${path3}</p>

  </dialog>
  `
}


function addOverlay(i) {
    /* Holt das Dialog-Container-Element*/
    let refAddoverlay = document.getElementById('dialog_container');

    /*     Leert den vorherigen Inhal*/
    refAddoverlay.innerHTML = "";
    /*     Fügt den neuen Dialog mit den entsprechenden Inhalten ein*/
    refAddoverlay.innerHTML += dialog(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */
}

function removeOverlay() {
    /*     Holt das Dialog-Container-Element*/
    let refRemoveOverlay = document.getElementById('dialog_container'); /* spricht man die Id an. */

    /*     Wenn das Element existiert, wird eine CSS-Klasse hinzugefügt, um es auszublenden*/
    if (refRemoveOverlay) {
        refRemoveOverlay.classList.add('d_none')
    }
}

function arrow(i) {
    /*Holt das HTML-Element mit der ID "main", um es später mit Inhalten zu füllen.*/
    let arrow = document.getElementById("main");

    /* Setzt den Inhalt des Elements zurück, bevor neuer Inhalt eingefügt wird.*/
    arrow.innerHTML = "";


    /* Schleife, die alle Bilder, Überschriften und Beschreibungen der Reihe nach einfügt.*/
    for (let i = 0; i < imgs.length; i++) {
        arrow.innerHTML += dialog(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */
    }
}



/* Responsive Menü leiste. */

function toogle_rest_menu() {
    /* Öffnet oder schließt das responsive Menü, indem die CSS-Klasse entfernt oder hinzuugefügt wird*/
    document.getElementById("resp_menu").classList.toggle("resp_menu_closed");
}




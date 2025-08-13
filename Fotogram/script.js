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
    "./assets/alanya-3758816_1280.jpg"
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
    "Izmir",
    "Alanya",
]

let show_more = [
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
    "show more",
]


let description = [
    `   Belgien, ein kleines Land mit großer Vielfalt, begeistert mit mittelalterlichen Städten, 
        kulinarischen Highlights wie Waffeln und Schokolade sowie einer reichen Kultur. Ob Brüssel mit 
        seinem charmanten Zentrum oder die Grachten von Brügge – Belgien vereint Geschichte, Stil und Genuss.`,

    `   Berlin, die deutsche Hauptstadt, ist ein pulsierendes Zentrum für Kultur, Geschichte und Kreativität. 
        Mit ihrer bewegten Vergangenheit, ikonischen Sehenswürdigkeiten wie dem Brandenburger Tor und der East Side Gallery 
        sowie einer vielfältigen Kulturszene zieht Berlin Besucher aus aller Welt in ihren Bann.`,

    `   Kopenhagen, die Hauptstadt Dänemarks, verbindet skandinavisches Design mit entspannter Lebensart. 
        Die farbenfrohen Häuser von Nyhavn, moderne Architektur, Fahrräder und Nachhaltigkeit prägen das Stadtbild – 
        ein Ort, der Tradition und Innovation harmonisch vereint.`,

    `   Istanbul, die Stadt auf zwei Kontinenten, ist ein Schmelztiegel der Kulturen. Zwischen Moscheen, Palästen, 
        Basaren und modernen Cafés spürt man überall die reiche Geschichte des Osmanischen Reiches. 
        Istanbul fasziniert durch seine Dynamik und Tiefe.`,

    `   Las Vegas, die Glitzermetropole in der Wüste Nevadas, steht für Unterhaltung pur. Von beeindruckenden Casinos 
        über spektakuläre Shows bis zu funkelnden Hotels – in Las Vegas wird die Nacht zum Tag und jeder Besuch zum Erlebnis.`,

    `   Linz, die drittgrößte Stadt Österreichs, liegt malerisch an der Donau und überrascht mit moderner Kunst, 
        digitaler Innovation und historischer Architektur. Die Mischung aus Technik, Kultur und Natur macht Linz besonders lebenswert.`,

    `   Los Angeles, die Stadt der Engel, ist ein Zentrum für Film, Kunst und Lifestyle. Von den Stränden von Santa Monica 
        bis zu den Studios von Hollywood bietet L.A. Sonne, Vielfalt und kreatives Flair in Hülle und Fülle.`,

    `   Mallorca, die größte Insel der Balearen, begeistert mit atemberaubenden Küsten, charmanten Dörfern 
        und einer faszinierenden Mischung aus Natur und Kultur. Ob entspannter Strandurlaub, Wanderungen in der Serra de Tramuntana 
        oder Erkundung der historischen Altstadt von Palma – Mallorca bietet für jeden etwas.`,

    `   Paris, die Stadt der Liebe, verführt mit Eleganz, Romantik und Kunst. Vom Eiffelturm über den Louvre 
        bis zu charmanten Straßencafés – Paris ist ein Fest für alle Sinne und ein Symbol europäischer Kultur.`,

    `   Singapur, die Hightech-Metropole in Südostasien, verbindet beeindruckende Skyline mit tropischem Flair. 
        Zwischen futuristischen Gärten, traditioneller Chinatown und kulinarischer Vielfalt zeigt sich Singapur als globaler Hotspot.`,

    `   Stuttgart, eingebettet in Weinberge, ist das Herz der schwäbischen Region und bekannt für Automobilgeschichte, 
        kulturelle Vielfalt und moderne Architektur. Ob Mercedes-Benz-Museum oder Schlossplatz – Stuttgart bietet urbane Eleganz und Tradition.`,

    `   Die Schweiz begeistert mit majestätischen Alpen, glasklaren Seen und einem hohen Lebensstandard. 
        Städte wie Zürich, Genf oder Luzern vereinen Natur, Präzision und kulturelle Vielfalt auf kleinstem Raum.`,

    `   Antalya, die Perle der türkischen Riviera, verbindet traumhafte Strände mit historischen Stätten 
        wie dem Hadrianstor oder der Altstadt Kaleiçi. Sonne, Meer und orientalischer Charme machen Antalya zu einem beliebten Reiseziel.`,

    `   Dubai, die glitzernde Metropole in den Vereinigten Arabischen Emiraten, steht für Luxus, Innovation und Superlative. 
        Vom Burj Khalifa bis zu künstlichen Inseln – Dubai beeindruckt mit futuristischem Städtebau und orientalischer Gastfreundschaft.`,

    `   İzmir, gelegen an der Westküste der Türkei, ist eine lebendige Hafenstadt mit einer reichen Geschichte, 
        die bis in die Antike zurückreicht. Bekannt für ihr mildes Klima, die mediterrane Lebensart und ihre herzliche Atmosphäre, 
        verbindet İzmir modernes Stadtleben mit antiken Wurzeln. Ob bei einem Spaziergang entlang der Küstenpromenade, beim Besuch des 
        historischen Basars oder beim Entdecken antiker Stätten wie Ephesos in der Nähe – İzmir verzaubert mit Charme und Vielfalt.`,

    `   Alanya, die sonnenverwöhnte Perle an der Türkischen Riviera, vereint mediterrane Gelassenheit mit historischem Charme.
        Vom majestätischen Burgberg mit Blick auf die azurblaue Küste bis zu endlosen Sandstränden – Alanya begeistert mit malerischer Natur, 
        lebendiger Kultur und herzlicher türkischer Gastfreundschaft.`,
];




/* Wird beim Laden der Seite aufgerufen, um den Inhalt direkt darzustellen. */
function init() {
    render();
    navMobileFunction();
}


function render() {
    /*Holt das HTML-Element mit der ID "main", um es später mit Inhalten zu füllen.*/
    let mainContent = document.getElementById("main");

    /* Setzt den Inhalt des Elements zurück, bevor neuer Inhalt eingefügt wird.*/
    mainContent.innerHTML = "";


    /* Schleife, die alle Bilder, Überschriften und Beschreibungen der Reihe nach einfügt.*/
    for (let i = 0; i < imgs.length; i++) {
        mainContent.innerHTML += template(headlines[i], imgs[i], show_more[i], i); /* Fügt ins HTML die function mit den Parametern.  */
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
        <img onclick="addOverlay(${i})" class="imgs_container_main" src="${path2}">
        
    </figure>

        <button class="show_more_btn" >${path3}</button>

    </article>
    `
}

/* Gibt einen HTML-Dialog (Overlay) mit Details zum jeweiligen Artikel zurück.*/
function dialog(path, path2, path3, i) {
    return `   

    <dialog id="dialog" class="dialog" >

    <header class="dialog_header" >
        <h2>${path}</h2>
        <button class="close_button" onclick="removeOverlay()">X</button>
    </header>

    <main class="dialog_main" >
    
        <button id="arrow_left_btn" onclick="arrowLeft(${i})" class="dialog_arrow_btn" > <= </button>


        <img class="imgs_container_dialog" src="${path2}">
        
        <button id="arrow_right_btn" onclick="arrowRight(${i})" class="dialog_arrow_btn"> => </button>

        </main>

        <p class="description_dialog">${path3}</p>

  </dialog>
  `
    /* 
    <button id = "arrow_right_btn_disabled" class="dialog_arrow_btn" style = "opacity : 0; pointer-events: none" disabled > <= </button >
    <button id="arrow_left_btn_disabled" class="dialog_arrow_btn" style="opacity : 0; pointer-events: none" disabled> <= </button>
    */
}


function addOverlay(i) {
    /* Holt das Dialog-Container-Element*/
    let refAddOverlay = document.getElementById('dialog_container');

    /*     Leert den vorherigen Inhal*/
    refAddOverlay.innerHTML = "";

    /*     Fügt den neuen Dialog mit den entsprechenden Inhalten ein*/
    refAddOverlay.innerHTML += dialog(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */

    let dialogElement = document.getElementById('dialog');

    if (dialogElement) { /*  zeigt den Dialog als modales Fenster */
        dialogElement.showModal();
    }

    if (i == 0) {
        dialog(i = 15);
        dialog.innerHTML = "";
        dialog.innerHTML += dialog(headlines[i], imgs[i], description[i], i)
    }

    if (i == 15) {
        dialog(i = 1);
        dialog.innerHTML = "";
        dialog.innerHTML += dialog(headlines[i], imgs[i], description[i], i)
    }


    /* if (i == 0) { Entfernt den linken button in der Index 0. 
        let removeLeftBtn = document.getElementById('arrow_left_btn');
        removeLeftBtn.remove();

        let rightDisableBtn = document.getElementById('arrow_right_btn_disabled')
        rightDisableBtn.remove();
    }

    if (i == 15) {  Entfernt den rechten button in der Index 15. 
        let removeLeftBtn = document.getElementById('arrow_left_btn_disabled');
        removeLeftBtn.remove();

        let removeRightBtn = document.getElementById('arrow_right_btn');
        removeRightBtn.remove();
    }

    if (i >= 1 && i <= 14) {
        let removeLeftBtn = document.getElementById('arrow_left_btn_disabled');
        removeLeftBtn.remove();

        let rightDisableBtn = document.getElementById('arrow_right_btn_disabled')
        rightDisableBtn.remove();
    } */
}


function removeOverlay() {
    /*     Holt das Dialog-Container-Element*/
    let refRemoveOverlay = document.getElementById('dialog_container'); /* spricht man die Id an. */

    /*     Wenn das Element existiert, Leert der den vorherigen Inhal*/
    if (refRemoveOverlay) {
        refRemoveOverlay.innerHTML = "";
    }
}

function arrowLeft(i) {
    addOverlay.innerHTML = "";
    addOverlay(i - 1);
    addOverlay.innerHTML += dialog(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */
}

function arrowRight(i) {
    dialog.innerHTML = "";
    addOverlay(i + 1);
    addOverlay.innerHTML += dialog(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */
}

/* Responsive Menü leiste. */

function navMobileFunction() {
    let nav = document.getElementById("nav_mobile_main");
    nav.classList.toggle("d_none");
} 

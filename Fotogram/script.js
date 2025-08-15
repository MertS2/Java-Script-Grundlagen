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
    "./assets/alanya-3758816_1280.jpg",
    "./assets/colosseum-5773684_1280.jpg",
    "./assets/cyprus-7692597_1280.jpg",
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
    "Zypern",
    "Rom"
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

    `Zypern, die sonnenverwöhnte Insel im östlichen Mittelmeer, vereint mediterrane Lebensfreude mit einer faszinierenden Mischung aus Kulturen. 
        Von goldenen Stränden und türkisblauem Meer bis zu uralten Ruinen und charmanten Bergdörfern – Zypern verzaubert mit abwechslungsreicher Natur, 
        reicher Geschichte und der warmherzigen Gastfreundschaft seiner Menschen.`,

    `Rom, die ewige Stadt am Tiber, vereint jahrtausendealte Geschichte mit italienischem Lebensgefühl. Zwischen majestätischen Bauwerken wie dem Kolosseum und dem Petersdom, 
        charmanten Piazzas und belebten Gassen entfaltet sich ein einzigartiges Flair aus Kultur, Genuss und Dolce Vita – ein Ort, an dem Vergangenheit und Gegenwart harmonisch 
        verschmelzen.`,
];

let site = [
    "https://de.wikipedia.org/wiki/Belgien",
    "https://de.wikipedia.org/wiki/Berlin",
    "https://de.wikipedia.org/wiki/Kopenhagen",
    "https://de.wikipedia.org/wiki/Istanbul",
    "https://de.wikipedia.org/wiki/Las_Vegas",
    "https://de.wikipedia.org/wiki/Las_Vegas",
    "https://de.wikipedia.org/wiki/Los_Angeles",
    "https://de.wikipedia.org/wiki/Mallorca",
    "https://de.wikipedia.org/wiki/Paris",
    "https://de.wikipedia.org/wiki/Singapur",
    "https://de.wikipedia.org/wiki/Stuttgart",
    "https://de.wikipedia.org/wiki/Schweiz",
    "https://de.wikipedia.org/wiki/Antalya",
    "https://de.wikipedia.org/wiki/Dubai",
    "https://de.wikipedia.org/wiki/Izmir",
    "https://de.wikipedia.org/wiki/Alanya",
    "https://de.wikipedia.org/wiki/Zypern",
    "https://de.wikipedia.org/wiki/Rom",
];




/* Wird beim Laden der Seite aufgerufen, um den Inhalt direkt darzustellen. */
function init() {
    render();
    navMobileFunction();
    escDialogClose();
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
        <h6>${path}</h6>
    </header>

    <figure>
        <img onclick="addOverlay(${i})" class="imgs_container_main" src="${path2}">
        
    </figure>
        <button id="show_more_btn" onclick="showMoreDialog(${i})" class="show_more_btn">${path3}</button>

    </article>
    `
}

/* Gibt einen HTML-Dialog (Overlay) mit Details zum jeweiligen Artikel zurück.*/
function dialog(path, path2, path3, i) {
    return `   

    <dialog id="dialog" class="dialog">

    <header class="dialog_header">
        <h2>${path}</h2>
        <button class="close_button" onclick="removeOverlay()">X</button>
    </header>

    <main class="dialog_main" >
    
        <button id="arrow_left_btn" onclick="arrowLeft(${i})" class="dialog_arrow_btn" > <= </button>


        <img class="imgs_container_dialog" src="${path2}">
        
        <button id="arrow_right_btn" onclick="arrowRight(${i})" class="dialog_arrow_btn"> => </button>

        </main>
        <div class="dialog_footer">
        <p class="description_dialog">${path3}</p>
        
        <p class="counter_number">${i + 1}/18</p>
        </div>
  </dialog>
  `
    /* 
    ---------------------------------------Function variante für index 0 left button entfernen und letzer button right entfernen.  ----------------------------------------------
    <button id = "arrow_right_btn_disabled" class="dialog_arrow_btn" style = "opacity : 0; pointer-events: none" disabled > <= </button >
    <button id="arrow_left_btn_disabled" class="dialog_arrow_btn" style="opacity : 0; pointer-events: none" disabled> <= </button>
    */
}

function showMoreTemplate(i) {
    return `



    <dialog class="show_more_dialog" id="show_more_container">
    <header class="show_more_header">
    <h4> Achtung </h4>
    <button class="close_button" onclick="removeOverlay()">X</button>
    </header>
    <main>

    <h5> Achtung, dieser Link geht auf einer externe Seite. </h5>
    <h5> Klicken Sie auf Ja, wenn sie einverstanden sind, wenn nicht schließen sie den Dialog </h5>
    <div class="dialog_footer">
    <button id="next_show_more_btn" class="nextButton_stlye" onclick="nextButton(${i})">Ja</button>
    <button onclick="removeOverlay()" class="nextButton_stlye">Nein</button>
  </main>
    </dialog>`
}

function escDialogClose() {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            removeOverlay();
        }
    });
}

function nextButton(i) {
    let next = document.getElementById('next_show_more_btn');

    if (next) {
        window.location.href = site[i];
    }
}

function showMoreDialog(i) {
    let show = document.getElementById('dialog_container');
    show.innerHTML = showMoreTemplate(i);

    let dialogElement = document.getElementById('show_more_container');

    if (dialogElement) {
        dialogElement.showModal();
        document.body.classList.add('hidden');
    }
}


function addOverlay(i) {
    /* Holt das Dialog-Container-Element*/
    let refAddOverlay = document.getElementById('dialog_container');

    /*     Leert den vorherigen Inhal*/
    refAddOverlay.innerHTML = "";

    if (i == -1) {
        addOverlay(i = 17);
        refAddOverlay.innerHTML = "";
    }

    if (i == 18) {
        addOverlay(i = 0);
        refAddOverlay.innerHTML = "";
    }


    /*     Fügt den neuen Dialog mit den entsprechenden Inhalten ein*/
    refAddOverlay.innerHTML += dialog(headlines[i], imgs[i], description[i], i); /* Fügt ins HTML die function mit den Parametern.  */

    let dialogElement = document.getElementById('dialog');

    if (dialogElement) { /*  zeigt den Dialog als modales Fenster */
        dialogElement.showModal();
        document.body.classList.add('hidden');
    }

    /*    
    ---------------------------------------- Fünction für index 0 =  left button remove and letzer Index right remove.----------------------------------------------------------
    if (refAddOverlay) {
           document.body.classList.add("hidden");
       } else {
           document.body.classList.remove("hidden");
       } */


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
    } 
        ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        */
}


function removeOverlay() {
    /*     Holt das Dialog-Container-Element*/
    let refRemoveOverlay = document.getElementById('dialog_container'); /* spricht man die Id an. */

    /*     Wenn das Element existiert, Leert der den vorherigen Inhal*/
    if (refRemoveOverlay) {
        refRemoveOverlay.innerHTML = "";
        document.body.classList.remove('hidden');

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

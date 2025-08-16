
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
    for (let i = 0; i < objects.length; i++) {
        mainContent.innerHTML += template(objects[i].headline, objects[i].image, objects[i].show_more, i);
    }
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
        window.open(objects[i].site, "_blank");
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
    refAddOverlay.innerHTML += dialog(objects[i].headline, objects[i].image, objects[i].description, i); /* Fügt ins HTML die function mit den Parametern.  */

    let dialogElement = document.getElementById('dialog');

    if (dialogElement) { /*  zeigt den Dialog als modales Fenster */
        dialogElement.showModal();
        document.body.classList.add('hidden');
    }
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
    addOverlay.innerHTML += dialog(objects[i].headline, objects[i].image, objects[i].description, i); /* Fügt ins HTML die function mit den Parametern.  */
}

function arrowRight(i) {
    addOverlay.innerHTML = "";
    addOverlay(i + 1);
    addOverlay.innerHTML += dialog(objects[i].headline, objects[i].image, objects[i].description, i); /* Fügt ins HTML die function mit den Parametern.  */
}

/* Responsive Menü leiste. */

function navMobileFunction() {
    let nav = document.getElementById("nav_mobile_main");
    nav.classList.toggle("d_none");
} 
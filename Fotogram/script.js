function init() {
    render();
    escDialogClose();
}


function render() {
    let mainContent = document.getElementById("main");

    mainContent.innerHTML = "";

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
    let refAddOverlay = document.getElementById('dialog_container');

    refAddOverlay.innerHTML = "";

    if (i == -1) {
        addOverlay(i = 17);
        refAddOverlay.innerHTML = "";
    }

    if (i == 18) {
        addOverlay(i = 0);
        refAddOverlay.innerHTML = "";
    }

    refAddOverlay.innerHTML += dialog(objects[i].headline, objects[i].image, objects[i].description, i); /* Fügt ins HTML die function mit den Parametern.  */

    let dialogElement = document.getElementById('dialog');

    if (dialogElement) { 
        dialogElement.showModal();
        document.body.classList.add('hidden');
    }
}

function removeOverlay() {
    let refRemoveOverlay = document.getElementById('dialog_container'); /* spricht man die Id an. */

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


function navMobileFunction() {
    let nav = document.getElementById("nav_mobile_main");
    nav.classList.toggle("d_none");
} 
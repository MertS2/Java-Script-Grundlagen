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

]


function init() {
    render();
    loadHeader();
    loadFooter();
}

function render() {
    let main_inhalt = document.getElementById("main");

    main_inhalt.innerHTML = "";

    for (let i = 0; i < imgs.length; i++) {
        main_inhalt.innerHTML += template(headlines[i], imgs[i], description[i]);
    }
}



function template(path, path2, path3) {
    return `   

    <article>

    <header>
        <h2>${path}</h2>
    </header>

    <figure>
        <figcaption>
            <p> Figcaption </p>
        </figcaption>

        <img class="imgs_container_main" src="${path2}">
        
        </figure>

        <p>${path3}</p>

    </article>
    `
}


function loadHeader() {
    let header = document.getElementById("header"); /* HTML */
    header.classList.add("header_main"); /* CSS */
    header.innerHTML += template_header();
}

function loadFooter() {
    let footer = document.getElementById("footer");
    footer.classList.add("fotter_main");
    footer.innerHTML += template_footer();
}

/* Responsive Menü leiste. */

function toogle_rest_menu() {
    document.getElementById("resp_menu").classList.toggle("resp_menu_closed");
}

function template_header() {
    return `
        
        <header class="header_main">

        <img id="fotogram_logo" src="./icons/Fotogram_Logo.svg" alt="Fotogram_Logo">
        <h1>Fotogram</h1>

        <nav class="dektop_nav">
            <a class="nav_link" href="./impresum.html">Impresum</a>
            <a class="nav_link" href="">Datenschutz</a>
            <a class="nav_link" href="">Kontakt</a>
        </nav>

        <button class="d_none" onclick="toogle_rest_menu()">
            <img class="img_button" src="./icons/bars-solid.svg" alt="">
        </button>
    </header>

    <nav id="resp_menu" class=" resp_menu_box resp_menu_closed">
        <a class="nav_link" href="./impresum.html">Impresum</a>
        <a class="nav_link" href="">Datenschutz</a>
        <a class="nav_link" href="">Kontakt</a>
    </nav>`
}

function template_footer() {
    return `    

    <footer>
        <h3> © 2025 Mert Sönmez.</h3>
    </footer>`
}


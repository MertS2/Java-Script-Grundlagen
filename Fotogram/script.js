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
}

function render() {
    let main_inhalt = document.getElementById("main");
    let main_headline = document.getElementById("main");

    main_inhalt.innerHTML = "";
    main_headline.innerHTML = "";

    for (let i = 0; i < imgs.length; i++) {
        main_inhalt.innerHTML += template(headlines[i], imgs[i], description[i]);
    }
}



function template(path, path2, path3) {
    return `   
   <dialog>
        
    <h2>${path}</h2>

  
    <img src="${path2}">;

    <p>${path3}</p>
</dialog>
    `
}


/* Responsive Menü leiste. */
function toogle_rest_menu() {
    document.getElementById("resp_menu").classList.toggle("resp_menu_closed");
}



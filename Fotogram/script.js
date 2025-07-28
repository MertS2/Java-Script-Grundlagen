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



function init() {
    render();
}

function render() {
    let main_inhalt = document.getElementById("main");

    main_inhalt.innerHTML = "";

    for (let i = 0; i < imgs.length; i++) {
        main_inhalt.innerHTML += template(imgs[i]);
   }
}

function template(path) {
    return `   


    <div id="img_container"> 
    
        <h2>Headline</h2>

  
      <img src="${path}">;

        <p>Description</p>
    </div>

    `
}


/* Responsive Menü leiste. */
function toogle_rest_menu() {
    document.getElementById("resp_menu").classList.toggle("resp_menu_closed");
} 
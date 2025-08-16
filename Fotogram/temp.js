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
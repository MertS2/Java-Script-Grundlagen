function gehtNoteTemp(indexNote) {
    return `
    <div class="notes_container">
    <p class="notes_title">  Title: ${notesTitle[indexNote]} </p>
    <p class="notes_decpriton"> Beschreibung: ${notes[indexNote]} </p>
    
    <div class="div_btn">
    <button class="notes_btn" onclick="trach_notes(${indexNote})">Papierkorb</button>
    <button class="notes_btn" onclick="(})">Achive</button>
    </div>
    </div>
    `
}

function gehtAArchiveNoteTemp(indexTrachNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Title: ${trachNotTitkles[indexTrachNote]} => ${trachNotes[indexTrachNote]} </p>
    <button class="delet_btn" onclick="deletetNotesComplet(${indexTrachNote})">X</button>
    </dialog>
    `
}

function gehtTrachNoteTemp(indexTrachNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Title: ${trachNotTitkles[indexTrachNote]} => ${trachNotes[indexTrachNote]} </p>
    <button class="delet_btn" onclick="deletetNotesComplet(${indexTrachNote})">X</button>
    </dialog>
    `
}
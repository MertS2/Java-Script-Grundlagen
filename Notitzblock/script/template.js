function gehtNoteTemp(indexNote) {
    return `
    <div class="notes_container">
    <p class="notes_title">  Headline: ${notesTitles[indexNote]} </p>
    <p class="notes_decpriton"> Beschreibung: ${notes[indexNote]} </p>
    
    <div class="div_btn">
    <button class="notes_btn" onclick="trashNotee(${indexTrash})">Papierkorb</button>
    <button class="notes_btn" onclick="archivedNote(${indexAchivedNote})">Archived</button>
    </div>
    </div>
    `
}

function gehtAArchiveNoteTemp(indexAchivedNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Headline: ${archivedTitles[indexAchivedNote]} => ${archivedNotes[indexAchivedNote]} </p>
    <button class="delet_btn" onclick="deleteNoteComplete(${indexNote})">X</button>
    </dialog>
    `

}

function gehtTrachNoteTemp(indexTrashNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Headline: ${trachNotTitkles[indexTrashNote]} => ${trachNotes[indexTrashNote]} </p>
    <button class="delet_btn" onclick="deleteNoteComplete(${indexNote})">X</button>
    </dialog>
    `
}
function gehtNoteTemp(indexNote) {
    return `
    <div class="notes_container">
    <p class="notes_title">  Headline: ${notesTitles[indexNote]} </p>
    <p class="notes_decpriton"> Beschreibung: ${notes[indexNote]} </p>
    
    <div class="div_btn">
    <button class="notes_btn" onclick="trashNote(${indexNote})">Papierkorb</button>
    <button class="notes_btn" onclick="(NoteToArchive(${indexNote}))">Archivieren</button>
    </div>
    </div>
    `
}

function gehtAArchiveNoteTemp(indexAchivedNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Headline: ${archivedTitles[indexAchivedNote]} => ${archivedNotes[indexAchivedNote]} </p>
    <button class="actionButton" onclick="achivedToNotes(${indesNote})">X</button>
    </dialog>
    `

}

function gehtTrachNoteTemp(indexTrashNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Headline: ${trashNoteTitles[indexTrashNote]} => ${trashNotes[indexTrashNote]} </p>
    <button class="actionButton" onclick="deleteNoteComplete(${indexTrashNote})">X</button>

    </dialog>
    `
}
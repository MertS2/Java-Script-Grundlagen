function gehtNoteTemp(indexNote) {
    return `
    <div class="notes_container">
    <p class="notes_title"> ${allNotes.notesTitles[indexNote]} </p>
    <p class="notes_decpriton"> ${allNotes.notes[indexNote]} </p>
    
    <div class="div_btn">
    <button class="notes_btn" onclick="moveNote(${indexNote} , 'notes' , 'trashNotes')">P</button>
    <button class="notes_btn" onclick="moveNote(${indexNote} , 'notes' , 'archivedNotes')">A</button>
    </div>
    </div>
    `
}

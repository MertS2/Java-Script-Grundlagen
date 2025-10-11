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

function dialogRenderNotesTemp(startKey, i) {
    let dialog = document.getElementById('dialog');

    dialog.innerHTML += ` 
        <p> ${allNotes[startKey + 'Titles'][i]} ${allNotes[startKey][i]} </p>
        `
        if (startKey === 'trashNotes') {
            dialog.innerHTML += `
            <div class= "dialog_btn_container" > 
            <button class="actionButton" onclick="deleteNoteComplete(${i}, 'Papierkorb')">Komplett Löschen</button>
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'archivedNotes', 'Papierkorb')">Archivieren</button>
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'notes', 'Papierkorb')">Zurück zu Notes</button> 
            </div>`
        }

        if (startKey === 'archivedNotes') {
            dialog.innerHTML += `
            <div class = "dialog_btn_container"> 
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'trashNotes', 'Archiv')">Papierkorb</button>
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'notes', 'Archiv')">Zurück zu Notes</button>
        </div>`
        }
      }
           

  function dialogRenderTemp(title){
    let dialog = document.getElementById('dialog');
    dialog.innerHTML += `
    <div class="dialog_contaner">
    <h2>${title}</h2>
    <button class="closeBtn" onclick="closeDialog()">Schließen</button>
    </div>`
  }



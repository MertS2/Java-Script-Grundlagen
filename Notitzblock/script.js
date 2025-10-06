let allNotes = {
    'notes': ['UI überarbeiten', ' Reponsive Design überarbeiten'],
    'notesTitles': ['Task 1', 'Task 2'],

    'archivedNotes': [],
    'archivedNotesTitles': [],

    'trashNotes': [],
    'trashNotesTitles': [],
}


function init() {
    getFromLocalStorage();
    renderNotes();
    escDialogClose();
}

function renderAllFunction() {
    renderNotes();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));

    localStorage.setItem("archivedNotes", JSON.stringify(allNotes.archivedNotes));
    localStorage.setItem("archivedNotesTitles", JSON.stringify(allNotes.archivedNotesTitles));


    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
}

function getFromLocalStorage() {
    if (localStorage.getItem("notes") && localStorage.getItem("notesTitles") && localStorage.getItem("archivedNotes") && localStorage.getItem("archivedNotesTitles") && localStorage.getItem("trashNotes") && localStorage.getItem("trashNotesTitles")) {
        allNotes.notes = JSON.parse(localStorage.getItem("notes"));
        allNotes.notesTitles = JSON.parse(localStorage.getItem("notesTitles"));

        allNotes.archivedNotes = JSON.parse(localStorage.getItem("archivedNotes"));
        allNotes.archivedNotesTitles = JSON.parse(localStorage.getItem("archivedNotesTitles"));

        allNotes.trashNotes = JSON.parse(localStorage.getItem("trashNotes"));
        allNotes.trashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
    }
}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
        contentRef.innerHTML += gehtNoteTemp(indexNote);
    }
}


function addNote() {
    let notesTitleInputRef = document.getElementById('note_title_input');
    let noteInputRef = document.getElementById('note_input');

    let noteTitleInput = notesTitleInputRef.value;
    let noteInput = noteInputRef.value;

    allNotes.notesTitles.push(noteTitleInput);
    allNotes.notes.push(noteInput);

   
    notesTitleInputRef.value = ``;
    noteInputRef.value = ``;
    renderAllFunction();
}


function deleteNoteComplete(indexNote) {
    allNotes.trashNotes.splice(indexNote, 1);
    allNotes.trashNotesTitles.splice(indexNote, 1);

    renderAllFunction();
    dialogRender(dialogWindow, startKey);
}


function openDialogTrash() {
    let dialogTrach = document.getElementById('trash_dialog');
    if (dialogTrach) {
        dialogTrach.showModal();

        dialogTrach.classList.add('dialog');
        document.body.classList.add('hidden');

    saveToLocalStorage();
    dialogRender('trash', 'trashNotes');
    }
}

function openDialogArchived() {
    let dialogAchive = document.getElementById('archive_dialog');
    if (dialogAchive) {
        dialogAchive.showModal();

        dialogAchive.classList.add('dialog');
        document.body.classList.add('hidden');
        saveToLocalStorage()
        dialogRender('archive', 'archivedNotes');
    }
}



function closeDialog(dialogWindow) {
    let dialog = document.getElementById(`${dialogWindow}_dialog`);
    if (dialog) {
        dialog.close();
        dialog.classList.remove('dialog');
        document.body.classList.remove('hidden');

    }
}

function escDialogClose() {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDialog('trash');
            closeDialog('archive');
        }
    }); 
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1)[0];
    allNotes[destinationKey].push(note)[0];

    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1)[0];
    allNotes[destinationKey + "Titles"].push(noteTitle)[0];

    renderAllFunction();
}

function dialogRender(dialogWindow, startKey) {
    let dialog =  document.getElementById(`${dialogWindow}_dialog`);
    if(dialog) {
    dialog.innerHTML = ""
    }

    for (let i = 0; i < allNotes[startKey].length; i++) {
        dialog.innerHTML += ` 
        <p> ${allNotes[startKey + 'Titles'][i]} ${allNotes[startKey][i]} </p>
        `
            if(startKey === 'trashNotes') {
            dialog.innerHTML += ` 
            <button class="actionButton" onclick="deleteNoteComplete(${i})">Komplett Löschen</button>
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'archivedNotes')">Archivieren</button>
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'notes')">Zurück zu Notes</button> `
            }

            if(startKey === 'archivedNotes') {
            dialog.innerHTML += ` 
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'trashNotes')">Papierkorb</button>
            <button class="actionButton" onclick="moveNote(${i}, '${startKey}', 'notes')">Zurück zu Notes</button>
        `
        }      
    }
}
    



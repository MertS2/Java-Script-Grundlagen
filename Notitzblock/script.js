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

    if (localStorage.getItem("notes") && localStorage.getItem("notesTitles")) {
        allNotes.notes = JSON.parse(localStorage.getItem("notes"));
        allNotes.notesTitles = JSON.parse(localStorage.getItem("notesTitles"));
    }

    if (localStorage.getItem("archivedNotes") && localStorage.getItem("archivedNotesTitles")) {
        allNotes.archivedNotes = JSON.parse(localStorage.getItem("archivedNotes"));
        allNotes.archivedNotesTitles = JSON.parse(localStorage.getItem("archivedNotesTitles"));
    }

    if( localStorage.getItem("trashNotes") && localStorage.getItem("trashNotesTitles")) {
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
    dialogRenderNotes('trashNotes', 'Papierkorb'); 
}

function openDialog(dialogcContainer){
    let dialog = document.getElementById('dialog');
    if (dialog) {
        dialog.showModal();
        dialog.classList.add('dialog');
        document.body.classList.add('hidden');
    }
    checkDialog(dialogcContainer);
}

function closeDialog() {
    let dialog = document.getElementById('dialog');
    if (dialog) {
        dialog.close();
        dialog.classList.remove('dialog');
        document.body.classList.remove('hidden');
    }
}

function escDialogClose() {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDialog()
        }
    });
}

function moveNote(indexNote, startKey, destinationKey, title) {
    let note = allNotes[startKey].splice(indexNote, 1)[0];
    allNotes[destinationKey].push(note)[0];

    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1)[0];
    allNotes[destinationKey + "Titles"].push(noteTitle)[0];

    renderAllFunction();
    dialogRenderNotes(startKey, title);    
}

function dialogRender(title) {
    let dialog = document.getElementById('dialog');
    if (dialog) {
        dialog.innerHTML = ""
    }
    dialogRenderTemp(title);
}


function dialogRenderNotes(startKey, title) {
    let dialog = document.getElementById('dialog');
    if (dialog) {
        dialog.innerHTML = ""
    }
    dialogRenderTemp(title);

    for (let i = 0; i < allNotes[startKey].length; i++) {
    dialogRenderNotesTemp(startKey, i);
    }
}

function checkDialog(dialogcContainer) {
    if(dialogcContainer === "trash") {
        dialogRenderNotes('trashNotes', 'Papierkorb'); 
    } else if(dialogcContainer === "archive") {
        dialogRenderNotes('archivedNotes', 'Archiv'); 
    }
}



function error(event) {
    event.preventDefault()

   let erorr = document.getElementById('formError');
   let inputnote = document.getElementById('note_input');

    if (inputnote.value =="") {
        erorr.classList.remove('d_none');
    } else {
        erorr.classList.add('d_none');
        addNote();
    }
}




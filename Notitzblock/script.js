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
    escDialogClose()
}

function renderAllFunction() {
    renderNotes();
    saveToLocalStorage()
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
        notes = JSON.parse(localStorage.getItem("notes"));
        notesTitles = JSON.parse(localStorage.getItem("notesTitles"));

        archivedNotes = JSON.parse(localStorage.getItem("archivedNotes"))
        archivedNotesTitles = JSON.parse(localStorage.getItem("archivedNotesTitles"))

        trashNotes = JSON.parse(localStorage.getItem("trashNotes"))
        trashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"))
    }
}

function renderNotes() {
    let contentRef = document.getElementById('content')
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

    renderAllFunction()
    notesTitleInputRef.value = ``;
    noteInputRef.value = ``;
}


function deleteNoteComplete(indexNote) {
    allNotes.trashNotes.splice(indexNote, 1);
    allNotes.trashNotesTitles.splice(indexNote, 1);

    renderAllFunction()
    openDialogTrashRender();
}


function openDialogTrash(i) {
    let dialogTrach = document.getElementById('trash_dialog');
    if (dialogTrach) {
        dialogTrach.showModal();

        dialogTrach.classList.add('dialog');
        saveToLocalStorage()
        openDialogTrashRender()
    }
}

function openDialogTrashRender() {
    let dialogTrachRef = document.getElementById('trash_notes_list');
    dialogTrachRef.innerHTML = "";

    for (let i = 0; i < allNotes.trashNotes.length; i++) {
        dialogTrachRef.innerHTML += ` 
            <p> ${allNotes.trashNotesTitles[i]}  ${allNotes.trashNotes[i]} </p>
            <button class="actionButton" onclick="deleteNoteComplete(${i})">X</button>

            <button class="actionButton" onclick="moveNote(${i} , 'trashNotes' , 'archivedNotes')">Archived</button>
            <button class="actionButton" onclick="moveNote(${i} , 'trashNotes' , 'notes')">Notes</button>
        `
    }
}

function openDialogArchived() {
    let dialogAchive = document.getElementById('archive_dialog');
    if (dialogAchive) {
        dialogAchive.showModal();

        dialogAchive.classList.add('dialog');
        saveToLocalStorage()
        openArchivRender()
    }
}

function openArchivRender() {
    let dialogAchiveRef = document.getElementById('archive_notes_list');
    dialogAchiveRef.innerHTML = "";

    for (let i = 0; i < allNotes.archivedNotes.length; i++) {
        dialogAchiveRef.innerHTML += ` 
            <p> ${allNotes.archivedNotesTitles[i]}  ${allNotes.archivedNotes[i]} </p>
            <button class="actionButton" onclick="moveNote(${i} , 'archivedNotes' , 'trashNotes')">Papierkorb</button>
            <button class="actionButton" onclick="moveNote(${i} , 'archivedNotes' , 'notes')">Notes</button>
        `
    }
}

function closeDialog(dialogWindow) {
    let dialog = document.getElementById(`${dialogWindow}_dialog`);
    if (dialog) {
        dialog.close();
        dialog.classList.remove('dialog');
    }
}

function escDialogClose() {
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeDialog('trash')
            closeDialog('archive')
        }
    }); 
}

function moveNote(indexNote, startKey, destinationKey) {
    let note = allNotes[startKey].splice(indexNote, 1)[0];
    allNotes[destinationKey].push(note)[0];

    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1)[0];
    allNotes[destinationKey + "Titles"].push(noteTitle)[0];

    renderAllFunction()
    openDialogTrashRender()
    openArchivRender()
}
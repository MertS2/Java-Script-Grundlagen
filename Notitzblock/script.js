let allNotes = {
    'notes': ['UI überarbeiten', ' Reponsive Design überarbeiten'],
    'notesTitles': ['Task 1', 'Task 2'],

    'archivedNotes': [],
    'archivedTitles': [],

    'trashNotes': [],
    'trashNoteTitles': [],
}


function init() {
    getFromLocalStorage();
    renderNotes();
    escDialogClose()
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
    localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));

    localStorage.setItem("archivedNotes", JSON.stringify(allNotes.archivedNotes));
    localStorage.setItem("archivedTitles", JSON.stringify(allNotes.archivedTitles));


    localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(allNotes.trashNoteTitles));
}

function getFromLocalStorage() {
    if (localStorage.getItem("notes") && localStorage.getItem("notesTitles") && localStorage.getItem("archivedNotes") && localStorage.getItem("archivedTitles") && localStorage.getItem("trashNotes") && localStorage.getItem("trashNoteTitles")) {
        notes = JSON.parse(localStorage.getItem("notes"));
        notesTitles = JSON.parse(localStorage.getItem("notesTitles"));

        archivedNotes = JSON.parse(localStorage.getItem("archivedNotes"))
        archivedTitles = JSON.parse(localStorage.getItem("archivedTitles"))

        trashNotes = JSON.parse(localStorage.getItem("trashNotes"))
        trashNoteTitles = JSON.parse(localStorage.getItem("trashNoteTitles"))
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

    renderNotes();
    saveToLocalStorage()
    notesTitleInputRef.value = ``;
    noteInputRef.value = ``;
}

function trashNote(indexNote) {
    let trashNote = allNotes.notes.splice(indexNote, 1)[0];
    allNotes.trashNotes.push(trashNote);

    let trashNoteTitle = allNotes.notesTitles.splice(indexNote, 1)[0];
    allNotes.trashNoteTitles.push(trashNoteTitle);

    saveToLocalStorage()
    renderNotes();
}


function NoteToArchive(indexNote) {
    let noteToArchive = allNotes.notes.splice(indexNote, 1)[0];
    allNotes.archivedNotes.push(noteToArchive);

    let notetitleToArchive = allNotes.notesTitles.splice(indexNote, 1)[0];
    allNotes.archivedTitles.push(notetitleToArchive);

    saveToLocalStorage();
    renderNotes();
}

function achivedToNotes(indexNote) {
    let archivedNote = allNotes.archivedNotes.splice(indexNote, 1)[0];
    allNotes.notes.push(archivedNote);

    let archivedNoteTitle = allNotes.archivedTitles.splice(indexNote, 1)[0];
    allNotes.notesTitles.push(archivedNoteTitle);

    saveToLocalStorage();
    renderNotes();
    openDialogArchived()
}

function deleteNoteComplete(indexNote) {
    allNotes.trashNotes.splice(indexNote, 1);
    allNotes.trashNoteTitles.splice(indexNote, 1);

    saveToLocalStorage()
    openDialogTrash();
}


function openDialogTrash() {
    let dialogTrach = document.getElementById('trash_dialog');
    if (dialogTrach) {
        dialogTrach.showModal();

        let dialogTrachRef = document.getElementById('trash_notes_list');
        dialogTrachRef.innerHTML = "";

        for (let i = 0; i < allNotes.trashNotes.length; i++) {
            dialogTrachRef.innerHTML += ` 
            <p> ${allNotes.trashNoteTitles[i]}  ${allNotes.trashNotes[i]} </p>
            <button class="actionButton" onclick="deleteNoteComplete(${i})">X</button>
            `
        }
        dialogTrach.classList.add('dialog');
        saveToLocalStorage()
    }
}

function openDialogArchived() {
    let dialogAchive = document.getElementById('archive_dialog');
    if (dialogAchive) {
        dialogAchive.showModal();

        let dialogAchiveRef = document.getElementById('archive_notes_list');
        dialogAchiveRef.innerHTML = "";

        for (let i = 0; i < allNotes.archivedNotes.length; i++) {
            dialogAchiveRef.innerHTML += ` 
            <p> ${ allNotes.archivedTitles[i]}  ${allNotes.archivedNotes[i]} </p>
            <button class="actionButton" onclick="achivedToNotes(${i})">X</button>
            `
        }
        dialogAchive.classList.add('dialog');
        saveToLocalStorage()

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
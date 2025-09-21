let notes = ['UI überarbeiten', ' Reponsive Design überarbeiten',];
let notesTitles = ['Task 1', 'Task 2',];

let archivedNotes = [];
let archivedTitles = [];


let trashNotes  = [];
let trashNoteTitles = [];

function init() {
    getFromLocalStorage();
    renderNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));

    localStorage.setItem("archivedNotes", JSON.stringify(archivedNotes));
    localStorage.setItem("archivedTitles", JSON.stringify(archivedTitles));


    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
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

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += gehtNoteTemp(indexNote);
    }
}


function addNote() {
    let notesTitleInputRef = document.getElementById('note_title_input');
    let noteInputRef = document.getElementById('note_input');

    let noteTitleInput = notesTitleInputRef.value;
    let noteInput = noteInputRef.value;

    notesTitles.push(noteTitleInput);
    notes.push(noteInput);

    renderNotes();
    saveToLocalStorage()
    notesTitleInputRef.value = ``;
    noteInputRef.value = ``;
}

function archivedNote(indexNote ) {
    let archivedNote = notes.splice(indexNote , 1)[0];
    archivedNotes.push(archivedNote);

    let archivedTitle = notesTitles.splice(indexNote , 1)[0];
    archivedTitles.push(archivedTitle);
    saveToLocalStorage()
    renderNotes();
}


function trashNote(indexNote) {
    let trashNote = notes.splice(indexNote , 1)[0];
    trashNotes.push(trashNote);

    let trashNoteTitle = notesTitles.splice(indexNote , 1)[0];
    trashNoteTitles.push(trashNoteTitle);

    saveToLocalStorage()
    renderNotes();
}

function deleteNoteComplete(indexNote) {
    trashNotes.splice(indexNote, 1);
    trashNoteTitles.splice(indexNote, 1);

    saveToLocalStorage()
    openDialogTrash();
}


function openDialogTrash() {
    let dialogTrach = document.getElementById('trash_dialog');
    if (dialogTrach) {
        dialogTrach.showModal();

        let dialogTrachRef = document.getElementById('trash_notes_list');
        dialogTrachRef.innerHTML = "";

        for (let i = 0; i < trashNote.length; i++) {
            dialogTrachRef.innerHTML += ` 
            <p> Headline: ${trashNoteTitles[i]} => ${trashNotes[i]} </p>
            <button class="delet_btn" onclick="deletetNotesComplet(${i})">X</button></p>
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

        for (let i = 0; i < archivedNotes.length; i++) {
            dialogAchiveRef.innerHTML += ` 
            <p> Headline: ${archivedTitles[i]} => ${archivedNotes[i]} </p>
            <button class="delet_btn" onclick="">X</button></p>
            `
        }
        dialogAchive.classList.add('dialog');
        saveToLocalStorage()

    }
}

function closeDialogTrach() {
    let dialog = document.getElementById('trash_dialog');
    if (dialog) {
        dialog.close();
        dialog.classList.remove('dialog');
    }
}


function closeDialogArchive() {
    let dialog = document.getElementById('archive_dialog');
    if (dialog) {
        dialog.close();
        dialog.classList.remove('dialog');
    }
}



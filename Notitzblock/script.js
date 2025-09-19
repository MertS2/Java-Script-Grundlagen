let notes = ['UI überarbeiten', ' Reponsive Design überarbeiten',];
let notesTitle = ['Task 1', 'Task 2',];

let arhivhNotes = [];
let arhivhNotesTitkles = [];


let trachNotes = [];
let trachNotTitkles = [];

function init() {
    getFromLocalStorage();
    renderNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitle", JSON.stringify(notesTitle));

    localStorage.setItem("arhivhNotes", JSON.stringify(arhivhNotes));
    localStorage.setItem("arhivhNotesTitkles", JSON.stringify(arhivhNotesTitkles));


    localStorage.setItem("trachNotes", JSON.stringify(trachNotes));
    localStorage.setItem("trachNotTitkles", JSON.stringify(trachNotTitkles));
}

function getFromLocalStorage() {
    if (localStorage.getItem("notes") && localStorage.getItem("notesTitle") && localStorage.getItem("trachNotes") && localStorage.getItem("trachNotTitkles")) {
        notes = JSON.parse(localStorage.getItem("notes"));
        notesTitle = JSON.parse(localStorage.getItem("notesTitle"));

        arhivhNotes = JSON.parse(localStorage.getItem("arhivhNotes"))
        arhivhNotesTitkles = JSON.parse(localStorage.getItem("arhivhNotesTitkles"))



        trachNotes = JSON.parse(localStorage.getItem("trachNotes"))
        trachNotTitkles = JSON.parse(localStorage.getItem("trachNotTitkles"))
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
    let noteINput = noteInputRef.value;

    notesTitle.push(noteTitleInput);
    notes.push(noteINput);

    renderNotes();
    saveToLocalStorage()
    notesTitleInputRef.value = ``;
    noteInputRef.value = ``;
}

function achiveNotes(indexNote) {
    let archivedNote = notes.splice(indexNote, 1)[0];
    arhivhNotes.push(archivedNote);

    let archivedTitle = notesTitle.splice(indexNote, 1)[0];
    arhivhNotesTitkles.push(archivedTitle);
    saveToLocalStorage()
    renderNotes();
}

function trach_notes(indexNote) {
    let trachNot = notes.splice(indexNote, 1)[0];
    trachNotes.push(trachNot);

    let trachNotTitkle = notesTitle.splice(indexNote, 1)[0];
    trachNotTitkles.push(trachNotTitkle);

    saveToLocalStorage()
    renderNotes();
}

function archiveToTrash(index) {
    let arhivhNotes = arhivhNotes.splice(index, 1)[0];
    let trashedTitle = arhivhNotesTitkles.splice(index, 1)[0];

    arhivhNotes.push(arhivhNotes);
    trachNotTitkles.push(arhivhNotesTitkles);

    saveToLocalStorage();
    openDialogArchive();
}

function deletetNotesComplet(indexTrachNote) {
    trachNotes.splice(indexTrachNote, 1);
    trachNotTitkles.splice(indexTrachNote, 1);

    saveToLocalStorage()
    openDialogTrach();
}


function openDialogTrach() {
    let dialogTrach = document.getElementById('trach_dialog');
    if (dialogTrach) {
        dialogTrach.showModal();

        let dialogTrachRef = document.getElementById('trach_notes_list');
        dialogTrachRef.innerHTML = "";

        for (let i = 0; i < trachNotes.length; i++) {
            dialogTrachRef.innerHTML += ` 
            <p> Title: ${trachNotTitkles[i]} => ${trachNotes[i]} </p>
            <button class="delet_btn" onclick="deletetNotesComplet(${i})">X</button></p>
            `
        }
        dialogTrach.classList.add('dialog');
        saveToLocalStorage()

    }
}

function openDialogArchive() {
    let dialogAchive = document.getElementById('archive_dialog');
    if (dialogAchive) {
        dialogAchive.showModal();

        let dialogAchiveRef = document.getElementById('archive_notes_list');
        dialogAchiveRef.innerHTML = "";

        for (let i = 0; i < trachNotes.length; i++) {
            dialogAchiveRef.innerHTML += ` 
            <p> Title: ${trachNotTitkles[i]} => ${trachNotes[i]} </p>
            <button class="delet_btn" onclick="moveArchiveToTrash(${index})">X</button></p>
            `
        }
        dialogAchive.classList.add('dialog');
        saveToLocalStorage()

    }
}

function closeDialogTrach() {
    let dialog = document.getElementById('trach_dialog');
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



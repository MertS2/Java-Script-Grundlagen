let notes = ['UI überarbeiten', ' Reponsive Design überarbeiten',];
let notesTitle = ['Task 1', 'Task 2',];

let trachNotes = [];
let trachNotTitkles = [];

function init() {
    getFromLocalStorage();
    renderNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitle", JSON.stringify(notesTitle));
    localStorage.setItem("trachNotes", JSON.stringify(trachNotes));
    localStorage.setItem("trachNotTitkles", JSON.stringify(trachNotTitkles));
}

function getFromLocalStorage() {
    if (localStorage.getItem("notes") && localStorage.getItem("notesTitle") && localStorage.getItem("trachNotes") && localStorage.getItem("trachNotTitkles")) {
        notes = JSCON.parse(localStorage.getItem("notes"));
        notesTitle = JSON.parse(localStorage.getItem("notesTitle"));
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

function gehtNoteTemp(indexNote) {
    return `
    <p> Title: ${notesTitle[indexNote]} => ${notes[indexNote]} </p>
    
    <button class="delet_btn" onclick="deletetNotes(${indexNote})">X</button></p>`
}

function gehtTrachNoteTemp(indexTrachNote) {
    return `
    <dialog class="dialog_trach">   
    <p> Title: ${trachNotTitkles[indexTrachNote]} => ${trachNotes[indexTrachNote]} </p>
    <button class="delet_btn" onclick="deletetNotesComplet(${indexTrachNote})">X</button>
    </dialog>
    `
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

function deletetNotes(indexNote) {
    let trachNot = notes.splice(indexNote, 1)[0];
    trachNotes.push(trachNot);

    let trachNotTitkle = notesTitle.splice(indexNote, 1)[0];
    trachNotTitkles.push(trachNotTitkle);

    saveToLocalStorage()
    renderNotes();
}

function deletetNotesComplet(indexTrachNote) {
    trachNotes.splice(indexTrachNote, 1);
    openDialogTrach();
    saveToLocalStorage()
}


function openDialogTrach() {
    let dialog = document.getElementById('trach_dialog');
    if (dialog) {
        dialog.showModal();

        let dialogRef = document.getElementById('trach_notes_list');
        dialogRef.innerHTML = "";

        for (let i = 0; i < trachNotes.length; i++) {
            dialogRef.innerHTML += ` 
            <p> Title: ${trachNotTitkles[i]} => ${trachNotes[i]} </p>
            <button class="delet_btn" onclick="deletetNotesComplet(${i})">X</button></p>
            `
        }
        dialog.classList.add('dialog_trach');
    }
}

function closeDialogTrach() {
    let dialog = document.getElementById('trach_dialog');
    if (dialog) {
        dialog.close();
        dialog.classList.remove('dialog_trach');
    }
}




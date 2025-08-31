let notes = ['UI überarbeiten', ' Reponsive Design überarbeiten',];
let trachNotes = [];

function init() {
    renderNotes()
}

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";


    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += gehtNoteTemp(indexNote);
    }
}

function renderTrachNotes() {
    let trachContentRef = document.getElementById('content_trach')
    trachContentRef.innerHTML = "";


    for (let indexTrachNote = 0; indexTrachNote < trachNotes.length; indexTrachNote++) {
        trachContentRef.innerHTML += gehtTrachNoteTemp(indexTrachNote);
    }
}


function gehtNoteTemp(indexNote) {
    return `
    <p> + ${notes[indexNote]} 
    
    <button class="delet_btn" onclick="deletetNotes(${indexNote})">X</button></p>`
}

function gehtTrachNoteTemp(indexTrachNote) {
    return `
    <dialog class="dialog_trach" >  
    <p> + ${notes[trachNotes]} 
    
    <button class="delet_btn" onclick="deletetNotes(${indexTrachNote})">X</button></p>
    </dialog>
    `
}


function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteINput = noteInputRef.value;

    notes.push(noteINput);
    renderNotes();
    noteInputRef.value = ``;
}

function deletetNotes(indexNote) {
    let trachNot = notes.splice(indexNote, 1);
    trachNotes.push(trachNot);
    renderNotes();
}


function openDialogTrach() {
    let dialog = document.getElementById('trach_dialog');
    if (dialog) {
        dialog.showModal();
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




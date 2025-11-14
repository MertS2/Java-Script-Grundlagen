function init() {
    render()
    renderComents()
}

function render() {
    let mainContent = document.getElementById('main_content');
    mainContent.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        mainContent.innerHTML += bookTemplate(books[i].name, books[i].author, books[i].likes, books[i].publishedYear, books[i].price, books[i].genre, i);
    }
}

function renderComents() {
    let comentsContent = document.getElementById('coments');

    for (let index = 0; index < books[index].comments.length; index++) {
        let cmment = books[index].comments[index];
        comentsContent.innerHTML += bookcomentsTemplate(cmment.name, cmment.comment, index);
    }
}

/* function liked() {

    for (let index = 0; index < books.liked.length.length; index++) {

        if( == true){
            
        }
    }
} */
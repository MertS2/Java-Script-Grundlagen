function init() {
    render()
}

function render() {
    let mainContent = document.getElementById('main_content');
    let comentsContent = document.getElementById('coments');
    console.log(comentsContent)

    mainContent.innerHTML = "";
    comentsContent.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        mainContent.innerHTML += bookTemplate(books[i].name, books[i].author, books[i].likes, books[i].publishedYear, books[i].price, books[i].genre, i);

        for (let index = 0; index < books[i].comments.length; index++) {
            let cmment = books[i].comments[index];
            comentsContent.innerHTML += bookcomentsTemplate(cmment.name, cmment.comment, index);
        }
    }
}

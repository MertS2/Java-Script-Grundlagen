function bookTemplate(path, path2, path3, path4, path5, path6, i) {
    return `
    <div class="books_container">
        <div class="bookDescription">
            <p> Bookname:   ${path} </p>
            <p> Bookauthor: ${path2} </p>
            <p> Bookpublishedyear:  ${path4} </p>
            <p> Bookprice:  ${path5} </p>
            <p> Bookgenrem: ${path6} </p>
            <br>
            <p> Booklikes:  ${path3} </p>
            <h3> You liked? </h3>
            <button onclick="liked(${i})">
                <img class="heart_img" src="./icon/heart.png" alt="">
            </button>
        </div>
        <div>
            <img class="img_book" src="./assets/book.png" alt="">
        </div>

        <div class="inputField">
            <label id="name" name="name" for="text">Name:</label>
            <input type="text" placeholder="Dein Name.......">
  
            <label for="kommentar">Kommentar:</label>
            <textarea id="kommentar" name="kommentar" placeholder="Dein Kommentar......."></textarea>
        </div>
        <div class="div_line"></div>
            <div id="coments_${i}"></div>

        
                                            `
}


function bookcomentsTemplate(path, path2) {
    return `
    <h2>kommentare: </h2> 
        <p> Name: ${path}</p>
        <p>Kommentar: ${path2}</p>
    `
}
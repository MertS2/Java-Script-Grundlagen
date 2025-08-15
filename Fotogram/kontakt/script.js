function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mpwlbjwq", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./sendMail.html";
    }).catch((error) => {
        console.log(error);
    });
}

/* nav */
function navMobileFunction() {
    let nav = document.getElementById("nav_mobile_contact");
    nav.classList.toggle("d_none");
}





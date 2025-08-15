function sendMail(i) {
    i.preventDefault();
    const data = new FormData(i.target);

    fetch("https://formspree.io/f/mpwlbjwq", {
        method: "POST",
        body: new FormData(i.target),
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





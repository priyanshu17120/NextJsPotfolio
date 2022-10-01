var naam = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "post",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
        // you can put any JS code here
        naam.value = "";
        email.value = "";
        message.value = "";
        alert("Form Submitted");
    });

});



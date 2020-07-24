"use strict";
var AufgabeB;
(function (AufgabeB) {
    let buttonSignIn = document.getElementById("signin");
    buttonSignIn.addEventListener("click", handleClickSignIn);
    let buttonLogIn = document.getElementById("login");
    buttonLogIn.addEventListener("click", handleClickLogIn);
    let buttonCoolKidz = document.getElementById("coolkidz");
    buttonCoolKidz.addEventListener("click", handleChatroombutton1);
    let buttonnscKidz = document.getElementById("nsckidz");
    buttonnscKidz.addEventListener("click", handleChatroombutton2);
    function handleChatroombutton1() {
        localStorage.setItem("Chat", "1");
    }
    function handleChatroombutton2() {
        localStorage.setItem("Chat", "2");
    }
    async function handleClickSignIn() {
        let formular = new FormData(document.getElementById("formular"));
        alert("Du hast dich erfolgreich Registriert! Logge dich nun ein! :)");
        let url = "https://soseeasypass.herokuapp.com";
        url += "/signin";
        let query = new URLSearchParams(formular);
        url += "?" + query.toString();
        await fetch(url);
    }
    async function handleClickLogIn() {
        //Formdaten bekommen
        let formularLogIn = new FormData(document.getElementById("formular"));
        let url = "https://soseeasypass.herokuapp.com";
        url += "/login";
        let query = new URLSearchParams(formularLogIn);
        url += "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.text();
        console.log("ResponseText: " + responseText); //OMG ES FUNKTIONIERRRRRTTTT JAAAAAA
        if (responseText == "true" && localStorage.getItem("Chat") == "1" || localStorage.getItem("Chat") == "2") {
            let formular = new FormData(document.getElementById("formular"));
            let username = formular.get("Username");
            let password = formular.get("Password");
            localStorage.setItem("Username", username);
            localStorage.setItem("Password", password);
            window.location.href = "chatbox.html";
        }
        else {
            alert("Du hast entweder keinen Account auf dieser Seite oder keinen Chatroom ausgewählt!");
            console.log("Nicht Eingeloggt oder Chatroom ausgewählt");
        }
    }
    console.log("Fertig geladen");
})(AufgabeB || (AufgabeB = {}));
//# sourceMappingURL=scriptLogIn.js.map
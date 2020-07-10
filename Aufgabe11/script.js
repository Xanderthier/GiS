"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let html = document.getElementById("html");
    html.addEventListener("click", server);
    let json = document.getElementById("json");
    json.addEventListener("click", clickJSON);
    async function server() {
        let formData = new FormData(document.forms[0]);
        let url = "https://soseeasypass.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("HTMLAnswer");
        serverResponse.innerHTML = responseText;
    }
    async function clickJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://soseeasypass.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map
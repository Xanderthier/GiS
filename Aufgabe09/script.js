"use strict";
/*namespace Aufgabe08 {


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", communicate);

    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        //platzhalter :^)
        let url: string = "https://soseeasypass.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);

        for (let entry of query) {
            console.log(entry);
            console.log("value: " + entry[1]);
            console.log("Type: " + entry[0]);
        }
    }

} */
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
"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let buttonSignInJson = document.getElementById("ausgeben");
    buttonSignInJson.addEventListener("click", handleClickRetrieve);
    let buttonSignInHtml = document.getElementById("absenden");
    buttonSignInHtml.addEventListener("click", handleClickStore);
    let ausgabe = document.getElementById("Ausgabefeld");
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    ausgabe.setAttribute("style", "display: none");
    let formData;
    /* let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    buttonActionHtml.addEventListener("click", handleClickStore);
    let buttonActionJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("show");
    buttonActionJson.addEventListener("click", handleClickRetrieve); */
    async function handleClickRetrieve() {
        //let url: string = "http://localhost:8100/" + _format;
        let url = "https://soseeasypass.herokuapp.com";
        url += "/output";
        let response = await fetch(url);
        console.log(response);
        let responseText = await response.json();
        let ausgabe = document.getElementById("Ausgabefeld");
        ausgabe.setAttribute("style", "display: block");
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }
    async function handleClickStore() {
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/";
        let url = "https://soseeasypass.herokuapp.com";
        url += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        //formular.reset(); aaaa
        await fetch(url);
    }
    console.log("Fertig geladen");
    /*let html: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
    html.addEventListener("click", server);

    let json: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    json.addEventListener("click", clickJSON);

    async function server(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        await fetch(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("HTMLAnswer");
        serverResponse.innerHTML = responseText;
    }

    async function clickJSON(): Promise<void> {
        
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        await fetch(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        console.log(responseText);
    }*/
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map
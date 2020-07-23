"use strict";
var AufgabeB;
(function (AufgabeB) {
    let btnChoiceCool = document.getElementById("coolkidz");
    btnChoiceCool.addEventListener("click", handleBtn);
    //let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    //ausgabe.setAttribute("style", "display: none");
    async function genMessages() {
        //let url: string = "http://localhost:8100/";
        let url = "https://soseeasypass.herokuapp.com";
        if (localStorage.getItem("Chat") == "1") {
            url += "/chatroom1";
        }
        if (localStorage.getItem("Chat") == "2") {
            url += "/chatroom2";
        }
        let response = await fetch(url); //js objekt block zurückgekommen
        let responseString = await response.json();
        let splittedString = responseString.split("},");
        for (let i = 0; i == splittedString.length - 2; i++) { //.split erschafft unnötiges extra obj.
            splittedString[i] += "}";
            let splitJson = JSON.parse(splittedString[i]); //möglicherweise any
        }
        let divTextMes = document.createElement("div");
        divTextMes.setAttribute("class", "TxtMes");
        let divMessageContainer = document.getElementById("flexMessages");
        divMessageContainer.appendChild(divTextMes);
    }
    let formData;
    /* let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    buttonActionHtml.addEventListener("click", handleClickStore);
    let buttonActionJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("show");
    buttonActionJson.addEventListener("click", handleClickRetrieve); */
    /*async function handleClickRetrieve(): Promise<void> {
        //let url: string = "http://localhost:8100/" + _format;
        let url: string = "https://soseeasypass.herokuapp.com";

        url += "/output";

        let response: Response = await fetch(url);
        console.log(response);
        let responseText: string = await response.json();

        let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
        ausgabe.setAttribute("style", "display: block");
        ausgabe.innerHTML = responseText;
        console.log(responseText);
    }*/
    async function handleBtn(_event) {
        let target = _event.target;
        if (target.getAttribute("id") == "coolkidz") {
            localStorage.setItem("Chat", "1");
        }
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/";
        let url = "https://soseeasypass.herokuapp.com";
        url += "/json";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let formular = document.getElementById("formular");
        formular.reset();
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
})(AufgabeB || (AufgabeB = {}));
//# sourceMappingURL=scriptMes.js.map
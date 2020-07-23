"use strict";
var AufgabeB;
(function (AufgabeB) {
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
        console.log("fetch: " + url);
        let response = await fetch(url); //js objekt block zurückgekommen
        let responseString = await response.json();
        let splittedString = responseString.split("},");
        console.log(response);
        for (let i = 0; i == splittedString.length - 2; i++) { //.split erschafft unnötiges extra obj.
            splittedString[i] += "}";
            let splitJson = JSON.parse(splittedString[i]); //möglicherweise any oder json, jeweils ob .name fehler wirft
            let txtBubble = document.createElement("div");
            txtBubble.setAttribute("class", "TxtBubble");
            let txtName = document.createElement("div");
            txtName.setAttribute("class", "TxtName");
            txtName.innerHTML = splitJson.Name;
            let txtMes = document.createElement("div");
            txtMes.setAttribute("class", "TxtMes");
            txtName.innerHTML = splitJson.Msg;
            let divMessageContainer = document.getElementById("flexMessages");
            divMessageContainer.appendChild(txtBubble);
            txtBubble.appendChild(txtName);
            txtBubble.appendChild(txtMes);
        }
    }
    genMessages();
    /*let formData: FormData;
     let buttonActionHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
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
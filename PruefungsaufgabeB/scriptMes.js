"use strict";
var AufgabeB;
(function (AufgabeB) {
    //let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    //ausgabe.setAttribute("style", "display: none");
    let buttonSend = document.getElementById("sendbtn");
    buttonSend.addEventListener("click", handleClickRetrieve);
    document.getElementById("Name").value = localStorage.getItem("Username"); //in value von Name Inputtag den username schreiben, Name inputtag hat "hidden" damit man nicht auf falsche ideen kommt :^)
    async function handleClickRetrieve() {
        //textarea auslesen
        let form = new FormData(document.getElementById("form"));
        //let formUsername: FormData = new FormData(<HTMLFormElement>document.getElementById("formUsername"));
        //let formText: FormData = new FormData(<HTMLFormElement>document.getElementById("formText")); //HTML form in formdata umwandeln
        //let message: String = <String>formText.get("text");     // lese text input ein
        //let user: String = <String>formUsername.get("username");
        //var textAreaText = document.getElementById("textarea")!;
        //User Auslesen
        //let user: String = <String>localStorage.getItem("Username"); alles schrott hier
        //let user: String = '"Name":"';
        //user += localStorage.getItem("Username")!;                //lese User von localstorage ein
        //user += '"';
        //console.log(user);
        //auslese in Datenbank schreiben
        let url = "https://soseeasypass.herokuapp.com";
        url += "/storeMsg";
        let query = new URLSearchParams(form);
        //let queryName: URLSearchParams = new URLSearchParams(<any>formUsername); //maybe unsichtbares username feld machen und daraus die info snacken und weiterverarbeiten?
        //let queryMsg: URLSearchParams = new URLSearchParams(<any>formText);
        //console.log("Query msg: " + queryMsg);
        //console.log("Query Name: " + queryName);
        url += "?" + query.toString(); //ich bin ein genius mit dem hidden Username inputtag, call me maximus schlauikus
        //url += "?" + queryName.toString();
        // url += "?" + queryMsg.toString(); //Username fehlt noch für den Datenbankeintrag
        await fetch(url);
    }
    async function genMessages() {
        //let url: string = "http://localhost:8100/";
        let url = "https://soseeasypass.herokuapp.com";
        if (localStorage.getItem("Chat") == "1") {
            url += "/chatroom1";
        }
        if (localStorage.getItem("Chat") == "2") {
            url += "/chatroom2";
        }
        // console.log("fetch: " + url);
        let response = await fetch(url); //js objekt block zurückgekommen
        let responseString = await response.json();
        let splittedString = responseString.split("},");
        /* console.log(response);
        console.log("Response String: " + responseString);
        console.log("Splitted String length: " + splittedString.length); */
        console.log("Splittedstring: " + splittedString);
        for (let i = 0; i < splittedString.length - 1; i++) { //.split erschafft unnötiges extra obj.
            splittedString[i] += "}";
            //splittedString[i] = splittedString[i] + "," + '"Name":"' + localStorage.getItem("Username")! + '"' + "}"; //Brainfuck aber generiert einfach n künstlichen Json abteil im stringified Json lol
            console.log("Splittedstring2: " + splittedString);
            let splitJson = JSON.parse(splittedString[i]); //möglicherweise any oder json, jeweils ob .name fehler wirft
            //hängt divs an flexMessages an
            let txtBubble = document.createElement("div");
            txtBubble.setAttribute("class", "TxtBubble");
            let txtName = document.createElement("div");
            txtName.setAttribute("class", "TxtName");
            txtName.innerHTML = splitJson.Name;
            let txtMes = document.createElement("div");
            txtMes.setAttribute("class", "TxtMes");
            txtMes.innerHTML = splitJson.Msg;
            let divMessageContainer = document.getElementById("flexMessages");
            document.getElementById("flexMessages")?.appendChild(txtBubble);
            divMessageContainer.appendChild(txtBubble);
            txtBubble.appendChild(txtName);
            txtBubble.appendChild(txtMes);
            //bis hierhin
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
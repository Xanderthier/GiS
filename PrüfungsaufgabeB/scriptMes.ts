namespace AufgabeB {




    //let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    //ausgabe.setAttribute("style", "display: none");
    let buttonSend: HTMLElement = document.getElementById("sendbtn")!;
    buttonSend.addEventListener("click", handleClickRetrieve);

    async function handleClickRetrieve(): Promise<void> {
        //textarea auslesen
        let formText: FormData = new FormData(<HTMLFormElement>document.getElementById("formText")); //HTML form in formdata umwandeln
        let message: String = <String>formText.get("text");

        //var textAreaText = document.getElementById("textarea")!;
        //User Auslesen
        var User = localStorage.getItem("User");
        
        //auslese in Datenbank schreiben
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/storeMsg";
        let query: URLSearchParams = new URLSearchParams(<any>formText);
        url += "?" + query.toString();

        await fetch(url);
    }


    async function genMessages(): Promise<void> {

        //let url: string = "http://localhost:8100/";
        let url: string = "https://soseeasypass.herokuapp.com";

        if (localStorage.getItem("Chat") == "1") {
            url += "/chatroom1";
        }

        if (localStorage.getItem("Chat") == "2") {
            url += "/chatroom2";
        }

        // console.log("fetch: " + url);
        let response: Response = await fetch(url);  //js objekt block zurückgekommen
        let responseString: string = await response.json();
        let splittedString: string[] = responseString.split("},");
        /* console.log(response);
        console.log("Response String: " + responseString);
        console.log("Splitted String length: " + splittedString.length); */

        for (let i: number = 0; i < splittedString.length - 1; i++) {      //.split erschafft unnötiges extra obj.
            splittedString[i] += "}";
            let splitJson: any = JSON.parse(splittedString[i]); //möglicherweise any oder json, jeweils ob .name fehler wirft

            console.log("Hi");
            //hängt divs an flexMessages an
            let txtBubble: HTMLElement = document.createElement("div");
            txtBubble.setAttribute("class", "TxtBubble");

            let txtName: HTMLElement = document.createElement("div");
            txtName.setAttribute("class", "TxtName");
            txtName.innerHTML = splitJson.Name;

            let txtMes: HTMLElement = document.createElement("div");
            txtMes.setAttribute("class", "TxtMes");
            txtMes.innerHTML = splitJson.Msg;

            let divMessageContainer: HTMLElement = <HTMLElement>document.getElementById("flexMessages");
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
}
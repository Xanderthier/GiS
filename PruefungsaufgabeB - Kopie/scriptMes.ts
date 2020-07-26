namespace AufgabeB {




    //let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    //ausgabe.setAttribute("style", "display: none");

    let buttonSend: HTMLElement = document.getElementById("sendbtn")!;
    buttonSend.addEventListener("click", handleClickRetrieve);

    let buttonLogOut: HTMLElement = document.getElementById("logOut")!;
    buttonLogOut.addEventListener("click", handleClickLogOut);

    let buttonSwap: HTMLElement = document.getElementById("Swap")!;
    buttonSwap.addEventListener("click", handleClickSwap);


    (<HTMLInputElement>document.getElementById("Name")).value = localStorage.getItem("Username")!; //in value von Name Inputtag den username schreiben, Name inputtag hat "hidden" damit man nicht auf falsche ideen kommt :^)

    window.setInterval(function () {
        genMessages();                      //Autorefresh für aktualisierung anderer nachrichten
        let scrollbar = document.getElementById("flexMessages")!;
        scrollbar.scrollTop = scrollbar.scrollHeight; // Autoscrolldown,  Quelle: https://stackoverflow.com/questions/7303948/how-to-auto-scroll-to-end-of-div-when-data-is-added by user
    }, 30000);  //30s oder mehr weil sonst datenbank abstürzt

    function handleClickSwap(): void {

        if (localStorage.getItem("Chat") == "1") {
            localStorage.setItem("Chat", "2");
            location.reload();
        }

        else if (localStorage.getItem("Chat") == "2") { //(localStorage.getItem("Chat") == "2")
            localStorage.setItem("Chat", "1");
            location.reload();                          //lade aktuelles dokument neu
        }
    }

    function handleClickLogOut(): void {
        localStorage.removeItem("Username");
        localStorage.removeItem("Password");
        window.location.href = "index.html";
    }

    async function handleClickRetrieve(): Promise<void> {
        //textarea auslesen
        let form: FormData = new FormData(<HTMLFormElement>document.getElementById("form"));
        //auslese in Datenbank schreiben
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/storeMsg";
        let query: URLSearchParams = new URLSearchParams(<any>form);

        url += "?" + query.toString();  //ich bin ein genius mit dem hidden Username inputtag, call me maximus schlauikus

        await fetch(url);
    }


    async function genMessages(): Promise<void> {

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

        console.log("Splittedstring: " + splittedString);

        let divMessageContainer: HTMLElement = <HTMLElement>document.getElementById("flexMessages");
        divMessageContainer.innerHTML = "";

        for (let i: number = 0; i < splittedString.length - 1; i++) {      //.split erschafft unnötiges extra obj. //nvm
            splittedString[i] += "}";
            //splittedString[i] = splittedString[i] + "," + '"Name":"' + localStorage.getItem("Username")! + '"' + "}"; //Brainfuck aber generiert einfach n künstlichen Json abteil im stringified Json lol

            console.log("Splittedstring2: " + splittedString);
            let splitJson: any = JSON.parse(splittedString[i]); //möglicherweise any oder json, jeweils ob .name fehler wirft, wirft fehler
            //hängt divs an flexMessages an
            let txtBubble: HTMLElement = document.createElement("div");
            txtBubble.setAttribute("class", "TxtBubble");

            let txtName: HTMLElement = document.createElement("div");
            txtName.setAttribute("class", "TxtName");
            txtName.innerHTML = splitJson.Name + ":";

            let txtMes: HTMLElement = document.createElement("div");
            txtMes.setAttribute("class", "TxtMes");
            txtMes.innerHTML = splitJson.Msg;

            document.getElementById("flexMessages")?.appendChild(txtBubble);
            divMessageContainer.appendChild(txtBubble);
            txtBubble.appendChild(txtName);
            txtBubble.appendChild(txtMes);
            //bis hierhin


        }
    }

    genMessages();
}
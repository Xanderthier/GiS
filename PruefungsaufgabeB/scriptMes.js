"use strict";
var AufgabeB;
(function (AufgabeB) {
    //let ausgabe: HTMLElement = document.getElementById("Ausgabefeld")!;
    //let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
    //ausgabe.setAttribute("style", "display: none");
    let buttonSend = document.getElementById("sendbtn");
    buttonSend.addEventListener("click", handleClickRetrieve);
    let buttonLogOut = document.getElementById("logOut");
    buttonLogOut.addEventListener("click", handleClickLogOut);
    let buttonSwap = document.getElementById("Swap");
    buttonSwap.addEventListener("click", handleClickSwap);
    document.getElementById("Name").value = localStorage.getItem("Username"); //in value von Name Inputtag den username schreiben, Name inputtag hat "hidden" damit man nicht auf falsche ideen kommt :^)
    window.setInterval(function () {
        genMessages(); //Autorefresh für aktualisierung anderer nachrichten
        let scrollbar = document.getElementById("flexMessages");
        scrollbar.scrollTop = scrollbar.scrollHeight; // Autoscrolldown,  Quelle: https://stackoverflow.com/questions/7303948/how-to-auto-scroll-to-end-of-div-when-data-is-added by user
    }, 30000); //30s oder mehr weil sonst datenbank abstürzt
    function handleClickSwap() {
        if (localStorage.getItem("Chat") == "1") {
            localStorage.setItem("Chat", "2");
            location.reload();
        }
        else if (localStorage.getItem("Chat") == "2") { //(localStorage.getItem("Chat") == "2")
            localStorage.setItem("Chat", "1");
            location.reload(); //lade aktuelles dokument neu
        }
    }
    function handleClickLogOut() {
        localStorage.removeItem("Username");
        localStorage.removeItem("Password");
        window.location.href = "index.html";
    }
    async function handleClickRetrieve() {
        //textarea auslesen
        let form = new FormData(document.getElementById("form"));
        //auslese in Datenbank schreiben
        let url = "https://soseeasypass.herokuapp.com";
        url += "/storeMsg";
        let query = new URLSearchParams(form);
        url += "?" + query.toString(); //ich bin ein genius mit dem hidden Username inputtag, call me maximus schlauikus
        await fetch(url);
    }
    async function genMessages() {
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
        console.log("Splittedstring: " + splittedString);
        let divMessageContainer = document.getElementById("flexMessages");
        divMessageContainer.innerHTML = "";
        for (let i = 0; i < splittedString.length - 1; i++) { //.split erschafft unnötiges extra obj. //nvm
            splittedString[i] += "}";
            //splittedString[i] = splittedString[i] + "," + '"Name":"' + localStorage.getItem("Username")! + '"' + "}"; //Brainfuck aber generiert einfach n künstlichen Json abteil im stringified Json lol
            console.log("Splittedstring2: " + splittedString);
            let splitJson = JSON.parse(splittedString[i]); //möglicherweise any oder json, jeweils ob .name fehler wirft, wirft fehler
            //hängt divs an flexMessages an
            let txtBubble = document.createElement("div");
            txtBubble.setAttribute("class", "TxtBubble");
            let txtName = document.createElement("div");
            txtName.setAttribute("class", "TxtName");
            txtName.innerHTML = splitJson.Name + ":";
            let txtMes = document.createElement("div");
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
})(AufgabeB || (AufgabeB = {}));
//# sourceMappingURL=scriptMes.js.map
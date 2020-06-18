"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    if (!localStorage.getItem("Warenkorb")) {
        localStorage.setItem("Warenkorb", "[]");
    }
    //let sortimentAR: ShopArtikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];
    //sortiment in Json, neues Array
    let alexbutton = document.querySelector("#AlexFbtn");
    alexbutton.addEventListener("click", handleCategoryClick.bind(alexbutton));
    let fanbutton = document.querySelector("#FanFavsbtn");
    fanbutton.addEventListener("click", handleCategoryClick.bind(fanbutton));
    //altes array, jetzt sortimentAR
    //const sortiment: ShopArtikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];
    const oneTag = document.getElementById("one");
    const twoTag = document.getElementById("two");
    let ArtAR;
    //async function Kategories(kategorie: string): Promise<void> {
    //document.querySelector("#Produkte")!.innerHTML = " ";
    //await communicate("https://Xanderthier.github.io/GiS/Aufgabe07/produkte.json");
    function createTags() {
        for (let index = 0; index < Aufgabe07.sortimentsa.length; index++) {
            let div = document.createElement("div");
            div.setAttribute("class", "videocontainer");
            let h3 = document.createElement("h4");
            let video = document.createElement("video");
            video.setAttribute("src", Aufgabe07.sortimentsa[index].video);
            video.setAttribute("preload", "preload");
            video.setAttribute("controls", "controls");
            let pPrice = document.createElement("p");
            pPrice.setAttribute("class", "price");
            let pDescription = document.createElement("p");
            pDescription.setAttribute("class", "beschreibung");
            let button = document.createElement("button");
            button.addEventListener("click", WarenkorbBtn);
            button.setAttribute("preis", Aufgabe07.sortimentsa[index].preis.toString());
            if (Aufgabe07.sortimentsa[index].kategorie == "AlexF") {
                oneTag.appendChild(div);
                div.appendChild(h3).innerHTML = Aufgabe07.sortimentsa[index].name;
                div.appendChild(video);
                div.appendChild(pPrice).innerHTML = "Preis: " + Aufgabe07.sortimentsa[index].preis + "€";
                div.appendChild(pDescription).innerHTML = Aufgabe07.sortimentsa[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Warenkorb";
            }
            else {
                twoTag.appendChild(div);
                div.appendChild(h3).innerHTML = Aufgabe07.sortimentsa[index].name;
                div.appendChild(video);
                div.appendChild(pPrice).innerHTML = "Preis: " + Aufgabe07.sortimentsa[index].preis + "€";
                div.appendChild(pDescription).innerHTML = Aufgabe07.sortimentsa[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Warenkorb";
            }
        }
        //}
    }
    Aufgabe07.createTags = createTags;
    let anzArtikel = 0;
    let preis = 0;
    let anzahlZaehler = document.createElement("p");
    let anzAnzeige = document.createElement("div");
    anzAnzeige.id = "anzAnzeige";
    function WarenkorbBtn(_event) {
        preis += parseFloat(_event.target?.getAttribute("preis"));
        console.log(preis);
        anzArtikel++;
        console.log(anzArtikel);
        if (anzArtikel >= 0) {
            document.getElementById("anzWaren")?.appendChild(anzAnzeige);
        }
        anzahlZaehler.innerHTML = "" + anzArtikel;
        document.getElementById("anzAnzeige")?.appendChild(anzahlZaehler);
        ArtAR = JSON.parse(localStorage.getItem("Warenkorb"));
        if (!ArtAR) {
        }
        localStorage.setItem("Warenkorb", JSON.stringify(ArtAR));
    }
    function handleCategoryClick(_click) {
        if (this.getAttribute("id") == "AlexFbtn") {
            AlexV();
        }
        else {
            FanV();
        }
        function AlexV() {
            document.getElementById("one").style.display = "inline-flex";
            document.getElementById("AlexF").style.display = "inline";
            document.getElementById("two").style.display = "none";
            document.getElementById("FanFavs").style.display = "none";
        }
        function FanV() {
            document.getElementById("two").style.display = "inline-flex";
            document.getElementById("FanFavs").style.display = "inline";
            document.getElementById("one").style.display = "none";
            document.getElementById("AlexF").style.display = "none";
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map
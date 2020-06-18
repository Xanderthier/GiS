"use strict";
var Nostalgic;
(function (Nostalgic) {
    function warenkorbLeeren() {
        localStorage.setItem("Warenkorb", "[]");
    }
    document.querySelector("#ResetButton")?.addEventListener("click", function () {
        warenkorbLeeren();
        document.querySelector("#Produkte").innerHTML = " ";
        warenkorbSummeAnzeigen();
    });
    let aktWarenkorb = JSON.parse(localStorage.getItem("Warenkorb"));
    function artDelClick(_event) {
        let target = _event.target;
        let artikelInt = parseInt(target.getAttribute("artId"));
        let artikel = aktWarenkorb[artikelInt];
        //Artikel einzeln aus Warenkorb entfernen
        let delId = aktWarenkorb.indexOf(artikel);
        if (delId > -1) {
            aktWarenkorb.splice(delId, 1);
        }
        localStorage.setItem("Warenkorb", JSON.stringify(aktWarenkorb));
        //Kann ich das anders lösen?
        location.reload();
    }
    for (let index = 0; index < aktWarenkorb.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("produkt");
        newDiv.innerHTML = `
            <video src="${aktWarenkorb[index].video}">
            <p>${aktWarenkorb[index].name} <b>${aktWarenkorb[index].preis} €</b>, ${aktWarenkorb[index].beschreibung}</p>
            <button type="button">Artikel entfernen</button>`;
        document.querySelector("#Produkte")?.appendChild(newDiv);
        let selectorButton = newDiv.querySelector("button");
        selectorButton?.addEventListener("click", artDelClick);
        selectorButton?.setAttribute("artId", index.toString());
    }
    warenkorbSummeAnzeigen();
    function warenkorbSummeAnzeigen() {
        document.querySelector("#preis").innerHTML = Nostalgic.preis() + "€";
    }
})(Nostalgic || (Nostalgic = {}));
//# sourceMappingURL=Warenkorb.js.map
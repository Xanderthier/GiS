"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    communicate("sortiment.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.sortimentsa = await response.json();
        Aufgabe07.createTags();
    }
    function preis() {
        let aktWarenkorb = JSON.parse(localStorage.getItem("Warenkorb"));
        let preis = 0;
        for (let index = 0; index < aktWarenkorb.length; index++) {
            preis += aktWarenkorb[index].preis;
        }
        return preis;
    }
    Aufgabe07.preis = preis;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=global.js.map
"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    communicate("sortiment.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        Aufgabe07.sortimentsa = await response.json();
        Aufgabe07.createTags();
    }
    /* export function preis(): number {
        let aktWarenkorb: ShopArtikel[] = JSON.parse(localStorage.getItem("warenkorb")!);

        let preis: number = 0;
        for (let index: number = 0; index < aktWarenkorb.length; index++) {
            preis += aktWarenkorb[index].preis;
        }
        return preis;
    } */
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=global.js.map
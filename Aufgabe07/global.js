"use strict";
var Nostalgic;
(function (Nostalgic) {
    for (let index = 0; index < Nostalgic.sortimentsa.length; index++) {
        let jsonstr = JSON.stringify(Nostalgic.sortimentsa);
        console.log;
    }
    function preis() {
        let aktWarenkorb = JSON.parse(localStorage.getItem("warenkorb"));
        let preis = 0;
        for (let index = 0; index < aktWarenkorb.length; index++) {
            preis += aktWarenkorb[index].preis;
        }
        return preis;
    }
    Nostalgic.preis = preis;
})(Nostalgic || (Nostalgic = {}));
//# sourceMappingURL=global.js.map
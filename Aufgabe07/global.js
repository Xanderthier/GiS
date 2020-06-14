"use strict";
var Nostalgic;
(function (Nostalgic) {
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
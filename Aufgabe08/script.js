"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let button = document.getElementById("button");
    button.addEventListener("click", communicate);
    async function communicate() {
        let formData = new FormData(document.forms[0]);
        //platzhalter :^)
        let url = "https://soseeasypass.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("value: " + entry[1]);
            console.log("Type: " + entry[0]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
const url = require("url");
// export namespace um für allgemeinheit zugriff zu gewähren/Sichtbar zu machen
var A08Server;
(function (A08Server) {
    //Console log gibt It's showtime aus
    console.log("It's showtime");
    //Port wird festgelegt
    let port = Number(process.env.PORT);
    //Wenn port nicht richtig wird Port auf richtigen Port zugewiesen
    if (!port)
        port = 8100;
    //"erstelle server"
    let server = Http.createServer();
    //fragt den port, request und listener ab
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //gibt "listening" aus wenn handleListen() aktiv ist
    function handleListen() {
        console.log("Listening");
    }
    //gibt "I hear voices!" aus wenn handleRequest aufgerufen wird. Als parameter Request und Response.
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //baut html seite auf
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //random abfrage ob URL vorhanden, wieso auch immer das sein muss
        if (_request.url) {
            let q = url.parse(_request.url, true);
            let pfad = q.pathname;
            //wenn /html gib in key format wieder
            if (pfad == "/html") {
                for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }
            }
            //wenn /json stringify es und gib aus
            if (pfad == "/json") {
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
            }
            _response.end();
        }
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=testo.js.map
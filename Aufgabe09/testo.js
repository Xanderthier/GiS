"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe09 = void 0;
const Http = require("http");
// export namespace um für allgemeinheit zugriff zu gewähren/Sichtbar zu machen
var Aufgabe09;
(function (Aufgabe09) {
    //Console log gibt starting server aus
    console.log("Starting server");
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
        _response.write(_request.url);
        _response.end();
    }
})(Aufgabe09 = exports.Aufgabe09 || (exports.Aufgabe09 = {}));
//# sourceMappingURL=testo.js.map
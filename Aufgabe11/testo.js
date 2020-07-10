"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    let mongoDaten;
    let databaseUrl;
    //databaseUrl = "mongodb://localhost:27017";
    databaseUrl = "mongodb+srv://Xanderthier:<password>@clusterschlag.xsm2c.mongodb.net/<dbname>?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoDaten = mongoClient.db("test").collection("Students");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/output") {
                mongoDaten.find({}).toArray(function (exception, result) {
                    if (exception)
                        throw exception;
                    let resultString = "";
                    for (let i = 0; i < result.length; i++) {
                        resultString += JSON.stringify(result[i]) + " <br>";
                    }
                    console.log(resultString);
                    _response.write(JSON.stringify(resultString));
                    _response.end();
                });
            }
            else if (path == "/json")
                mongoDaten.insertOne(url.query);
        }
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
/*import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace A11Server { // export namespace um für allgemeinheit zugriff zu gewähren/Sichtbar zu machen

  interface Order {
    [type: string]: string | string[] | undefined;
  }
  let orders: Mongo.Collection;

  let port: number = Number(process.env.PORT); //Port wird festgelegt
  if (!port) //Wenn port nicht richtig wird Port auf richtigen Port zugewiesen
    port = 8100;

  let datenbankURL: string = "mongodb://localhost:27017";

  startServer(port);
  connectToDatabase(datenbankURL);

  function startServer(_port: number | string): void {

    console.log("It's showtime"); //Console log gibt It's showtime aus

    let server: Http.Server = Http.createServer(); //"erstelle server"
    server.addListener("request", handleRequest); //fragt den port, request und listener ab
    server.addListener("listening", handleListen);
    server.listen(port);
  }

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    orders = mongoClient.db("test1").collection("Students");
    console.log("Datenbank connection", orders != undefined);
  }

  function handleListen(): void { //gibt "listening" aus wenn handleListen() aktiv ist
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //gibt "I hear voices!" aus wenn handleRequest aufgerufen wird. Als parameter Request und Response.
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8"); //baut html seite auf
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) { //random abfrage ob URL vorhanden, wieso auch immer das sein muss
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      for (let key in url.query) {
        _response.write(key + ":" + url.query[key] + "<br/>");
      }

      let jsonString: string = JSON.stringify(url.query);
      _response.write(jsonString);

      storeOrder(url.query);

    }

    /*let pfad: string | null = url.pathname;
    if (pfad == "/html") { //wenn /html gib in key format wieder
      for (let key in url.query) {
        _response.write(key + ": " + url.query[key] + "<br/>");

      }
    }

    if (pfad == "/json") { //wenn /json stringify es und gib aus
      let jsonString: string = JSON.stringify(url.query);
      _response.write(jsonString);

      storeOrder(url.query);
    } */ /*
_response.end();

}

function storeOrder(_order: Order): void {
orders.insert(_order);
}

//let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
//await mongoClient.connect();

//let orders: Mongo.Collection = mongoClient.db("Test").collection("Students");
//orders.insert({...});

}*/
//# sourceMappingURL=testo.js.map
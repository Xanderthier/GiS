"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AufgabeB = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var AufgabeB;
(function (AufgabeB) {
    let mongoDaten;
    let databaseUrl;
    let mongoClient;
    databaseUrl = "mongodb+srv://Xanderthier:13371243@clusterschlag.xsm2c.mongodb.net/Chat?retryWrites=true&w=majority";
    connectToDatabase(databaseUrl);
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.listen(port);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        mongoDaten = mongoClient.db("Chat").collection("User");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            console.log("path: " + path);
            switch (path) {
                case "/storeMsg": {
                    mongoDaten.insert(url.query);
                    break;
                }
                case "/signin": {
                    mongoDaten = mongoClient.db("Chat").collection("User");
                    mongoDaten.insertOne(url.query);
                    break;
                }
                case "/login": {
                    mongoDaten = mongoClient.db("Chat").collection("User");
                    if (await mongoDaten.findOne(url.query)) { //Query auslesen
                        _response.write("true");
                        console.log("LogIn Vorhanden");
                    }
                    else {
                        _response.write("false");
                        console.log("Kein LogIn vorhanden");
                    }
                    _response.end(); //OMG ES FUNKTIONIERT EINFACH OMG WIE NICE
                    break;
                }
                case "/chatroom1": {
                    mongoDaten = mongoClient.db("Chat").collection("Chatroom1");
                    mongoDaten.find({}).toArray(function (exception, result) {
                        if (exception)
                            throw exception;
                        let resultString = "";
                        for (let i = 0; i < result.length; i++) {
                            resultString += JSON.stringify(result[i]) + ",";
                        }
                        console.log(resultString);
                        _response.write(JSON.stringify(resultString));
                        _response.end();
                    });
                    break;
                }
                case "/chatroom2": {
                    mongoDaten = mongoClient.db("Chat").collection("Chatroom2");
                    mongoDaten.find({}).toArray(function (exception, result) {
                        if (exception)
                            throw exception;
                        let resultString = "";
                        for (let i = 0; i < result.length; i++) {
                            resultString += JSON.stringify(result[i]) + ",";
                        }
                        console.log(resultString);
                        _response.write(JSON.stringify(resultString));
                        _response.end();
                    });
                    break;
                }
                default: {
                    _response.write("Du bist dumm");
                    break;
                }
            }
        }
    }
})(AufgabeB = exports.AufgabeB || (exports.AufgabeB = {}));
//# sourceMappingURL=testo.js.map
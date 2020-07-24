import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace AufgabeB {
  let mongoDaten: Mongo.Collection;
  let databaseUrl: string;
  let mongoClient: Mongo.MongoClient;

  databaseUrl = "mongodb+srv://Xanderthier:13371243@clusterschlag.xsm2c.mongodb.net/Chat?retryWrites=true&w=majority";

  connectToDatabase(databaseUrl);

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.listen(port);

  async function connectToDatabase(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
    mongoDaten = mongoClient.db("Chat").collection("User");

  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string | null = url.pathname;

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
          
          if (await mongoDaten.findOne(url.query)) {    //Query auslesen
            _response.write("true");
            console.log("LogIn Vorhanden");
          }

          else {
            _response.write("false");
            console.log("Kein LogIn vorhanden");
          }
          _response.end();                              //OMG ES FUNKTIONIERT EINFACH OMG WIE NICE
          break;
        }

        case "/chatroom1": {
          mongoDaten = mongoClient.db("Chat").collection("Chatroom1");
          mongoDaten.find({}).toArray(function (exception: Mongo.MongoError, result: string[]): void {
            if (exception)
              throw exception;
            let resultString: string = "";
            for (let i: number = 0; i < result.length; i++) {
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
          mongoDaten.find({}).toArray(function (exception: Mongo.MongoError, result: string[]): void {
            if (exception)
              throw exception;
            let resultString: string = "";
            for (let i: number = 0; i < result.length; i++) {
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
}
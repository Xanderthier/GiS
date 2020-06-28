import * as Http from "http";
import * as url from "url";

export namespace A08Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);


  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
      let pfad: string | null = q.pathname;

      if (pfad == "/html") {
        for (let key in q.query) {
          _response.write(key + ": " + q.query[key] + "<br/>");

        }
      }

      if (pfad == "/json") {
        let jsonString: string = JSON.stringify(q.query);
        _response.write(jsonString);
      }
      _response.end();
    }
  }
}

/*namespace Aufgabe08 {


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", communicate);

    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        //platzhalter :^)
        let url: string = "https://soseeasypass.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);

        for (let entry of query) {
            console.log(entry);
            console.log("value: " + entry[1]);
            console.log("Type: " + entry[0]);
        }
    }

} */

namespace Aufgabe09 {
    let html: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
    html.addEventListener("click", server);

    let json: HTMLButtonElement = <HTMLButtonElement>document.getElementById("json");
    json.addEventListener("click", clickJSON);

    async function server(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        await fetch(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("HTMLAnswer");
        serverResponse.innerHTML = responseText;
    }

    async function clickJSON(): Promise<void> {
        
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        await fetch(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.json();        
        console.log(responseText);
    }
}
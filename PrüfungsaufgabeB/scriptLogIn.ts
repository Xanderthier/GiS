namespace AufgabeB {

    //let buttonSignInJson: HTMLButtonElement = document.getElementById("coolkidz") as HTMLButtonElement;
    //buttonSignInJson.addEventListener("click", handleClickRetrieve);
    //let radioChoiceNotCool: HTMLButtonElement = document.getElementById("nsckidz") as HTMLButtonElement;
    //radioChoiceNotCool.addEventListener("click", handleClickStore);

    let formData: FormData;
    let buttonSignIn: HTMLElement = document.getElementById("signin")!;
    buttonSignIn.addEventListener("click", handleClickRetrieve);

    async function handleClickRetrieve(): Promise<void> {

        let formular: FormData = new FormData(<HTMLFormElement>document.getElementById("formular"));
        
        //let url: string = "http://localhost:8100/" + _format;
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/signin";
        let query: URLSearchParams = new URLSearchParams(<any>formular);
        url += "?" + query.toString(); //Username fehlt noch für den Datenbankeintrag
        await fetch(url);
    }

    async function handleClickStore(): Promise<void> {
        
        formData = new FormData(document.forms[0]);
        //let url: string = "http://localhost:8100/";
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/json";

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular")!;
        formular.reset();

        await fetch(url);
    }

    console.log("Fertig geladen");



    /*let html: HTMLButtonElement = <HTMLButtonElement>document.getElementById("html");
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
    }*/
}
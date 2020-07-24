namespace AufgabeB {

    //let buttonSignInJson: HTMLButtonElement = document.getElementById("coolkidz") as HTMLButtonElement;
    //buttonSignInJson.addEventListener("click", handleClickRetrieve);
    //let radioChoiceNotCool: HTMLButtonElement = document.getElementById("nsckidz") as HTMLButtonElement;
    //radioChoiceNotCool.addEventListener("click", handleClickStore);

    let buttonSignIn: HTMLElement = document.getElementById("signin")!;
    buttonSignIn.addEventListener("click", handleClickSignIn);
    let buttonLogIn: HTMLElement = document.getElementById("login")!;
    buttonLogIn.addEventListener("click", handleClickLogIn);

    let buttonCoolKidz: HTMLElement = document.getElementById("coolkidz")!;
    buttonCoolKidz.addEventListener("click", handleChatroombutton1);
    let buttonnscKidz: HTMLElement = document.getElementById("nsckidz")!;
    buttonnscKidz.addEventListener("click", handleChatroombutton2);

    function handleChatroombutton1(): void {
        localStorage.setItem("Chat", "1");
    }
    function handleChatroombutton2(): void {
        localStorage.setItem("Chat", "2");
    }

    async function handleClickSignIn(): Promise<void> {

        let formular: FormData = new FormData(<HTMLFormElement>document.getElementById("formular"));

        //let url: string = "http://localhost:8100/" + _format;
        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/signin";
        let query: URLSearchParams = new URLSearchParams(<any>formular);
        url += "?" + query.toString(); //Username fehlt noch für den Datenbankeintrag
        await fetch(url);
        alert("Du hast dich erfolgreich Registriert! Logge dich nun ein! :)");
    }

    async function handleClickLogIn(): Promise<void> {

        //Formdaten bekommen
        let formularLogIn: FormData = new FormData(<HTMLFormElement>document.getElementById("formular"));

        let url: string = "https://soseeasypass.herokuapp.com";
        url += "/login";
        let query: URLSearchParams = new URLSearchParams(<any>formularLogIn);
        url += "?" + query.toString();
        await fetch(url);

        let response: Response = await fetch(url);
        let responseText: string = await response.text();

        let formular: FormData = new FormData(<HTMLFormElement>document.getElementById("formular"));
        let username: string = <string>formular.get("Username");
        let password: string = <string>formular.get("Password");

        console.log("ResponseText: " + responseText); //OMG ES FUNKTIONIERRRRRTTTT JAAAAAA

        if (responseText == "true" && localStorage.getItem("Chat") == "1" && localStorage.getItem("Chat") == "2") {
            localStorage.setItem("Username", username);
            localStorage.setItem("Password", password);
            window.location.href = "chatbox.html";
        }
        else {
            alert("Du hast entweder keinen Account auf dieser Seite oder keinen Chatroom ausgewählt!");
            console.log("Nicht Eingeloggt oder Chatroom ausgewählt");
        }
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
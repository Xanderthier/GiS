namespace Aufgabe08 {


    let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
    button.addEventListener("click", communicate);

    async function communicate(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis20sw.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);

        for (let entry of query) {
            console.log(entry);
            console.log("value: " + entry[1]);
            console.log("name: " + entry[0]);
        }
    }

}
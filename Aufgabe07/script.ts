namespace Aufgabe07 {



    if (!localStorage.getItem("Warenkorb")) {
        localStorage.setItem("Warenkorb", "[]");
    }

    //let sortimentAR: ShopArtikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];

    //sortiment in Json, neues Array


    let alexbutton: HTMLElement = <HTMLElement>document.querySelector("#AlexFbtn");
    alexbutton.addEventListener("click", handleCategoryClick.bind(alexbutton));

    let fanbutton: HTMLElement = <HTMLElement>document.querySelector("#FanFavsbtn");
    fanbutton.addEventListener("click", handleCategoryClick.bind(fanbutton));



    //altes array, jetzt sortimentAR
    //const sortiment: ShopArtikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];

    const oneTag: HTMLElement = document.getElementById("one") as HTMLDivElement;
    const twoTag: HTMLElement = document.getElementById("two") as HTMLDivElement;

    let artar: Array<ShopArtikel>;

    //async function Kategories(kategorie: string): Promise<void> {

    //document.querySelector("#Produkte")!.innerHTML = " ";

    //await communicate("https://Xanderthier.github.io/GiS/Aufgabe07/produkte.json");

    export function createTags(): void {

        for (let index: number = 0; index < sortimentsa.length; index++) {

            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "videocontainer");

            let h3: HTMLHeadingElement = document.createElement("h4");

            let video: HTMLVideoElement = document.createElement("video");
            video.setAttribute("src", sortimentsa[index].video);
            video.setAttribute("preload", "preload");
            video.setAttribute("controls", "controls");

            let pPrice: HTMLParagraphElement = document.createElement("p");
            pPrice.setAttribute("class", "price");

            let pDescription: HTMLParagraphElement = document.createElement("p");
            pDescription.setAttribute("class", "beschreibung");

            let button: HTMLButtonElement = document.createElement("button");
            button.addEventListener("click", WarenkorbBtn);
            button.setAttribute("preis", sortimentsa[index].preis.toString());
            button.setAttribute("index", index.toString());

            if (sortimentsa[index].kategorie == "AlexF") {

                oneTag.appendChild(div);
                div.appendChild(h3).innerHTML = sortimentsa[index].name;
                div.appendChild(video);
                div.appendChild(pPrice).innerHTML = "Preis: " + sortimentsa[index].preis + "€";
                div.appendChild(pDescription).innerHTML = sortimentsa[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Warenkorb";

            }
            else {

                twoTag.appendChild(div);
                div.appendChild(h3).innerHTML = sortimentsa[index].name;
                div.appendChild(video);
                div.appendChild(pPrice).innerHTML = "Preis: " + sortimentsa[index].preis + "€";
                div.appendChild(pDescription).innerHTML = sortimentsa[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Warenkorb";

            }
        }
        //}
    }



    let anzArtikel: number = 0;
    let preis: number = 0;

    let anzahlZaehler: HTMLParagraphElement = document.createElement("p");

    let anzAnzeige: HTMLDivElement = document.createElement("div");
    anzAnzeige.id = "anzAnzeige";

    function WarenkorbBtn(_event: Event): void {

        let target: HTMLElement = <HTMLElement>_event.target;

        let produktid: number = parseFloat(target.getAttribute("index")!);


        //set get price
        preis = parseFloat(localStorage.getItem("preis")!);
        preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log(preis);
        localStorage.setItem("preis", JSON.stringify(preis));

        anzArtikel++;
        console.log(anzArtikel);

        if (anzArtikel >= 0) {
            document.getElementById("anzWaren")?.appendChild(anzAnzeige);
        }
        anzahlZaehler.innerHTML = "" + anzArtikel;
        document.getElementById("anzAnzeige")?.appendChild(anzahlZaehler);

        artar = JSON.parse(localStorage.getItem("Warenkorb")!);

        if (!artar) {
            artar = [sortimentsa[produktid]];
        }
        else {
            artar.push(sortimentsa[produktid]);
        }

        localStorage.setItem("Warenkorb", JSON.stringify(artar));
    }




    function handleCategoryClick(this: HTMLElement, _click: MouseEvent): void {
        if (this.getAttribute("id") == "AlexFbtn") {
            AlexV();
        }
        else {
            FanV();
        }

        function AlexV(): void {
            (<HTMLElement>document.getElementById("one")).style.display = "inline-flex";
            (<HTMLElement>document.getElementById("AlexF")).style.display = "inline";
            (<HTMLElement>document.getElementById("two")).style.display = "none";
            (<HTMLElement>document.getElementById("FanFavs")).style.display = "none";
        }
        function FanV(): void {
            (<HTMLElement>document.getElementById("two")).style.display = "inline-flex";
            (<HTMLElement>document.getElementById("FanFavs")).style.display = "inline";
            (<HTMLElement>document.getElementById("one")).style.display = "none";
            (<HTMLElement>document.getElementById("AlexF")).style.display = "none";
        }
    }
}

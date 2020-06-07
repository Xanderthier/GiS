namespace Aufgabe05 {
    interface ShopArtikel {
        kategorie: string;
        name: string;
        video: string;
        preis: number;
        beschreibung: string;
    }
    let artikel01 = {
        kategorie: "AlexF",
        name: "Ben 10",
        video: "Media/Ben10.mp4",
        preis: 10.00,
        beschreibung: "Am Ende warens irgendwie 100"
    };
    let artikel02 = {
        kategorie: "AlexF",
        name: "Avatar",
        video: "Media/Avatar.mp4",
        preis: 28.99,
        beschreibung: "Aang hat glaub adhs"
    };
    let artikel03 = {
        kategorie: "AlexF",
        name: "Danny Phantom",
        video: "Media/DannyPhantom.mp4",
        preis: 0.00,
        beschreibung: "Ich bin auch ein Geist"
    };
    let artikel04 = {
        kategorie: "AlexF",
        name: "Kim Possible",
        video: "Media/KimPossible.mp4",
        preis: 70.00,
        beschreibung: "be honest, u crushed on her as a little turd"
    };
    let artikel05 = {
        kategorie: "AlexF",
        name: "Fillmore",
        video: "Media/fillmore-intro-german.mp4",
        preis: 73.99,
        beschreibung: "Black Detective Conan for Kids"
    };
    let artikel06 = {
        kategorie: "AlexF",
        name: "Die Gummibaeren",
        video: "Media/Gummibaeren.mp4",
        preis: 13.99,
        beschreibung: "Safe Drogen"
    };
    let artikel07 = {
        kategorie: "AlexF",
        name: "Fuenf Freunde",
        video: "Media/FunfFreunde.mp4",
        preis: 5.00,
        beschreibung: "White Detective Conan for Kids"
    };
    let artikel08 = {
        kategorie: "FanFavs",
        name: "Beyblade",
        video: "Media/Beyblade.mp4",
        preis: 9.99, 
        beschreibung: "Let it RestInPeace"
    };
    let artikel09 = {
        kategorie: "FanFavs",
        name: "Wickie und die starken Männer",
        video: "Media/Wickie.mp4",
        preis: 69.69,
        beschreibung: "Klingt wie ein schlechter Porno Titel"
    };
    let artikel10 = {
        kategorie: "FanFavs",
        name: "Zoey101",
        video: "Media/Zoey101.mp4",
        preis: 1.01,
        beschreibung: "lol"
    };
    let artikel11 = {
        kategorie: "FanFavs",
        name: "Disney's grosse Pause",
        video: "Media/GrossePause.mp4",
        preis: 5.99,
        beschreibung: "Jeder liebt grosse Pausen"
    };
    let artikel12 = {
        kategorie: "FanFavs",
        name: "Chip und Chap",
        video: "Media/ChipChap.mp4",
        preis: 18.99,
        beschreibung: "Remember, just bcuz u smoll doesnt mean u can achieve big things"
    };
    
    const sortiment: ShopArtikel[] = [artikel01, artikel02, artikel03, artikel04, artikel05, artikel06, artikel07, artikel08, artikel09, artikel10, artikel11, artikel12];

    const oneTag: HTMLElement = document.getElementById("one") as HTMLDivElement;
    const twoTag: HTMLElement = document.getElementById("two") as HTMLDivElement;

    createTags();
    
    function createTags(): void {

        for (let index: number = 0; index < sortiment.length; index++) {

            let div: HTMLDivElement = document.createElement("div");
            div.setAttribute("class", "videocontainer");
            
            let h3: HTMLHeadingElement = document.createElement("h4");

            let video: HTMLVideoElement = document.createElement("video");
            video.setAttribute("src", sortiment[index].video);
            video.setAttribute("preload", "preload");
            video.setAttribute("controls", "controls");

            let pPrice: HTMLParagraphElement = document.createElement("p");
            pPrice.setAttribute("class", "price");

            let pDescription: HTMLParagraphElement = document.createElement("p");
            pDescription.setAttribute("class", "beschreibung");

            let button: HTMLButtonElement = document.createElement("button");
            button.addEventListener("click", WarenkorbBtn);
            button.setAttribute("preis", sortiment[index].preis.toString());

            if (sortiment[index].kategorie == "AlexF") {
    
                oneTag.appendChild(div);
                div.appendChild(h3).innerHTML = sortiment[index].name;
                div.appendChild(video);
                div.appendChild(pPrice).innerHTML = "Preis: " + sortiment[index].preis + "€";
                div.appendChild(pDescription).innerHTML = sortiment[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Warenkorb";

            }
            else {
    
                twoTag.appendChild(div);
                div.appendChild(h3).innerHTML = sortiment[index].name;
                div.appendChild(video);
                div.appendChild(pPrice).innerHTML = "Preis: " + sortiment[index].preis + "€";
                div.appendChild(pDescription).innerHTML = sortiment[index].beschreibung;
                div.appendChild(button).innerHTML = "In den Warenkorb";

            }
        }
    }

    let anzArtikel: number = 0;
    let preis: number = 0;

    let anzahlZaehler: HTMLParagraphElement = document.createElement("p");

    let anzAnzeige: HTMLDivElement = document.createElement("div");
    anzAnzeige.id = "anzAnzeige";


    function WarenkorbBtn(_event: Event): void {

        preis += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
        console.log(preis);

        anzArtikel++;
        console.log(anzArtikel);

        if (anzArtikel >= 0) {
            document.getElementById("anzWaren")?.appendChild(anzAnzeige);
        }
        anzahlZaehler.innerHTML = "" + anzArtikel;
        document.getElementById("anzAnzeige")?.appendChild(anzahlZaehler);
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
    let alexbutton: HTMLElement = <HTMLElement>document.querySelector("#AlexFbtn");
    alexbutton.addEventListener("click", handleCategoryClick.bind(alexbutton));

    let fanbutton: HTMLElement = <HTMLElement>document.querySelector("#FanFavsbtn");
    fanbutton.addEventListener("click", handleCategoryClick.bind(fanbutton));
}

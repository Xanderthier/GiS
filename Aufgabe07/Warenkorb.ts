namespace Aufgabe07 {
    
    let globalPreis: number;

    document.querySelector("#ResetButton")?.addEventListener("click", function (): void {
        warenkorbLeeren();
        document.querySelector("#Produkte")!.innerHTML = " ";
        warenkorbSummeAnzeigen();
    });

    function warenkorbLeeren(): void {
        localStorage.setItem("Warenkorb", "[]");
        localStorage.setItem("preis", "0");
    }

    let aktWarenkorb: ShopArtikel[] = JSON.parse(localStorage.getItem("Warenkorb")!);

    for (let index: number = 0; index < aktWarenkorb.length; index++) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.classList.add("videocontainer");
        newDiv.innerHTML = `
            <video src="${aktWarenkorb[index].video}" controls preload></video>
            <p>${aktWarenkorb[index].name} <b>${aktWarenkorb[index].preis} €</b>, ${aktWarenkorb[index].beschreibung}</p>
            <button type="button">Artikel entfernen</button>`;

        document.querySelector("#Produkte")?.appendChild(newDiv);

        let selectorButton: HTMLButtonElement = <HTMLButtonElement>newDiv.querySelector("button");
        selectorButton?.addEventListener("click", artDelClick);
        selectorButton?.setAttribute("artId", index.toString());
    }
    warenkorbSummeAnzeigen();

    

    function warenkorbSummeAnzeigen(): void {
        let preis = parseFloat(localStorage.getItem("preis")!);
        document.querySelector("#preis")!.innerHTML = preis.toFixed(2) + "€";
        localStorage.setItem("preis", JSON.stringify(preis));
        globalPreis = preis;
    }

    function artDelClick(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let artikelInt: number = parseInt(target.getAttribute("artId")!);
        let artikel: ShopArtikel = aktWarenkorb[artikelInt];
        
        let preis = globalPreis;

        preis -= aktWarenkorb[artikelInt].preis;
        localStorage.setItem("preis", JSON.stringify(preis));
        
        //Artikel einzeln aus Warenkorb entfernen
        let delId: number = aktWarenkorb.indexOf(artikel);
        if (delId > -1) {
            aktWarenkorb.splice(delId, 1);
        }

        localStorage.setItem("Warenkorb", JSON.stringify(aktWarenkorb));

        //Kann ich das anders lösen?
        location.reload();
    }
}
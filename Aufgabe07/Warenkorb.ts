namespace Aufgabe07 {
    
    document.querySelector("#ResetButton")?.addEventListener("click", function (): void {
        warenkorbLeeren();
        document.querySelector("#Produkte")!.innerHTML = " ";
        //warenkorbSummeAnzeigen();
    });

    function warenkorbLeeren(): void {
        localStorage.setItem("Warenkorb", "[]");
    }

    let aktWarenkorb: ShopArtikel[] = JSON.parse(localStorage.getItem("Warenkorb")!);

    for (let index: number = 0; index < aktWarenkorb.length; index++) {
        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.classList.add("produkt");
        newDiv.innerHTML = `
            <video src="${aktWarenkorb[index].video}">
            <p>${aktWarenkorb[index].name} <b>${aktWarenkorb[index].preis} €</b>, ${aktWarenkorb[index].beschreibung}</p>
            <button type="button">Artikel entfernen</button>`;

        document.querySelector("#Produkte")?.appendChild(newDiv);

        let selectorButton: HTMLButtonElement = <HTMLButtonElement>newDiv.querySelector("button");
        selectorButton?.addEventListener("click", artDelClick);
        selectorButton?.setAttribute("artId", index.toString());
    }
    /*warenkorbSummeAnzeigen();

    function warenkorbSummeAnzeigen(): void {
        document.querySelector("#preis")!.innerHTML = preis() + "€";
    } */

    function artDelClick(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        let artikelInt: number = parseInt(target.getAttribute("artId")!);
        let artikel: ShopArtikel = aktWarenkorb[artikelInt];

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
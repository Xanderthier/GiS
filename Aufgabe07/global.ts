namespace Aufgabe07 {

    export interface ShopArtikel {
        kategorie: string;
        name: string;
        video: string;
        preis: number;
        beschreibung: string;

    }

    communicate("sortiment.json");

    export let sortimentsa: ShopArtikel[];

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        sortimentsa = await response.json();
        createTags();
    }

    /* export function preis(): number {
        let aktWarenkorb: ShopArtikel[] = JSON.parse(localStorage.getItem("warenkorb")!);

        let preis: number = 0;
        for (let index: number = 0; index < aktWarenkorb.length; index++) {
            preis += aktWarenkorb[index].preis;
        }
        return preis;
    } */

}
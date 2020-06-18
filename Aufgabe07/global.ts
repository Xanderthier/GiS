namespace Nostalgic {

    export interface ShopArtikel {
        kategorie: string;
        name: string;
        video: string;
        preis: number;
        beschreibung: string;

    }

    export let sortimentsa: ShopArtikel[];

    for (let index: number = 0; index < sortimentsa.length; index++) {

        let jsonstr: String = JSON.stringify(sortimentsa);
        console.log

    }

    export function preis(): number {
        let aktWarenkorb: ShopArtikel[] = JSON.parse(localStorage.getItem("warenkorb")!);

        let preis: number = 0;
        for (let index: number = 0; index < aktWarenkorb.length; index++) {
            preis += aktWarenkorb[index].preis;
        }
        return preis;
    }

}
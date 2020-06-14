namespace Nostalgic {

    export interface ShopArtikel {
        name: string;
        preis: number;
        bezeichnung: string;
        bild: string;
        kategorie: string;
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
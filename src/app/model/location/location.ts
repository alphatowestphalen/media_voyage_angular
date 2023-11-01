
interface DateLocation {
    start:string;
    end:string;
}
export interface Location {
        person: number,
        car_id: number,
        start: string,
        end: string,
        name: string,
        adresse: string,
        number: string
}

export interface LocationGet {
                id: number,
                person: number,
                daytime: number,
                cost: number,
                car_id: number,
                client_id: number,
                date_id: number,
                created_at: string,
                updated_at: string,
                client: {
                    id: number,
                    name: string,
                    adresse: string,
                    number: string,
                    created_at: "",
                    updated_at: "",
                },
                car: {
                    id: number,
                    im: string,
                    place: number,
                    carburant: string,
                    marque: string,
                    bagage: number,
                    vitesse: string,
                    clim: any,
                    price: number,
                    description: any,
                    occuped: boolean,
                    image_url: string,
                    category_id: number,
                    created_at: string,
                    updated_at: string
                },
                date: {
                    id: 1,
                    start: string,
                    end: string,
                    created_at: string,
                    updated_at: string
                }
}

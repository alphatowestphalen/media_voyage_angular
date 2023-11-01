export interface Client {
    id: number;
    name: string
    adresse: string;
    number: string;
    created_at: string
    updated_at: string
    locations: [
      {
        id: number
        person: number
        daytime: number
        cost: string
        car_id: string
        client_id: string
        date_id: string
        created_at: string
        updated_at: string
      }]
}

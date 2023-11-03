export interface Chart {
  carIm: string;
  locationCost: number;
  totalPrice : number;
}

export interface CarsData {
  id : number;
  im : string;
  price : string;
  locations : Location[]
}

export interface Location {
  id: number;
  person: number;
  daytime: number;
  cost: string;
}

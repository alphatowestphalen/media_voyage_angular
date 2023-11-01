import { Cathegorie } from "../cathegorie/cathegorie";

export interface Cars {
  im : string;
  place:number;
  carburant: string;
  marque: string;
  bagage: number;
  vitesse: string;
  price : number;
  image_url : string;
  category_id:number;
}
export interface CarsAll {
  id:number;
  im : string;
  place:number;
  carburant: string;
  marque: string;
  bagage: number;
  vitesse: string;
  price : string;
  image_url : string;
  category_id:number;
  category: Cathegorie,
  created_at:string;  
}

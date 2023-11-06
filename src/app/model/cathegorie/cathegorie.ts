import { CarsAll } from '../cars/cars';

export interface Cathegorie {
  id: string;
  type: string;
  // cars:CarsAll;
}

export interface CathegorieAdd {
  type: string;
}

export interface Category {
  label: string;
  selected: boolean;
}


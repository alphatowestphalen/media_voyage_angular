import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/.env/environment';
import { Cars, CarsAll } from 'src/app/model/cars/cars';
import { Category, Cathegorie } from 'src/app/model/cathegorie/cathegorie';
import { CarsService } from 'src/app/service/cars/cars.service';
import { CathegorieService } from 'src/app/service/categotie/cathegorie.service';
import { HomeService } from 'src/app/service/home/home.service';
import { DateUtils } from 'src/app/utils/dates.utils';

export interface Filter {
  price : number;
  category: Array<string>;
}
@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  carsAll : CarsAll[] = [];
  carsList : CarsAll[] = [];
  category : Category[] = [{label: '', selected: false}];
  url = environment.baseUrl
  idSendToCarsDetails: number = 0
  allCathegories: Cathegorie[] = [];
  isChecked: boolean = false;
  filter: Filter = {
    price: 1000000,
    category: []
  }
  dateToSearch : Array<string> = [];
  constructor(private carsService:CarsService,private serviceCathegorier: CathegorieService,private homeService:HomeService, private route: Router, private dateUtils : DateUtils) { }

  ngOnInit() {
    this.getCarAll();
    this.getAllCathegorie();
    this.getAvailebleCar();
    this.getDate();
  }

  public getCarAll(){
    this.carsService.getAllCars().subscribe((data)=>{
      this.carsList = data;
      this.carsList.forEach(element => {
        element.price = this.formaterNombreAvecSeparateurDeMilliers(element.price);
      })
    })
  }


   formaterNombreAvecSeparateurDeMilliers(nombre:string) {
    return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  ShowDetailsCars(id:number){
    this.idSendToCarsDetails = id;
    this.carsService.setId(this.idSendToCarsDetails);
    this.route.navigate(['/showdetailCar'])
  }

  reservation(id:number){
    this.carsService.setId(id);
    this.route.navigate(['/checkoutCars'])
  }

  ShowChackout(id:number){
    this.carsService.setId(id);
    this.route.navigate(['/checkoutCars'])
  }

  getAllCathegorie(){
    this.serviceCathegorier.getCathegorie().subscribe((data)=>{
      this.allCathegories = data;
      this.allCathegories.forEach(element => {
        this.category.push({label : element.type, selected : true});
        this.filter.category.push(element.type);
      })
      this.category.shift();
    })
  }

  getAvailebleCar(){
    this.carsService.getCarsTwoDate().subscribe((data)=>{
      this.carsList = data;
      this.carsList.forEach((element)=> {
        element.price = this.formaterNombreAvecSeparateurDeMilliers(element.price);
      })
    })
  }

  redirectTohome(){
    if (this.homeService.getDates().start = undefined) {
        this.route.navigate(['/'])
    }
  }

  async filterCarsList(cars: any[]): Promise<void> {
    this.carsList = [];
    cars.forEach(element => {
      if (this.filter.category.includes(element.category.type) && +element.price <= this.filter.price) {
        this.carsList.push(element);
      }
    });
  }

  async checkboxSelected(value: any): Promise<void> {
    try {
      const data = await this.carsService.getAvailableCar({start: new Date(this.dateToSearch[0]), end: new Date(this.dateToSearch[1])}).toPromise();

      if (value.selected) {
        this.filter.category.push(value.label);
      } else {
        const index = this.filter.category.indexOf(value.label);
        if (index !== -1) {
          this.filter.category.splice(index, 1);
        }
      }

      await this.filterCarsList(data ? data : []);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }

  async handleChange(event: any): Promise<void> {
    this.carsService.getAvailableCar({start: new Date(this.dateToSearch[0]), end: new Date(this.dateToSearch[1])}).subscribe(cars => {
      this.filterCarsList(cars);
    });
  }

  async getDate() {
    try {
      const date = await this.dateUtils.getDateUtils();
      this.dateToSearch = date;
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }

}

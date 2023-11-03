import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/.env/environment';
import { Cars, CarsAll } from 'src/app/model/cars/cars';
import { Cathegorie } from 'src/app/model/cathegorie/cathegorie';
import { CarsService } from 'src/app/service/cars/cars.service';
import { CathegorieService } from 'src/app/service/categotie/cathegorie.service';
import { HomeService } from 'src/app/service/home/home.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  carsAll : CarsAll[] = [];
  url = environment.baseUrl
  idSendToCarsDetails: number = 0
  allCathegories: Cathegorie[] = [];
  isChecked: boolean = false;

  constructor(private carsService:CarsService,private serviceCathegorier: CathegorieService,private homeService:HomeService, private route: Router) { }

  ngOnInit() {
    this.getCarAll();
    this.getAllCathegorie();
    this.getAvailebleCar();
    console.log('====================================');
    console.log(this.isChecked);
    console.log('====================================');
  }

  public getCarAll(){
    this.carsService.getAllCars().subscribe((data)=>{      
      this.carsAll = data;
      this.carsAll.forEach(element => {
        element.price = this.formaterNombreAvecSeparateurDeMilliers(element.price);    
      })
    })
  }

  onCheckboxChange(item:any){
    if (item.target.checked) {
      this.isChecked = true;
      console.log('====================================');
      console.log(this.isChecked);
      console.log('====================================');
      this.getAvailebleCar();
    } else {
      this.isChecked = false;
      this.getCarAll();
    }
  }
  
   formaterNombreAvecSeparateurDeMilliers(nombre:string) {
    return nombre.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
    })
  }

  getAvailebleCar(){
    this.carsService.getCarsTwoDate().subscribe((data)=>{
      this.carsAll = data;
      this.carsAll.forEach((element)=> {
        element.price = this.formaterNombreAvecSeparateurDeMilliers(element.price);
      })
    })
  }
  
  redirectTohome(){
    if (this.homeService.getDates().start = undefined) {
        this.route.navigate(['/'])
    }
  }
}

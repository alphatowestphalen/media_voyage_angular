import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/.env/environment';
import { Cars, CarsAll } from 'src/app/model/cars/cars';
import { CarsService } from 'src/app/service/cars/cars.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  carsAll : CarsAll[] = [];
  url = environment.baseUrl
  idSendToCarsDetails: number = 0
  constructor(private carsService:CarsService, private route: Router) { }

  ngOnInit() {
    this.getCarAll();
  }

  public getCarAll(){
    this.carsService.getAllCars().subscribe((data)=>{      
      this.carsAll = data;
      this.carsAll.forEach(element => {
        element.price = this.formaterNombreAvecSeparateurDeMilliers(element.price);       
      })
    })
  }
  
   formaterNombreAvecSeparateurDeMilliers(nombre:string) {
    return nombre.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  ShowDetailsCars(id:number){
    this.idSendToCarsDetails = id;
    this.carsService.setId(this.idSendToCarsDetails);
    this.route.navigate(['/showdetailCar'])
  }
  ShowChackout(){
    this.route.navigate(['/checkoutCars'])
  }
}

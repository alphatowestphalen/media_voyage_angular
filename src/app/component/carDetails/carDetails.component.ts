import { Component, LOCALE_ID, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/.env/environment';
import { CarsAll } from 'src/app/model/cars/cars';
import { CarsService } from 'src/app/service/cars/cars.service';
import { LocationComponent } from '../admin/component/location/location.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-carDetails',
  templateUrl: './carDetails.component.html',
  styleUrls: ['./carDetails.component.css']
})

export class CarDetailsComponent implements OnInit {
  id:number = 0;
  getAll: any = {
    id: 0,
    im: '',
    place: 0,
    carburant: '',
    marque: '',
    bagage: 0,
    vitesse: '',
    price: '',
    image_url: '',
    category_id: 0,
    created_at: '',
    category: {
      id: '',
    type: '',
    }
  };
  url = environment.baseUrl;

  constructor(private route: Router, private carsService:CarsService) { }

  ngOnInit() {
    this.getIdCar();
  }

  closeDetails(){
    this.route.navigate(["/cars"])
  }

  getIdCar(){
    this.id = this.carsService.getId();
    if (this.id == 0) {
      this.route.navigate(['/cars']);
    } else {
      this.getCarsById(this.id);
    }
  }

  getCarsById(id:number){
      this.carsService.findById(id).subscribe((data)=>{
        this.getAll = data;
        this.getAll.price = this.formaterNombreAvecSeparateurDeMilliers(this.getAll.price);
        })
  }

  formaterNombreAvecSeparateurDeMilliers(nombre:string) {
    return nombre.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

}

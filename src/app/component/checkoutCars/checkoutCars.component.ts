import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/.env/environment';
import { CarsAll } from 'src/app/model/cars/cars';
import { CarsService } from 'src/app/service/cars/cars.service';
import { HomeService } from 'src/app/service/home/home.service';
import { DateManage } from 'src/app/utils/compteDay';

@Component({
  selector: 'app-checkoutCars',
  templateUrl: './checkoutCars.component.html',
  styleUrls: ['./checkoutCars.component.css']
})
export class CheckoutCarsComponent implements OnInit {
  carsAll: any = {
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
    category: {
      id: '',
    type: '',
    },
    created_at: ''
  };
  montant:string = '';
  total: number = 0; 
  day:number = 0;
  id:number = 0;
   price: string = '';
  url = environment.baseUrl;

  constructor(private route:Router ,private carsService: CarsService, private dateManage: DateManage,  private homeService: HomeService) { }

  ngOnInit() {
    this.redirecteToCars(); 
    this.getDayCompte();   
  }

  public getCarsBayId(){
    this.carsService.findById(this.carsService.getId()).subscribe((data)=>{
      this.carsAll = data;
      this.price = this.formaterNombreAvecSeparateurDeMilliers(this.carsAll.price.toString())
      this.total = this.carsAll.price * this.day;
      this.montant = this.formaterNombreAvecSeparateurDeMilliers(this.total.toString());
    })
  }

  private redirecteToCars(){
    this.id = this.carsService.getId();    
    if (this.id == 0 ) {
      this.route.navigate(['/'])
    }
    else{
      this.getCarsBayId();
    }
  }

  getDayCompte(){
    this.day = this.dateManage.calculateDateDifference(this.homeService.getDates().start, this.homeService.getDates().end)
  }

  formaterNombreAvecSeparateurDeMilliers(nombre:string) {
    return nombre.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }



}

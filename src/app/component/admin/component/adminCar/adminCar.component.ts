import { Component, Injectable, OnInit } from '@angular/core';
import { Cars } from 'src/app/model/cars/cars';
import { Cathegorie } from 'src/app/model/cathegorie/cathegorie';
import { CarsService } from 'src/app/service/cars/cars.service';
import { CathegorieComponent } from '../cathegorie/cathegorie.component';
import { CathegorieService } from 'src/app/service/categotie/cathegorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminCar',
  templateUrl: './adminCar.component.html',
  styleUrls: ['./adminCar.component.css']
})
export class AdminCarComponent implements OnInit {
  cars: any;
  carsAdd: Cars = {
    im: '',
    place: 0,
    carburant: '', 
    marque: '',
    bagage: 0,
    vitesse: '',
    // clim: undefined,
    price: 0,
    // description: '',
    // occuped: false,
    image_url: '',
    category_id: 0,
  }
  categories: Cathegorie[] = [];
  constructor(private carsService: CarsService,private route :Router,private router:ActivatedRoute, private cathegorieService: CathegorieService ) { }

  ngOnInit() {
    this.getAllCars();
    this.getAllCathegorie();
  }

  private getAllCars(){
    this.carsService.getAllCars().subscribe((data)=>{
      this.cars = data;
    })
  }

  public getAllCathegorie(){
    this.cathegorieService.getCathegorie().subscribe((data)=>{
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      this.categories = data;
    })
  }

  public addCars(){
    let stringId = parseInt(this.carsAdd.category_id.toString());
    this.carsAdd.category_id = stringId;
    console.log('====================================');
    console.log(this.carsAdd);
    console.log('====================================');
    this.carsService.addCars(this.carsAdd).subscribe((data)=>{
      console.log('==============addCars======================');
      console.log(data);
      console.log('====================================');
      this.getAllCars();
    })
  }

  public delate(){
   this.route.navigate(['/adminCars'])
  }

  public findById(id:number){
    this.carsService.findById(id).subscribe((data)=>{
    })
  }

  public update(id:string,cars:Cars){
    this.carsService.updateCars(id,cars).subscribe((data)=>{
      console.log('==============update======================');
      console.log(data);
      console.log('====================================');
      this.getAllCars();
    })
  }
}

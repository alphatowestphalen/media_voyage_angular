import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/service/cars/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private carsService:CarsService ,private route: Router){}

  ngOnInit(): void {
    this.getCarAll();
  }

  public getCarAll(){
    this.carsService.getAllCars().subscribe((data)=>{
      console.log('================getCarAll====================');
      console.log(data);
      console.log('====================================');
    })
  }
  redirectToCars(){
    this.route.navigate(['/cars'])
  }

}

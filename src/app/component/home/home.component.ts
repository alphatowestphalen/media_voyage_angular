import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/service/cars/cars.service';
import { HomeService } from 'src/app/service/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  dateSend = {
    start: '',
    end: ''
  }
  constructor(private carsService:CarsService, private homeService: HomeService ,private route: Router){}
  
  ngOnInit(): void {
    this.getCarAll();
    // this.algo();
  }

  public getCarAll(){
    this.carsService.getAllCars().subscribe((data)=>{
    })
  }
  redirectToCars(){
    this.route.navigate(['/cars'])
  }

  public search(){
    this.homeService.setDates(this.dateSend);
    this.route.navigate(['/cars'])
  }

  // algo(){
  //   const tableau = [1, 1, 2, 3, 4, 4];
  //   let chiffreRemove = tableau[0];
  //   let index = tableau.indexOf(chiffreRemove);
  //   let boll = true;
  //   if(index !== -1){
  //     tableau.splice(index,1);
  //     for (let index = 0; index < tableau.length -1; index++) {
  //       if (tableau[index] > tableau[index + 1]) {
  //           boll = false;
  //       }
  //     }
  //     console.log(tableau);      
  //     console.log(boll);


  //   }
  // }
  
  
  
  
 

}

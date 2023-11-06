import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsAll } from 'src/app/model/cars/cars';
import { Cathegorie } from 'src/app/model/cathegorie/cathegorie';
import { CarsService } from 'src/app/service/cars/cars.service';
import { CathegorieService } from 'src/app/service/categotie/cathegorie.service';
import { HomeService } from 'src/app/service/home/home.service';
import { DateUtils } from 'src/app/utils/dates.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dateSend = {
    start: '',
    end: ''
  }
  cars: CarsAll[] = [];
  cathegorie: Cathegorie[] = [];
  disable: boolean = false;

  constructor(
    private carsService: CarsService,
    private homeService: HomeService,
    private cathegorieService: CathegorieService,
    private route: Router,
    private dateUtils : DateUtils
  ) {}

  ngOnInit(): void {
    this.getCarAll();
    this.getAllCathogorie();
    // this.algo();
  }

  public getCarAll() {
    this.carsService.getAllCars().subscribe((data) => {
      this.cars = data;
      console.log('==============this cars======================');
      console.log(this.cars);
      console.log('====================================');
    });
  }

  public getAllCathogorie() {
    this.cathegorieService.getCathegorie().subscribe((data) => {
      this.cathegorie = data;

      console.log(this.cathegorie);
    });
  }

  validation() {
    if (this.dateSend.end > this.dateSend.start) {
      this.disable = true;
      this.route.navigate(['/cars']);
    } else {
      this.disable = false;
    }
  }
  redirectToCars() {
    this.route.navigate(['/cars']);
  }

  public search() {
    this.homeService.setDates(this.dateSend);
    this.route.navigate(['/cars'])
    this.dateUtils.setDateUtils(this.dateSend.start, this.dateSend.end)
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

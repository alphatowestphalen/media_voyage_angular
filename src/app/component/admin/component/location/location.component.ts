import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cars, CarsAll } from 'src/app/model/cars/cars';
import { Location, LocationGet} from 'src/app/model/location/location';
import { CarsService } from 'src/app/service/cars/cars.service';
import { LocationService } from 'src/app/service/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 location:LocationGet[] = []; //
 locationAdd: Location = {
   person: 0,
   car_id: 0,
   start: '',
   end: '',
   name: '',
   adresse: '',
   number: ''
 };
 cars:CarsAll[] = [];
 formattedDate: any;
  constructor(private locationService: LocationService, private carsService: CarsService) { }

  ngOnInit() {
    this.getAllLocation();
    this.getAllCars();
  }

  public getAllLocation(){
    this.locationService.getAllLocation().forEach((data)=>{
      this.location = data;
      for (let index = 0; index < this.location.length; index++) {
        this.location[index].date.start =  this.transformDate(this.location[index].date.start)
        this.location[index].date.end =  this.transformDate(this.location[index].date.end)
      }      
    })
  }

  public getAllCars(){
      this.carsService.getAllCars().subscribe((data)=>{
        this.cars = data;
        for (let index = 0; index < this.cars.length; index++) {
          this.location[index].car_id = parseInt((this.cars[index].id).toString());
          console.log('====================================');
          console.log(typeof(this.location[index].car_id));
          console.log('====================================');
        }
      })
  }

  public Addlocation(){
    console.log('====================================');
    console.log(this.locationAdd);
    console.log('====================================');
    this.locationService.addLoction(this.locationAdd).subscribe((data)=>{
      this.getAllLocation();
    })
  }

  public transformDate(date: string): string  {
    const d = new DatePipe('en-US').transform(date, 'dd/MM/yyyy');
    return d ? d :  '';
  }

  
}

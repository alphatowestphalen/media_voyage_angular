import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location, LocationGet } from 'src/app/model/location/location';
import { LocationService } from 'src/app/service/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 location:any;
 formattedDate: any;
 date: Date = new Date("2023-10-26T14:29:48.764Z");
  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.getAllLocation();
  }


  public getAllLocation(){
    this.locationService.getAllLocation().subscribe((data)=>{
      this.location = data;
      console.log('====================================');
      console.log(this.location);
      console.log('====================================');
    })
  }

  public transformDate(date: Date): void {
    this.formattedDate = new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
    return this.formattedDate;
  }

  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  ShowDetailsCars(){
    this.route.navigate(['/showdetailCar'])
  }
  ShowChackout(){
    this.route.navigate(['/checkoutCars'])
  }
}

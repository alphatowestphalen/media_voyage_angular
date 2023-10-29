import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carDetails',
  templateUrl: './carDetails.component.html',
  styleUrls: ['./carDetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  closeDetails(){
    this.route.navigate(["/cars"])
  }
}

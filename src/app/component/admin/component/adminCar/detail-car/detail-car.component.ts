import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/.env/environment';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.css']
})
export class DetailCarComponent {
  @Input() detail : any
  url = environment.baseUrl
  constructor() {}

  OnInit() {

  }

}

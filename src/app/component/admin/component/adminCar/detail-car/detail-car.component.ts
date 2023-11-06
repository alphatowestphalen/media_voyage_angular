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

  public setDate(date: string) {
    return new Date(date).toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  public setPrice(price: string) {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}

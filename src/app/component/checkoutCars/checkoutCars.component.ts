import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/.env/environment';
import { CarsAll } from 'src/app/model/cars/cars';
import { Location } from 'src/app/model/location/location';
import { CarsService } from 'src/app/service/cars/cars.service';
import { HomeService } from 'src/app/service/home/home.service';
import { DateManage } from 'src/app/utils/compteDay';
import { ClientService } from 'src/app/service/client.service/client.service';
import { LocationService } from 'src/app/service/location/location.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-checkoutCars',
  templateUrl: './checkoutCars.component.html',
  styleUrls: ['./checkoutCars.component.css'],
})
export class CheckoutCarsComponent implements OnInit {
  carsAll: any = {
    id: 0,
    im: '',
    place: 0,
    carburant: '',
    marque: '',
    bagage: 0,
    vitesse: '',
    price: '',
    image_url: '',
    category_id: 0,
    category: {
      id: '',
      type: '',
    },
    created_at: '',
    description: '',
  };
  url = environment.baseUrl;
  location: Location = {
    person: 0,
    car_id: 0,
    start: undefined,
    end: undefined,
    name: '',
    adresse: '',
    number: '',
    exist: false,
    client_id: 0,
  };
  allClient: any;
  montant: string = '';
  total: number = 0;
  day: number = 0;
  id: number = 0;
  price: string = '';

  // variable for validation
  isShow: boolean = false;

  constructor(
    private route: Router,
    private locationService: LocationService,
    private clientService: ClientService,
    private carsService: CarsService,
    private dateManage: DateManage,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.redirecteToCars();
    this.getDayCompte();
    // this.getAllCars();
    this.getAllClient();
  }

  public getCarsBayId() {
    this.location.car_id = this.carsService.getId();
    this.location.start = this.transformDate(this.homeService.getDates().start);
    this.location.end = this.transformDate(this.homeService.getDates().end);
    this.carsService.findById(this.carsService.getId()).subscribe((data) => {
      this.carsAll = data;
      this.price = this.formaterNombreAvecSeparateurDeMilliers(
        this.carsAll.price.toString()
      );
      this.total = this.carsAll.price * this.day;
      this.montant = this.formaterNombreAvecSeparateurDeMilliers(
        this.total.toString()
      );
    });
  }

  private redirecteToCars() {
    this.id = this.carsService.getId();
    if (this.id == 0) {
      this.route.navigate(['/']);
    } else {
      this.getCarsBayId();
    }
  }

  getDayCompte() {
    this.day = this.dateManage.calculateDateDifference(
      this.homeService.getDates().start,
      this.homeService.getDates().end
    );
  }

  formaterNombreAvecSeparateurDeMilliers(nombre: string) {
    return nombre.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  getAllClient() {
    this.clientService.getAllClient().subscribe((data) => {
      this.allClient = data;
    });
  }

  returnToCars() {
    this.route.navigate(['/cars']);
  }

  addResevration() {
    this.location.car_id = this.carsService.getId();
    this.location.start = new Date(this.homeService.getDates().start);
    this.location.end = new Date(this.homeService.getDates().end);
    this.location.client_id = +this.location.client_id;
    console.log('====================================');
    console.log(this.location);
    console.log('====================================');
    this.locationService.addLocation(this.location).subscribe((data) => {
      window.location.href = 'http://localhost:4200';
    });
  }

  public transformDate(date: string): string {
    const d = new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
    return d ? d : '';
  }

  closeValidation() {
    this.isShow = false;
  }

  redirectToHome() {
    window.location.href = 'http://localhost:4200';
  }

  Resevration() {
    this.isShow = true;
  }
}

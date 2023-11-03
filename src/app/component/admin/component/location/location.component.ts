import { DatePipe, formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Cars } from "src/app/model/cars/cars";
import { Location, LocationGet } from "src/app/model/location/location";
import { CarsService } from "src/app/service/cars/cars.service";
import { ClientService } from "src/app/service/client.service/client.service";
import { LocationService } from "src/app/service/location/location.service";

@Component({
  selector: "app-location",
  templateUrl: "./location.component.html",
  styleUrls: ["./location.component.css"],
})
export class LocationComponent implements OnInit {
  date: any = formatDate(new Date(), "YYYY-MM-dd", "en-US");
  location: any;
  formattedDate: any;
  locationData: Location = {
    person: 0,
    car_id: 0,
    start: this.date,
    end: this.date,
    name: "",
    adresse: "",
    number: "",
    exist: false,
    client_id: 0,
  };
  dateToLocate: any = {
    start: this.date,
    end: this.date,
  };
  locationToDelete: any = {
    idToDelete: "",
    clientName: "",
    carIm: "",
    clientNumber: "",
    startDate: new Date(),
    endDate: new Date(),
  };
  cars: any;
  clients: any;
  constructor(
    private locationService: LocationService,
    private carsService: CarsService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.getAllLocation();
    this.getAllClient();
    // this.getAvailableCar()
    console.log(this.clients);
  }

  public getAllLocation() {
    this.locationService.getAllLocation().subscribe((data) => {
      this.location = data;
    });
  }

  public getAllClient() {
    this.clientService.getAllClient().subscribe((data) => {
      this.clients = data;
    });
  }

  // public getAvailableCar() {
  //   this.carsService.getAvailableCar(this.dateToLocate).subscribe((data) => {
  //     this.cars = data;
  //     console.log(this.cars);

  //   });
  // }

  public reset() {
    this.locationData = {
      person: 0,
      car_id: 0,
      start: this.date,
      end: this.date,
      name: "",
      adresse: "",
      number: "",
      exist: false,
      client_id: 0,
    };
  }

  public addLocation() {
    this.locationData.car_id = +this.locationData.car_id;
    this.locationData.start = new Date(this.locationData.start);
    this.locationData.end = new Date(this.locationData.end);
    console.log(this.locationData.start);

    this.locationService.addLocation(this.locationData).subscribe((data) => {
      this.getAllLocation();
    });
  }

  public transformDate(date: string): string {
    const d = new DatePipe("en-US").transform(date, "dd/MM/yyyy");
    return d ? d : "";
  }

  public changeDate() {
    if (
      formatDate(this.locationData.start, "yyyy-MM-dd", "en-US") <
      formatDate(this.locationData.end, "yyyy-MM-dd", "en-US")
    ) {
      this.dateToLocate = {
        start: this.locationData.start,
        end: this.locationData.end,
      };
      this.carsService.getAvailableCar(this.dateToLocate).subscribe((data) => {
        this.cars = data;
      });
    } else {
      this.cars = [];
    }
  }

  public separateNumber(number: string) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  public setPhoneNumber(number: string) {
    return number.replace(/(\d{2})(\d{2})(\d{3})(\d{2})/, "$1 $2 $3 $4");
  }

  public deleting(id: string) {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    this.locationService.getById(+id).subscribe((data) => {
      this.locationToDelete = {
        idToDelete: id,
        clientName: data.client.name,
        carIm: data.car.im,
        clientNumber: data.client.number,
        startDate: new Date(data.date.start).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        endDate: new Date(data.date.end).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };
    });
  }

  public deleteLocation(id: number) {
    this.locationService.deleteLocation(id).subscribe((data) => {
      this.getAllLocation();
    });
  }
}

import { Component, Injectable, OnInit } from "@angular/core";
import { Cars, CarsAll } from "src/app/model/cars/cars";
import { Cathegorie } from "src/app/model/cathegorie/cathegorie";
import { CarsService } from "src/app/service/cars/cars.service";
import { CathegorieComponent } from "../cathegorie/cathegorie.component";
import { CathegorieService } from "src/app/service/categotie/cathegorie.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-adminCar",
  templateUrl: "./adminCar.component.html",
  styleUrls: ["./adminCar.component.css"],
})
export class AdminCarComponent implements OnInit {
  idToUpdate: string = "";
  idToshowDetail: number = 0;
  editBtn: boolean = true;
  addBtn: boolean = true;
  fileContent: any;
  imageUri: any;
  cars: any;
  carsToDelete: any = {
    idToDelete: "",
    imToDelete: "",
  };
  carsAdd: Cars = {
    im: "",
    place: 0,
    carburant: "",
    marque: "",
    bagage: 0,
    vitesse: "",
    // clim: undefined,
    price: 0,
    description: '',
    // occuped: false,
    category_id: 0,
  };
  carsDetail :CarsAll = {
    id: 0,
    im: "",
    place: 0,
    carburant: "",
    marque: "",
    description: '',
    bagage: 0,
    vitesse: "",
    price: "",
    image_url: "",
    category_id: 0,
    category: {
      id: "",
      type: "",
    },
    created_at: "",
  }
  categories: Cathegorie[] = [];
  constructor(
    private carsService: CarsService,
    private route: Router,
    private router: ActivatedRoute,
    private cathegorieService: CathegorieService,
  ) {}

  ngOnInit() {
    this.getAllCars();
    this.getAllCathegorie();
  }

  initializeForm(): void {
    this.addBtn = true;
    this.editBtn = false;
    this.carsAdd = {
      im: "",
      place: 0,
      carburant: "",
      marque: "",
      bagage: 0,
      vitesse: "",
      // clim: undefined,
      price: 0,
      description: '',
      // occuped: false,
      category_id: 0,
    };
  }

  private getAllCars() {
    this.carsService.getAllCars().subscribe((data) => {
      this.cars = data;
    });
  }

  public getAllCathegorie() {
    this.cathegorieService.getCathegorie().subscribe((data) => {
      console.log("====================================");
      console.log(data);
      console.log("====================================");
      this.categories = data;
    });
  }
  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      console.log("file not found");
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      console.log("images only supported");
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.imageUri = reader.result;
    };
    this.fileContent = event.target.files[0];
  }

  public addCars() {
    const carsData = new FormData();
    let stringId = parseInt(this.carsAdd.category_id.toString());
    this.carsAdd.category_id = stringId;
    for (let [key, value] of Object.entries(this.carsAdd)) {
      carsData.append(key, value);
    }
    if (this.fileContent) {
      carsData.append("image", this.fileContent, this.fileContent.name);
    }
    this.carsService.addCars(carsData).subscribe((data) => {
      this.getAllCars();
    });
  }

  public editCars(id: string) {
    this.idToUpdate = id;
    this.editBtn = true;
    this.addBtn = false;
    this.carsService.findById(+this.idToUpdate).subscribe((data) => {
      this.carsAdd = {
        im: data.im,
        place: data.place,
        carburant: data.carburant,
        marque: data.marque,
        bagage: data.bagage,
        vitesse: data.vitesse,
        // clim: data.clim,
        price: +data.price,
        description: data.description,
        // occuped: data.occuped,
        category_id: data.category_id,
      };
    });
  }

  public updateCars() {
    const carsToEdit = new FormData();
    this.carsAdd.category_id = +this.carsAdd.category_id;
    for (let [key, value] of Object.entries(this.carsAdd)) {
      carsToEdit.append(key, value);
    }
    if (this.fileContent) {
      carsToEdit.append("image", this.fileContent, this.fileContent.name);
    }
    this.carsService
      .updateCars(this.idToUpdate, carsToEdit)
      .subscribe((data) => {
        this.getAllCars();
      });
  }

  public deleting(id: string) {
    this.carsService.findById(+id).subscribe((data) => {
      this.carsToDelete = {
        idToDelete: id,
        imToDelete: data.im,
      };
    });
  }

  public deleteCar() {
    this.carsService.deleteCar(this.carsToDelete.idToDelete).subscribe(() => {
      this.getAllCars();
    });
  }

  public separateNumber(number: string) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  public show(data: any) {
    if (data.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  public showDetail(id: number) {
    this.carsService.findById(id).subscribe((data) => {
      this.carsDetail = data;
      console.log(this.carsDetail);
    })
  }
}

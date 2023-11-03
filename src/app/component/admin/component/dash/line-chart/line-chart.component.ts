import { Component, ViewChild } from "@angular/core";
import { ChartData, ChartConfiguration, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import { LocationGet } from "src/app/model/location/location";
import { CarsService } from "src/app/service/cars/cars.service";
import { LocationService } from "src/app/service/location/location.service";

export interface datasets {
  data: Array<number>;
  label: string;
}
@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"],
})
export class LineChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  month: Array<string> = [
    this.getMoisEnLettres(-2),
    this.getMoisEnLettres(-1),
    this.getMoisEnLettres(),
  ];
  cars: Array<string> = [];
  locations: Array<LocationGet> = [];
  dataSet: datasets = {
    data: [],
    label: "",
  };
  dataSets: datasets[] = this.setDataChart();
  loadedData: boolean = true
  constructor(
    private locationService: LocationService,
    private carService: CarsService
  ) {}

  ngOnInit() {
    console.log(this.setDataChart());
  }
  getMoisEnLettres(offset: number = 0): string {
    const formatter = new Intl.DateTimeFormat("fr-FR", { month: "long" });
    const date = new Date();
    date.setMonth(date.getMonth() + offset);

    return formatter.format(date);
  }

  public getAllLocation() {
    return this.locationService.getAllLocation();
  }

  public barChartOptions: ChartConfiguration["options"] = {
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      legend: { display: true },
    },
  };
  public barChartLabels: string[] = this.month;
  public barChartType: ChartType = "line";

  public barChartData: ChartData<"line"> = {
    labels: this.barChartLabels,
    datasets: this.loadedData ? this.dataSets : [{data: [1, 2, 4], label: "test2"}],
  };

  public afficher() {
    this.setDataChart()
  }
  public setDataChart(): datasets[] {
    let result: datasets[] = [];
    let months = [
      new Date().getMonth() - 1,
      new Date().getMonth(),
      new Date().getMonth() + 1,
    ];
    var carsData: Array<string> = [];
    this.carService.getAllCars().subscribe((data) => {
      data.forEach((item) => {
        carsData.push(item.im);
      });
      this.getAllLocation().subscribe((locations) => {
        for (let voiture of carsData) {
          const sums = [];

          for (const month of months) {
            const sum = locations
              .filter(
                (item) =>
                  item.car.im === voiture &&
                  new Date(item.date.start).getMonth() + 1 == month
              )
              .reduce((total, item) => total + +item.cost, 0);

            sums.push(sum);
          }

          result.push({ data: sums, label: voiture.toUpperCase() });
        }
      });
    });
    this.dataSets = result;
    return result;
  }
}

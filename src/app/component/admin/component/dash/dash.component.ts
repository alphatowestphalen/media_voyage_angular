import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

import DataLabelsPlugin from "chartjs-plugin-datalabels";
import { ChartService } from "src/app/service/chart/chart.service";
import { CarsData, Chart } from "src/app/model/chart/chart";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"],
})
export class DashComponent implements OnInit {
  chartData: Array<Chart> = [];
  allCars: Array<string> = [];
  allCost: Array<number> = [];
  allTotalPrice: Array<number> = [];
  
  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.getChart();
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };
  public barChartType: ChartType = "bar";
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<"bar"> = {
    labels: this.allCars,
    datasets: [
      { data: this.allCost, label: "(Location/jours) / 1 000" },
      { data: this.allTotalPrice, label: "Prix Total / 10 000" },
    ],
  };

  getChart(): void {
    this.chartService.getAllCar().subscribe((data) => {
      data.forEach((data) => {
        this.chartData.push({
          carIm: data.im,
          locationCost: +data.price,
          totalPrice: this.totalPrice(data),
        });
      });
      this.setAttr();
    });
    console.log(this.chartData);
  }

  public totalPrice(data: CarsData): number {
    let total = 0;
    data.locations.forEach((location) => {
      total += parseInt(location.cost);
    });

    return total;
  }

  public setAttr() {
    this.chartData.forEach((data) => {
      this.allCost.push(data.locationCost / 1000);
      this.allTotalPrice.push(data.totalPrice / 10000);
      this.allCars.push(data.carIm.toUpperCase());
    });
  }


}

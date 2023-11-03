import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { ChartService } from 'src/app/service/chart/chart.service';

@Component({
  selector: 'app-polar-chart',
  templateUrl: './polar-chart.component.html',
  styleUrls: ['./polar-chart.component.css']
})
export class PolarChartComponent {

  allCars : Array<string> = []
  allNumber : Array<number> = []
  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.getChart();
  }
   // PolarArea
   public polarAreaChartLabels: string[] = this.allCars;
  public polarAreaChartData: ChartData<'polarArea'> = {
    labels: this.polarAreaChartLabels,
    datasets: [
      {
        data: this.allNumber,
        label: 'Nombre de Location',
      },
    ],
  };
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';
  getChart(): void {
    this.chartService.getAllCar().subscribe((data) => {
      data.forEach((data) => {
        this.allNumber.push(data.locations.length);
        this.allCars.push(data.im.toUpperCase());
      });
    });
  }
}

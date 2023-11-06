import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavBarComponent } from './component/layout/navBar/navBar.component';
import { VoitureComponent } from './component/voiture/voiture.component';
import { CarDetailsComponent } from './component/carDetails/carDetails.component';
import { CheckoutCarsComponent } from './component/checkoutCars/checkoutCars.component';
import { SideBarComponent } from './component/admin/layout/sideBar/sideBar.component';
import { DashComponent } from './component/admin/component/dash/dash.component';
import { AdminCarComponent } from './component/admin/component/adminCar/adminCar.component';
import { HeaderComponent } from './component/admin/layout/header/header.component';
import { CathegorieComponent } from './component/admin/component/cathegorie/cathegorie.component';
import { ClientComponent } from './component/admin/component/client/client.component';
import { DatePipe, LocationStrategy } from '@angular/common';
import { LocationComponent } from './component/admin/component/location/location.component';
import { OccupationComponent } from './component/admin/component/occupation/occupation.component';
import { UserComponent } from './component/admin/component/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SingInComponent } from './component/Auth/SingIn/SingIn.component';
// import { NgApexchartsModule } from "ng-apexcharts";

import { ChartModule } from './modules/chart/chart.module';
import { NgChartsModule } from 'ng2-charts';
import { LineChartComponent } from './component/admin/component/dash/line-chart/line-chart.component';
import { PolarChartComponent } from './component/admin/component/dash/polar-chart/polar-chart.component';
import { DetailCarComponent } from './component/admin/component/adminCar/detail-car/detail-car.component';
import { DateManage } from './utils/compteDay';
import { DateUtils } from './utils/dates.utils';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    AdminCarComponent,
    NavBarComponent,
    SideBarComponent,
    VoitureComponent,
    AdminCarComponent,
    CarDetailsComponent,
    CheckoutCarsComponent,
    HeaderComponent,
    CathegorieComponent,
    ClientComponent,
    LocationComponent,
    OccupationComponent,
    UserComponent,
    LineChartComponent,
    PolarChartComponent,
    DetailCarComponent,
    SingInComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DatePipe,
    // NgApexchartsModule
    ChartModule,
    NgChartsModule
  ],
  providers: [DateManage, DateUtils],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

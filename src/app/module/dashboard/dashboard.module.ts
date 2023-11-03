import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SideBarComponent } from 'src/app/component/admin/layout/sideBar/sideBar.component';
import { DashComponent } from 'src/app/component/admin/component/dash/dash.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule
  ],
  declarations: [
    DashboardComponent,
    // DashComponent
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }

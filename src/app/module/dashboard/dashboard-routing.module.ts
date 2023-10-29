import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from 'src/app/component/admin/component/dash/dash.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    // {
    //     path: '', component:DashboardComponent,
    //     children:[
    //         {path: '', redirectTo:'home', pathMatch: 'full'},
    //         {path: 'home', component:DashComponent}
    //     ]
    // },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
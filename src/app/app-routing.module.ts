import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { VoitureComponent } from './component/voiture/voiture.component';
import { CarDetailsComponent } from './component/carDetails/carDetails.component';
import { CheckoutCarsComponent } from './component/checkoutCars/checkoutCars.component';
import { SingInComponent } from './component/Auth/SingIn/SingIn.component';
import { NotFondComponent } from './component/Auth/notFond/notFond.component';
import { SingupComponent } from './component/Auth/singup/singup.component';
import { DashComponent } from './component/admin/component/dash/dash.component';
import { AdminCarComponent } from './component/admin/component/adminCar/adminCar.component';
import { CathegorieComponent } from './component/admin/component/cathegorie/cathegorie.component';
import { ClientComponent } from './component/admin/component/client/client.component';
import { LocationComponent } from './component/admin/component/location/location.component';
import { OccupationComponent } from './component/admin/component/occupation/occupation.component';
import { UserComponent } from './component/admin/component/user/user.component';

const routes: Routes = [
  // {
  //   path:'dash',
  //   loadChildren:() => import('./module/dashboard/dashboard.module').then((m) =>m.DashboardModule)
  // },
  {path:"",component:HomeComponent},
  {path:"cars",component:VoitureComponent},
  {path:"showdetailCar",component:CarDetailsComponent},
  {path:"checkoutCars",component:CheckoutCarsComponent},
  {path:"login",component:SingInComponent},
  {path:"logOut",component:SingupComponent},
  {path:"dash",component:DashComponent},
  {path:"adminCars",component:AdminCarComponent},
  {path:"adminCars/:id",component:AdminCarComponent},
  {path:"adminCathegorie",component:CathegorieComponent},
  {path:"adminClient",component:ClientComponent},
  {path:"adminLocation",component:LocationComponent},
  {path:"adminOccupation",component:OccupationComponent},
  {path:"adminUser",component:UserComponent},
  {path:"**",component:NotFondComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

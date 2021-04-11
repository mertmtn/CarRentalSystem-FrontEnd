import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guards/login.guard';
import { BrandComponent } from './components/brand/brand.component';
import { BrandAddComponent } from './components/brandAdd/brand-add/brand-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
 
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  { path: 'app-brand', component: BrandComponent },
  {
    path: 'app-brand-add',
    component: BrandAddComponent,
    canActivate: [LoginGuard],
  },
  { path: 'app-car', component: CarComponent },
  { path: 'app-car/color/:colorId', component: CarComponent },
  { path: 'app-car/brand/:brandId', component: CarComponent },  
  { path: 'app-color', component: ColorComponent },
  { path: 'app-company', component: CompanyComponent },
  { path: 'app-rental', component: RentalComponent },
  { path: 'app-customer', component: CustomerComponent },
  { path: 'app-car-detail/:carId', component: CarDetailComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

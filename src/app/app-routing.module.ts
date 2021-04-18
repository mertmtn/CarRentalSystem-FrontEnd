import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from 'src/guards/login.guard';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { BrandAddComponent } from './components/brandAdd/brand-add/brand-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarImageAddComponent } from './components/car-image-add/carImage-add.component';

import { CarImageComponent } from './components/car-image/car-image.component';
import { CarComponent } from './components/car/car.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { ColorComponent } from './components/color/color.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';

import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';

import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [
  //{ path: 'app-root', component: AppComponent ,canActivate: [LoginGuard] },
  { path: 'app-brand', component: BrandComponent ,canActivate: [LoginGuard] },
  {
    path: 'app-brand-add',
    component: BrandAddComponent,    canActivate: [LoginGuard],
  },
  { path: 'app-car', component: CarComponent, canActivate: [LoginGuard] },
  {
    path: 'app-car-add',
    component: CarAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'app-car-image/:carId',
    component: CarImageComponent,
    //canActivate: [LoginGuard],
  },
  {
    path: 'app-carImage-add/:carId',
    component: CarImageAddComponent,
    //canActivate: [LoginGuard],
  },
  {
    path: 'app-car/color/:colorId',
    component: CarComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'app-car/brand/:brandId',
    component: CarComponent,
    canActivate: [LoginGuard],
  },
  { path: 'app-color', component: ColorComponent, canActivate: [LoginGuard] },
  {
    path: 'app-color-add',
    component: ColorAddComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'app-company',
    component: CompanyComponent,
    canActivate: [LoginGuard],
  },
  { path: 'app-rental', component: RentalComponent, canActivate: [LoginGuard] },
  {
    path: 'app-customer',
    component: CustomerComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'app-car-detail/:carId',
    component: CarDetailComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

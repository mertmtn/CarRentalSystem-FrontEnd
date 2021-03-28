import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';


const routes: Routes = [
  { path: 'app-brand', component: BrandComponent },
  { path: 'app-car', component: CarComponent },
  { path: 'app-color', component: ColorComponent },
  { path: 'app-company', component: CompanyComponent },
  { path: 'app-rental', component: RentalComponent },
  { path: 'app-customer', component: CustomerComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

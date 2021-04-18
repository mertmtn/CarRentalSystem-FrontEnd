import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandComponent } from './components/brand/brand.component';
import { CompanyComponent } from './components/company/company.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import  {ToastrModule} from "ngx-toastr";
import  {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CartSummaryComponent } from './components/cartItem/cart-summary/cart-summary.component';
import { BrandAddComponent } from './components/brandAdd/brand-add/brand-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FilterBrandPipePipe } from './pipes/brand/filter-brand-pipe.pipe';
import { FilterColorPipePipe } from './pipes/color/filter-color-pipe.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { RegisterComponent } from './components/register/register.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
 
@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    CompanyComponent,
    NaviComponent,
    CarComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    VatAddedPipe,
    FilterPipePipe,
    FilterBrandPipePipe,
    FilterColorPipePipe,
    CartSummaryComponent,
    BrandAddComponent,
    LoginComponent,
    CarDetailComponent,
    RentalAddComponent,
    RegisterComponent,
    ColorAddComponent 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}) //Bu proje için kullanılabilir hale getir: forRoot()
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

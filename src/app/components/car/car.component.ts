import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand/brand.service';
import { CarService } from 'src/app/services/car/car.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  //dataLoaded: boolean=false;
  cars: Car[]=[];
  filterCarText='';
  brands:Brand[]=[];
  currentBrand:Brand;
  colors: Color[]=[];

  constructor( private brandService:BrandService,
    private colorService:ColorService,private activatedRoute:ActivatedRoute, private carService:CarService,private toastrService:ToastrService,private cartService:CartService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;

    });
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarListByColorId(params["colorId"])
      }
      else if(params["brandId"]){
        this.getCarListByBrandId(params["brandId"])
      }
      else{
        this.getCarList()
      }
    })

    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;

    });

  }
getCarList(){
  this.carService.getCars().subscribe((response)=>{
    this.cars=response.data;
 
  });
}

getCarListByBrandId(brandId:number){
  this.carService.getCarsByBrandId(brandId).subscribe((response)=>{
    this.cars=response.data;
  });
 }

  getCarListByColorId(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe((response)=>{
      this.cars=response.data;
    });
   }


  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
  }

  addToCart(car:Car){
    this.toastrService.success("Sepete Eklendi!",car.carName);
    this.cartService.addToCart(car);
  }
}

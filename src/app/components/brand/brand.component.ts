import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';


import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand:Brand;
  filterBrandText='';
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;

    });
  }

  getCarByBrandId(brand:Brand){
    console.log(brand.name);
  }

}

import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/responseModel/carResponseModel';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  dataLoaded: boolean=false;
  cars: Car[]=[];

  carResponseModel:CarResponseModel={
    data:this.cars,
    message:"",
    success:true
  };
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.carService.getBrands().subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

}

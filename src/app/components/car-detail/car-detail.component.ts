import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor( private activatedRoute:ActivatedRoute, private carService:CarService) { }
  imagePreviewSrc=""
  car:Car;
  carImages:CarImage[]=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
      }
    })
  }

getCarById(carId:number){
  this.carService.getCarDetailByCarId(carId).subscribe(response=>{
    this.car=response.data;
    if(response.data.carImageList.length>0){

      this.imagePreviewSrc= "https://localhost:44357"+ response.data.carImageList[0].imagePath;
    }
    else{
      this.imagePreviewSrc= "https://localhost:44357/Resources/Images/noImage.png"
    }
  })
}
onMouseOverImg(imgSrc:CarImage){

  this.imagePreviewSrc="https://localhost:44357"+imgSrc.imagePath;

}



}

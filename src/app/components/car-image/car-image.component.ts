import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImage/carimage.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private carImageService:CarImageService) { }
carImageList:CarImage[]=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getImageListByCarId(params["carId"]);
      }
    })
  }


  getImageListByCarId(id:number){
    this.carImageService.getImagesByCarId(id).subscribe(response=>{
      this.carImageList=response.data})
  }

}

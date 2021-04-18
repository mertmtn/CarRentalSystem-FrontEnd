import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44357/api/carimages/";
  constructor(private httpClient:HttpClient) { }

  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl+"GetImagesByCarId?carId="+carId);
  }


  add(carImage:CarImage):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Add",carImage);
  }
}

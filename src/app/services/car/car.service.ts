import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarAddOrUpdate } from 'src/app/models/carAddOrUpdate';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarDetailByCarId(carId:number) {
    return this.httpClient.get<SingleResponseModel<Car>>(this.apiUrl+"GetCarDetailByCarId?carId="+carId);
  }

  apiUrl="https://localhost:44357/api/cars/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"GetCarDetails");
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"GetCarDetailsByColorId?colorId="+colorId);
  }

  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl+"GetCarDetailsByBrandId?brandId="+brandId);
  }

  add(car:CarAddOrUpdate):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Add",car);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/responseModel/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44357/api/cars/GetCarDetails";

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}

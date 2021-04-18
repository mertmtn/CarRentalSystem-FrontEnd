import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from 'src/app/models/responseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44357/api/upload/";

  uploadImage(formData:FormData){
    return this.httpClient.post<SingleResponseModel<string>>(this.apiUrl+"ImageUpload",formData);
  }


}

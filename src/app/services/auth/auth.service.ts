import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';
import { LoginModel } from '../../models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="https://localhost:44357/api/auth/";

  constructor(private httpClient:HttpClient) { }

login(loginModel:LoginModel){
  return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel);
}

isAuthenticated(){
    return (localStorage.getItem("token"))?true:false;
}

}

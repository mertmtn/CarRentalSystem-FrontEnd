import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl="https://localhost:44357/api/companies/getall";

  constructor(private httpClient:HttpClient) { }

  getCompanies():Observable<ListResponseModel<Company>>{
    return this.httpClient.get<ListResponseModel<Company>>(this.apiUrl);
  }
}

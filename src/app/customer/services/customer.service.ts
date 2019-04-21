import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/response/common-response';
import { Customer } from 'src/app/model/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  CIF = localStorage.getItem("user");
  baseUrl = "http://localhost:8080/api-v1/customer";

  getProfile(): Observable<CommonResponse<Customer>>{
    return this.http.get<CommonResponse<Customer>>(`${this.baseUrl}/${this.CIF}`);
  }
}

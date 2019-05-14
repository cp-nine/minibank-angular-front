import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/model/login-model';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/response/common-response';
import { LoginOk } from 'src/app/model/login-ok-model';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:80/api/api-v1/customer"; 

  // login
  login(data: LoginModel): Observable<CommonResponse<LoginOk>>{
    return this.http.post<CommonResponse<LoginOk>>(`${this.baseUrl}/login`, data);
  }

  isLogin(){
    if(localStorage.getItem("user") !== null){
      return false;
    } else {
      return true;
    }
  }
}

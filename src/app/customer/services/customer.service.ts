import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonResponse } from 'src/app/response/common-response';
import { Customer } from 'src/app/model/customer-model';
import { Account } from 'src/app/model/account-model';
import { TrxEntity } from 'src/app/model/trx-entity';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  CIF = localStorage.getItem("user");
  baseUrl = "http://localhost:8080/api-v1";

  // get customer profile
  getProfile(): Observable<CommonResponse<Customer>>{
    return this.http.get<CommonResponse<Customer>>(`${this.baseUrl}/customer/${this.CIF}`);
  }

  // createCustomer
  createCustomer(customer: Customer): Observable<CommonResponse<Customer>>{
    return this.http.post<CommonResponse<Customer>>(`${this.baseUrl}/customer`, customer);
  }

  // post new account
  createAccount(account: Account): Observable<CommonResponse<Account>>{
    return this.http.post<CommonResponse<Account>>(`${this.baseUrl}/account`, account);
  }

  // post new account
  getTrx(): Observable<CommonResponse<TrxEntity[]>>{
    return this.http.get<CommonResponse<TrxEntity[]>>(`${this.baseUrl}/trx/${this.CIF}`);
  }

  getTotalTrx(): Observable<number>{

    let total: number = 0;
    return new Observable(

      observer => {        
        this.getTrx().subscribe(
          resp =>{
            if (resp.status !== "20") {
              console.log("error");
            } else {
              resp.data.forEach(tr => {
                total = total + tr.amount;
              });
            }
          }
        );

        observer.next(total);

      }
    );
  }

}

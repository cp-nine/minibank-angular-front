import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {tap} from 'rxjs/operators';
import { Wallet } from 'src/app/model/wallet';
import { CommonResponse } from 'src/app/response/common-response';
import { WalletAccount } from 'src/app/model/wallet-account';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  CIF = localStorage.getItem("user");
  baseUrl = "http://localhost:80/api/api-v1";

  private _refresh = new Subject<void>();
  
  get refresh() {
    return this._refresh;
  }

  getWalletProfile(wid: number): Observable<CommonResponse<Wallet>>{
    return this.http.get<CommonResponse<Wallet>>(`${this.baseUrl}/wallet/${wid}`);
  }

  getWalletList(): Observable<CommonResponse<WalletAccount[]>>{
    return this.http.get<CommonResponse<WalletAccount[]>>(`${this.baseUrl}/wallet/list/${this.CIF}`);
  }

  // create wallet
  createWallet(wallet: Wallet, acn: number): Observable<CommonResponse<Wallet>>{
    return this.http.post<CommonResponse<Wallet>>(`${this.baseUrl}/wallet/${acn}/${this.CIF}`,wallet).pipe(tap(()=>{this._refresh.next();}));
  }

  // create wallet
  unreg(wallet: WalletAccount): Observable<CommonResponse<WalletAccount>>{
    return this.http.post<CommonResponse<WalletAccount>>(`${this.baseUrl}/wallet/unreg/${wallet.walletId}`,wallet);
  }

}

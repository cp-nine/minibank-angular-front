import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WalletService } from '../services/wallet.service';
import { Wallet } from 'src/app/model/wallet';
import { WalletAccount } from 'src/app/model/wallet-account';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-walletaccount',
  templateUrl: './walletaccount.component.html',
  styleUrls: ['./walletaccount.component.css']
})
export class WalletaccountComponent implements OnInit {

  message: string = '';

  totalBallance: number = 0;
  profileWallet: boolean = false;

  wallets: WalletAccount[];
  wallet: Wallet = new Wallet();
  walletAccount: WalletAccount = new WalletAccount();
  walletBallance: number = 0;

  isSuccess: boolean = false;

  @Output()
  emmiterWallet = new EventEmitter();

  constructor(
    private service: WalletService,
    private service2: CustomerService
  ) { }

  ngOnInit() {

    this.refresh();
    this.getBallance();
    this.getWallets();

  }

  private refresh(){
    this.service.refresh.subscribe(
      () => {
        setTimeout(() => {
          this.getWallets();
        }, 1000);
      }
    );
    this.getWallets();
  }

  async getWallets(){
    let resp = await this.service.getWalletList().toPromise();

    if (resp.status !== "20") {
      this.message = resp.message;
    } else {
     this.wallets = resp.data;
    }
  }

  async getBallance(){
    let resp = await this.service2.getProfile().toPromise();
    this.walletBallance = this.walletBallance + resp.data.accounts[0].ballance;
  }

  unreg(w: WalletAccount){
    this.unregProcess(w);
  }

  unregProcess(w: WalletAccount){

    if (confirm('Unreg wallet'+w.walletName)===true) {
      this.service.unreg(w).subscribe(
        resp => {
          
          if (resp.status !== "20") {
            this.message = resp.message;
            alert(this.message);
          } else {
            this.message = resp.message;
            alert(this.message);
          }
  
        }
      );
    }
  }

  profile(w: WalletAccount){
    this.walletAccount = w;
    this.profileWallet = true;
  }

  updateData(message){
    if (message){
      this.isSuccess = true;
      this.message = message;
    } else {
      this.isSuccess = false;
      this.message = message;
    }
  }

  back(){
    this.profileWallet = false;
  }

}

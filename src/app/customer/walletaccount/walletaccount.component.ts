import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WalletService } from '../services/wallet.service';
import { Wallet } from 'src/app/model/wallet';
import { WalletAccount } from 'src/app/model/wallet-account';

@Component({
  selector: 'app-walletaccount',
  templateUrl: './walletaccount.component.html',
  styleUrls: ['./walletaccount.component.css']
})
export class WalletaccountComponent implements OnInit {

  message: string;

  totalBallance: number = 0;
  profileWallet: boolean = false;

  wallets: WalletAccount[];
  wallet: Wallet = new Wallet();
  walletAccount: WalletAccount = new WalletAccount();

  @Output()
  emmiterWallet = new EventEmitter();

  constructor(
    private service: WalletService
  ) { }

  ngOnInit() {

    this.getWallets();

  }

  getWallets(){
    this.service.getWalletList().subscribe(
      resp => {
        
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
         this.wallets = resp.data;
        }

      }
    );
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

  updateData(){
    this.getWallets();
  }

}

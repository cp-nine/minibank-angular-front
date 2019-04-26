import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Wallet } from 'src/app/model/wallet';
import { WalletService } from '../services/wallet.service';
import { WalletAccount } from 'src/app/model/wallet-account';

@Component({
  selector: 'app-wallet-profile',
  templateUrl: './wallet-profile.component.html',
  styleUrls: ['./wallet-profile.component.css']
})
export class WalletProfileComponent implements OnInit {

  message: string;

  totalBallance: number = 0;
  profileWallet: boolean = false;

  @Input()
  walletAccount: WalletAccount = new WalletAccount();

  @Output()
  emmiter = new EventEmitter();

  wallet: Wallet = new Wallet();

  constructor(
    private service: WalletService
  ) { }

  ngOnInit() {

    this.getWalletProfileById(this.walletAccount.walletId);

  }

  async getWalletProfileById(wid: number){
    let resp = await this.service.getWalletProfile(wid).toPromise();

          
      if (resp.status !== "20") {
        this.message = resp.message;
      } else {
        this.wallet = resp.data;
        this.profileWallet = true;
      }
  }

  back(){
    this.emmiter.emit();
  }

}

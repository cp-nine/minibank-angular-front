import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Account } from 'src/app/model/account-model';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {


  message: string = '';

  accounts: Account[];
  totalBallance: number = 0;

  successCreated: boolean = false;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    
    this.subscribeAccountsList()

    this.getAccounts();

  }

  private subscribeAccountsList(){
    // subscribe all changes of accounts
    this.service.refresh.subscribe(
      () => {
        setTimeout(() => {
          this.getAccounts();
        }, 1500);
      }
    );
  }

  getAccounts(){
    this.service.getProfile().subscribe(
      resp => {
        
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
         this.accounts = resp.data.accounts;
         resp.data.accounts.forEach(a => {
            this.totalBallance = this.totalBallance + a.ballance;
         });
        }

      }
    );
  }

  isCreated(message){
    this.successCreated = !this.successCreated;
    this.message = message;
  }

}

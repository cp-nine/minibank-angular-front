import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Account } from 'src/app/model/account-model';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.css']
})
export class AccountlistComponent implements OnInit {


  message: string;

  accounts: Account[];
  totalBallance: number = 0;

  successCreated: boolean;

  constructor(private service: CustomerService) { }

  ngOnInit() {

    this.getAccounts();

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

}

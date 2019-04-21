import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Account } from 'src/app/model/account-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts: Account[] = [];
  message: string;

  totalAccount: number;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.getListAccount();
  }

  getListAccount(){
    this.service.getProfile().subscribe(
      response => {
        if (response.status !== "20") {
          this.message = response.message;
        } else {
          this.accounts = response.data.accounts;
          this.totalAccount = this.accounts.length;
          console.log(this.accounts)
        }
      }
    );
  }

}

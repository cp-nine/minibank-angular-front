import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Account } from 'src/app/model/account-model';
import { Chart } from "chart.js";
import { WalletService } from '../services/wallet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts: Account[] = [];
  message: string;

  totalAccount: number = 0;
  totalTrxCust: number = 0;
  totalBallance: number = 0;
  totalWallet: number = 0;

  tTopup: number = 0;
  tCash: number = 0;
  tTrans: number = 0;
  tPayment: number = 0;

  constructor(private service: CustomerService, private service2: WalletService) { }

  ngOnInit() {
    this.getListAccount();
    this.totalTrx();
    this.getTotalWallet();
  }

  getListAccount(){
    this.service.getProfile().subscribe(
      response => {
        if (response.status !== "20") {
          this.message = response.message;
        } else {
          this.accounts = response.data.accounts;
          this.totalAccount = this.accounts.length;
          response.data.accounts.forEach(ac => {
            this.totalBallance = this.totalBallance + ac.ballance;
          });
        }
      }
    );
  }

  totalTrx(){
 
    this.service.getTrx().subscribe(
      resp => {
        if (resp.status!=="20") {
          this.message = resp.message;
        } else {
          this.totalTrxCust = resp.data.length;
          resp.data.forEach(t => {
            if (t.trxCode==="Top Up") {
              this.tTopup = this.tTopup + 1;
            } else if (t.trxCode==="Top Up By Account") {
              this.tTopup = this.tTopup + 1;
            } else if (t.trxCode==="Transfer") {
              this.tTrans = this.tTrans + 1;
            } else if (t.trxCode==="Transfer Wallet To Wallet") {
              this.tTrans = this.tTrans + 1;
            } else if (t.trxCode==="Transfer Wallet To Account") {
              this.tTrans = this.tTrans + 1;
            } else if (t.trxCode==="Cash Withdrawal") {
              this.tCash = this.tCash + 1;
            } else if (t.trxCode==="Cash Withdrawal Account") {
              this.tCash = this.tCash + 1;
            } 

          });
          
          this.myChart();
        }
      }
    );

  }

  getTotalWallet(){
    this.service2.getWalletList().subscribe(
      resp => {
        if (resp.status !=="20") {
          this.message = resp.message;
        } else {
          this.totalWallet = resp.data.length;
        }
      }
    );
  }

  myChart(){
    var ctx = document.getElementById('myChart');
    var data = {
      datasets: [{
        data: [this.tTopup, this.tTrans, this.tCash],
        backgroundColor: [
          "rgb(48, 219, 162)",
          "rgb(49, 158, 247)",
          "rgb(229, 71, 71)"
        ],
      }],
      labels: [
        'Top Up',
        'Transfer',
        'Withdrawal'
      ]
    };
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        responsive: true
      }
    });
  }

}

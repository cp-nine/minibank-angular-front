import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net-bs4';
import { CustomerService } from '../services/customer.service';
import { TrxEntity } from 'src/app/model/trx-entity';

@Component({
  selector: 'app-transactionreport',
  templateUrl: './transactionreport.component.html',
  styleUrls: ['./transactionreport.component.css']
})
export class TransactionreportComponent implements OnInit {

  trxList: TrxEntity[];

  message: string = '';

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.getTrxCustomer();
    $('#tb-transactions').DataTable();
  }


  getTrxCustomer(){
    this.service.getTrx().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.trxList = resp.data;
        }
      }
    );
  }

}

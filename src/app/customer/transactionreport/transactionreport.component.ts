import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-transactionreport',
  templateUrl: './transactionreport.component.html',
  styleUrls: ['./transactionreport.component.css']
})
export class TransactionreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#tb-transactions').DataTable();
  }

}

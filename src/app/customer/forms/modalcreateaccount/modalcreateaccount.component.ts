import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from 'src/app/model/account-model';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/model/customer-model';
import { Router } from '@angular/router';
import { CustomValidator } from '../cutom-validator';

@Component({
  selector: 'app-modalcreateaccount',
  templateUrl: './modalcreateaccount.component.html',
  styleUrls: ['./modalcreateaccount.component.css']
})
export class ModalcreateaccountComponent implements OnInit {

  acnForm: FormGroup;
  submitted: boolean = false;

  cashTag: string;

  account: Account = new Account();
  customer: Customer;

  message: string = '';

  isCreated: boolean = true;

  @Output()
  emmiterModal = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private servisce1: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProfile();

    this.acnForm = this.fb.group({
      ballance: ['', [Validators.required, Validators.min(200000), CustomValidator.numberValidator]]
    });
  }

  public get f() {
    return this.acnForm.controls;
  }

  addAccount(){
    this.submitted = true;

    let primaryName = this.customer.fname+ " " +this.customer.lname;

    this.account.accountName = primaryName;
    this.account.ballance = this.acnForm.controls.ballance.value;
    this.account.customerNumber = localStorage.getItem("user");

    // check validation form
    if (this.acnForm.invalid) {

      return;

    }
    
    this.createAccount(this.account);
  
  }

  getProfile(){
    this.servisce1.getProfile().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.customer = resp.data;
        }
      }
    );
  }

  createAccount(account: Account){
    this.servisce1.createAccount(account).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.isCreated = !this.isCreated;
          this.emmiterModal.emit(resp.message);
        } else {
            this.isCreated = !this.isCreated;
            this.emmiterModal.emit(resp.message);

        }
      }
    );
  }

}
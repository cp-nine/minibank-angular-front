import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/model/wallet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer-model';
import { CustomerService } from '../../services/customer.service';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-modalcreatewallet',
  templateUrl: './modalcreatewallet.component.html',
  styleUrls: ['./modalcreatewallet.component.css']
})
export class ModalcreatewalletComponent implements OnInit {

  walletForm: FormGroup;
  submitted: boolean = false;

  customer: Customer;
  wallet: Wallet;

  message: string = '';
  isSuccess: boolean = false;

  acn: number;

  constructor(
    private fb: FormBuilder,
    private service1: CustomerService,
    private service2: WalletService
  ) { }

  ngOnInit() {
    // this.testAsycn();
    this.registerGroup();
  }

  registerGroup(){
    this.walletForm = this.fb.group({
      walletName: ['', Validators.required],
      cashTag: ['', Validators.required],
      accountNumber: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  
  public get f(){
    return this.walletForm.controls;
  } 


  newWallet(){
    this.submitted = true;

    this.wallet = this.walletForm.value;
    this.acn = this.walletForm.controls.accountNumber.value;

    // check validation form
    if (this.walletForm.invalid) {
      return;
    }

    // console.log(this.walletForm.value);
    this.createProcess();
  }

  createProcess(){
    this.service2.createWallet(this.wallet, this.acn).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.message = resp.message;
          this.isSuccess = true;
        }
      }
    );
  }

  getCustomer(){
    this.service1.getProfile().subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.customer = resp.data;
          this.isSuccess = true;
        }
      }
    );
  }

}

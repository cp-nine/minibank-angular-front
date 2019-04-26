import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer-model';
import { CustomerService } from 'src/app/customer/services/customer.service';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/customer/forms/cutom-validator';
import { mustMatch } from 'src/app/customer/forms/must-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  customer: Customer;

  message: string = '';
  isSuccess: boolean = false;

  constructor(
    private fb: FormBuilder,
    private service1: CustomerService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.testAsycn();
    this.registerGroup();
  }

  registerGroup(){
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required, CustomValidator.stringValidator]],
      lname: ['', [Validators.required, CustomValidator.stringValidator]],
      placeOb: ['', Validators.required],
      brithDate: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      job: ['', Validators.required],
      rangeSalary: ['', Validators.required],
      phoneNumber: ['', [Validators.required, CustomValidator.numberValidator]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      cpassword: ['', Validators.required]
    },
    {
      validator: mustMatch("password","cpassword")
    });
  }

  
  public get f(){
    return this.registerForm.controls;
  } 


  register(){
    this.submitted = true;

    this.customer = this.registerForm.value;

    // check validation form
    if (this.registerForm.invalid) {
      return;
    }

    this.router.navigate(['/login']);
    // this.registerProcess();
  }

  registerProcess(){
    this.service1.createCustomer(this.customer).subscribe(
      resp => {
        if (resp.status !== "20") {
          this.message = resp.message;
        } else {
          this.message = resp.message;
          this.isSuccess = true;
          alert("Success");
          this.router.navigate(['/login']);
        }
      }
    );
  }


}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer-model';
import { CustomerService } from '../../services/customer.service';
import { mustMatch } from '../must-match';
import { retry } from 'rxjs/operators';
import { NewPassword } from 'src/app/model/new-password';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  editPasswordForm: FormGroup;
  submitted:boolean = false;

  message: string = '';

  eCustomer: Customer = new Customer();
  newPassword: NewPassword = new NewPassword();

  constructor(private fb: FormBuilder, private router: Router, private service: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
    this.initForm();
  }

  async getCustomer(){
    let resp = await this.service.getProfile().toPromise();

    if (resp.status !== "20") {
      this.message = resp.message;
    } else {
      this.eCustomer = resp.data;
    }
  }

  initForm(){
    this.editPasswordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: mustMatch("newPassword", "confirmPassword")
      }
    );
  }

  
  public get f() {
    return this.editPasswordForm.controls;
  }
  

  onSubmit(){

    this.submitted = true;

    if(this.editPasswordForm.errors){
      return;
    }

    if (this.eCustomer.password !== this.f.currentPassword.value) {
      this.message = "Current Password Not Valid";
    } else {
      this.newPassword.customerNumber = localStorage.getItem("user");
      this.newPassword.password = this.f.newPassword.value;

      this.updateProcess(this.newPassword);
    }
    setTimeout(() => {
      this.router.navigate(['/customer/profile']);
    }, 1500);
  }

  updateProcess(data: NewPassword){
    this.service.updatePassword(data).subscribe(
      resp => {
        this.message = resp.message;
      }
    );
  }

  resetMessage(){
    setTimeout(() => {
      this.message = '';
    }, 5000);
  }

}

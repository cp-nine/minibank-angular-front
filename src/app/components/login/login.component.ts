import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { LoginModel } from 'src/app/model/login-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  loginFailed: boolean = false;
  message: string = '';

  auth: LoginModel;

  constructor(
    private service: AuthserviceService,
    private fb: FormBuilder,
    private router: Router
  ) 
  { 
    
  }

  ngOnInit() {   
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public get f() {
    return this.loginForm.controls;
  }

  // login process
  loginProcess(){
    this.submitted = true;
    this.auth = this.loginForm.value;

    // check validation form
    if (this.loginForm.invalid) {

      return;

    }

    // call login auth service to hit api login
    this.service.login(this.auth).subscribe(
      response => {
        if(response.status.toString() !== "20"){
          this.loginFailed = true;
          this.message = response.message;
        } else {
          localStorage.setItem("user", `${response.data.customerNumber}`);
          this.router.navigateByUrl("/customer/dashboard");
        }
      }
    );

    
  }

}

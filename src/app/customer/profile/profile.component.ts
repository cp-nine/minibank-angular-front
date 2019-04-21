import { Component, OnInit, Input } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from 'src/app/model/customer-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  isEdit:boolean = false;

  customer: Customer = new Customer();
  message: string;

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.customerProfile();
  }

  customerProfile(){
    this.service.getProfile().subscribe(
      response => {
        if (response.status !== "20") {
          this.message = response.message;
        } else {
          this.customer = response.data;
        }
      }
    );
  }

  editPage(){
    this.isEdit = !this.isEdit;
  }

}

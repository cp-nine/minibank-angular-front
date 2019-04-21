import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from 'src/app/model/customer-model';

@Component({
  selector: 'app-editcustprofile',
  templateUrl: './editcustprofile.component.html',
  styleUrls: ['./editcustprofile.component.css']
})
export class EditcustprofileComponent implements OnInit {

  isEdited:boolean = false;

  @Input()
  eCustomer: Customer = new Customer();
  
  @Output()
  emiterEdit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.eCustomer);
  }

  back(){
    this.isEdited = !this.isEdited;
    this.emiterEdit.emit(this.isEdited);
  }

}

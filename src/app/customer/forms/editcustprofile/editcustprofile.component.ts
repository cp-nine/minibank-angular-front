import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from 'src/app/model/customer-model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editcustprofile',
  templateUrl: './editcustprofile.component.html',
  styleUrls: ['./editcustprofile.component.css']
})
export class EditcustprofileComponent implements OnInit {

  editForm: FormGroup;
  submitted:boolean = false;
  isEdited:boolean = false;

  range = RANGE;

  @Input()
  eCustomer: Customer = new Customer();
  
  @Output()
  emiterEdit = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.editForm = this.fb.group(
      {
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        gender: ['', Validators.required],
        placeOb: ['', Validators.required],
        brithDate: ['', Validators.required],
        email: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
        job: ['', Validators.required],
        rangeSalary: ['']
      }
    );
  }

  
  public get f() {
    return this.editForm.controls;
  }
  

  back(){
    this.isEdited = !this.isEdited;
    this.emiterEdit.emit(this.isEdited);
  }

  onSubmit(){
    this.submitted = true;

    if (this.editForm.errors) {
      return;
    }
    console.log(this.editForm.value)
  }

}


export const RANGE = [
  "1Jt - 5 Jt",
  "5Jt - 10 Jt",
  "10Jt - 20 Jt",
  "> 20 Jt"
];
import { Component, Input, Output, EventEmitter, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'Mini Bank';

  arrUrl = []; 
  @Input()
  currentUrl: string; 

  @Output()
  getUrl = new EventEmitter();

  isLogin: boolean = false;

  constructor(private router: Router){}

  ngOnInit(){
    if(localStorage.getItem("user") !== null){
      this.isLogin = true;
    }

    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];
  }

  ngDoCheck(){
    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];
  }
}

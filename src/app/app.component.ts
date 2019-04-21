import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Bank';

  arrUrl = []; 
  @Input()
  currentUrl: string; 

  @Output()
  getUrl = new EventEmitter();

  isLogin: boolean = false;

  constructor(){}

  ngOnInit(){
    if(localStorage.getItem("user") !== null){
      this.isLogin = true;
    }

    this.arrUrl = location.href.split('/');
    this.currentUrl = this.arrUrl[3];
  }
}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu = [
    {
      name: "Profile",
      link: "/profile",
      icon: "fa-user"
    },
    {
      name: "Account List",
      link: "/account-list",
      icon: "fa-list"
    },
    {
      name: "Transaction Report",
      link: "/transactions-report",
      icon: "fa-money-check-alt"
    },
    {
      name: "E-Wallets",
      link: "/e-wallets",
      icon: "fa-wallet"
    }
  ];


  constructor() { }

  ngOnInit() {
    // --- togle sidebar -------
    $('#btn-toggler').on('click', function () {
      if($(this).hasClass('btnhide')){
          $('#btn-toggler').removeClass('btnhide');
          $('#btn-toggler').addClass('btnshow');
          $('.sidebar').css('left','-215px');
          $('.sidebar').css('transition','0.3s');
          $('.content').css('transition','0.3s');
          $('.content').css('margin-left', '0');
      }else{
          $('#btn-toggler').addClass('btnhide');
          $('#btn-toggler').removeClass('btnshow');
          $('.sidebar').css('left','0');
          $('.sidebar').css('transition','0.3s');
          $('.content').css('transition','0.3s');
          $('.content').css('margin-left', '215px');
      }
  });
  }

}

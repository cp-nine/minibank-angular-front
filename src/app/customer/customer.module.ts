import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { EditcustprofileComponent } from './forms/editcustprofile/editcustprofile.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { TransactionreportComponent } from './transactionreport/transactionreport.component';
import { WalletaccountComponent } from './walletaccount/walletaccount.component';
import { ModalcreateaccountComponent } from './forms/modalcreateaccount/modalcreateaccount.component';
import { ModalcreatewalletComponent } from './forms/modalcreatewallet/modalcreatewallet.component';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, EditcustprofileComponent, AccountlistComponent, TransactionreportComponent, WalletaccountComponent, ModalcreateaccountComponent, ModalcreatewalletComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

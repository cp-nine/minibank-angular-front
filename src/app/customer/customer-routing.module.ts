import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guard/auth.guard';
import { CustomerGuard } from '../guard/customer.guard';
import { ProfileComponent } from './profile/profile.component';
import { WalletaccountComponent } from './walletaccount/walletaccount.component';
import { TransactionreportComponent } from './transactionreport/transactionreport.component';
import { AccountlistComponent } from './accountlist/accountlist.component';
import { UpdatePasswordComponent } from './forms/update-password/update-password.component';

const customerRoutes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full', canActivate: [CustomerGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate: [CustomerGuard]},
  {path:'profile', component: ProfileComponent, canActivate: [CustomerGuard]},
  {path:'account-list', component: AccountlistComponent, canActivate: [CustomerGuard]},
  {path:'transaction-report', component: TransactionreportComponent, canActivate: [CustomerGuard]},
  {path:'e-wallets', component: WalletaccountComponent, canActivate: [CustomerGuard]},
  {path:'update-password', component: UpdatePasswordComponent, canActivate: [CustomerGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

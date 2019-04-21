import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guard/auth.guard';
import { CustomerGuard } from './guard/customer.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent, canActivate:[AuthGuard] },
  {path:'customer', loadChildren:'./customer/customer.module#CustomerModule', canActivate: [CustomerGuard]},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

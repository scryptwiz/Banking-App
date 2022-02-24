import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: SignUpComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: "transfer", component: TransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [ LoginComponent, SignUpComponent, DashboardComponent ]
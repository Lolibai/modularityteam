import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    RouterModule
  ],
  declarations: [AccountComponent, LoginComponent, UserComponent]
})
export class AccountModule { }

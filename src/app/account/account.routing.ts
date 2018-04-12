import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '', component: AccountComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
            { path: 'user/:id', component: UserComponent},
            { path: '**', redirectTo: 'login' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountRoutingModule { }

export const routedComponents = [AccountComponent];

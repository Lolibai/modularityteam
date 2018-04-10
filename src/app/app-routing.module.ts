import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account' },
  { path: 'account', loadChildren: () => AccountModule },
  { path: '**', redirectTo: 'account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  
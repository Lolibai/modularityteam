import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountModule } from './account/account.module';
import { OpModule } from './op/op.module';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account' },
  { path: 'account', loadChildren: "./account/account.module#AccountModule" },
  { path: 'op', loadChildren: "./op/op.module#OpModule" },
  { path: '**', redirectTo: 'account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

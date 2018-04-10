import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpComponent } from './op.component';
import { OpaComponent } from './opa/opa.component';

const routes: Routes = [
  { path: '', component: OpComponent },
  { path: 'opa', component: OpaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpRoutingModule { }

export const routedComponents = [OpComponent];

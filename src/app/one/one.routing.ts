import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one.component';
import { TwoComponent } from './two/two.component';


const routes: Routes = [

    { path: '', component: OneComponent},
    { path: 'two', component: TwoComponent},
    { path: '**', redirectTo: 'two' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OneRoutingModule { }

export const routedComponents = [OneComponent];
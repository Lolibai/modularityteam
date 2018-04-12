import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaborationComponent } from '../colaboration/colaboration.component';
import {UserComponent} from './user.component';


const routes: Routes = [

    { path: '', component: ColaborationComponent},
    { path: 'UserComponent', component: UserComponent},
    { path: '**', redirectTo: 'UserComponent' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OneRoutingModule { }

export const routedComponents = [ColaborationComponent];
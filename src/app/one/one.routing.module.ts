

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneComponent } from './one.component';
import { OneModule } from './one.module';

const routes: Routes = [
    {
        path: '', component: OneComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OneRoutingModule { }

export const routedComponents = [OneComponent];
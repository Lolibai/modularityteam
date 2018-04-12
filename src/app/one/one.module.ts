import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { OneRoutingModule } from './one.routing';
import { TwoComponent } from './two/two.component';


@NgModule({
  imports: [
    CommonModule,
    OneRoutingModule
  ],
  declarations: [OneComponent, TwoComponent]
})
export class OneModule { }

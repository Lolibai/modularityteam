import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpComponent } from './op.component';
import { OpRoutingModule } from './op.routing';
import { OpaComponent } from './opa/opa.component';

@NgModule({
  imports: [
    CommonModule,
    OpRoutingModule
  ],
  declarations: [OpComponent, OpaComponent]
})
export class OpModule { }

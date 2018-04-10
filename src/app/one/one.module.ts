import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { OneComponent } from './one.component';
import { OneRoutingModule } from './one.routing';

  
@NgModule({
    imports: [
      CommonModule,
      OneRoutingModule
    ],
    declarations: [OneComponent]
  })
  export class OneModule {} 
  
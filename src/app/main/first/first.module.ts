import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FmsComponent } from './fms/fms.component';
import { SlideComponent } from './slide/slide.component';

import { PlanComponent } from './plan/plan.component';



@NgModule({
  declarations: [
   
   
    FmsComponent,
    SlideComponent,
 
    PlanComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [PlanComponent,FmsComponent,SlideComponent]  
})
export class FirstModule { }

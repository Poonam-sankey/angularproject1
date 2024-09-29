import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review/review.component';
import { AdvfeaturesComponent } from './advfeatures/advfeatures.component';




@NgModule({
  declarations: [
    ReviewComponent,
    AdvfeaturesComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [AdvfeaturesComponent,ReviewComponent] 
  
})
export class SecondModule { }

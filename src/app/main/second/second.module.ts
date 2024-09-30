import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewComponent } from './review/review.component';
import { AdvfeaturesComponent } from './advfeatures/advfeatures.component';
import { BookDemoComponent } from './book-demo/book-demo.component';




@NgModule({
  declarations: [
    ReviewComponent,
    AdvfeaturesComponent,
    BookDemoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [AdvfeaturesComponent,ReviewComponent,BookDemoComponent] 
  
})
export class SecondModule { }

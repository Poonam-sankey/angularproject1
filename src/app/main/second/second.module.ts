import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvfeaturesComponent } from './advfeatures/advfeatures.component';
import { ReviewComponent } from './review/review.component';
import { SecondComponent } from './second/second.component';



@NgModule({
  declarations: [
    AdvfeaturesComponent,
    ReviewComponent,
    SecondComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecondModule { }

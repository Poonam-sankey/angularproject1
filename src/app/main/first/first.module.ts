import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { FmsComponent } from './fms/fms.component';
import { SlideComponent } from './slide/slide.component';
import { GraphComponent } from './graph/graph.component';
import { PlanComponent } from './plan/plan.component';
import { FirstComponent } from './first/first.component';



@NgModule({
  declarations: [
    StartComponent,
    HorizontalComponent,
    FmsComponent,
    SlideComponent,
    GraphComponent,
    PlanComponent,
    FirstComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FirstModule { }

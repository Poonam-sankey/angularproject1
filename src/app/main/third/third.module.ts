import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ThirdComponent } from './third/third.component';



@NgModule({
  declarations: [
    ContactComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThirdModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  img_url = '/assets/images/lane.svg'
  showAlert() {
    alert("Thank you for getting started! We will guide you through the process.");
  }

}
// src\assets\images\lane.svg
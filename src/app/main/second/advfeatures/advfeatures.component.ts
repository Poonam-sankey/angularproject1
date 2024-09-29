import { Component } from '@angular/core';

@Component({
  selector: 'app-advfeatures',
  templateUrl: './advfeatures.component.html',
  styleUrl: './advfeatures.component.css'
})
export class AdvfeaturesComponent {
  img_url="/assets/images/graph.svg"

  cards = [
    {
      icon: '🛣️',
      title: 'Route Optimisation',
      description: 'Maximize efficiency with real-time traffic updates and fuel saving'
    },
    {
      icon: '🚗',
      title: 'Driver Behaviour Monitoring',
      description: 'Improve driver behaviour analysis with real-time safety and resource costs'
    },
    {
      icon: '🔧',
      title: 'Vehicle Health Monitoring',
      description: 'Reduce Downtime with preventive maintenance alerts and diagnostics'
    }
    
  ];

  activeIndex = 1;

  moveLeft() {
    this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
  }

  moveRight() {
    this.activeIndex = (this.activeIndex + 1) % this.cards.length;
  }
}

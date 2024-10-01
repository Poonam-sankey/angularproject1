import { Component } from '@angular/core';


@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  hoveredCard: number | null = null;  // To store which card is currently hovered

  // Function to handle mouse enter
  onMouseEnter(cardIndex: number): void {
    this.hoveredCard = cardIndex;  // Set the card index being hovered
  }

  // Function to handle mouse leave
  onMouseLeave(): void {
    this.hoveredCard = null;  // Reset the hovered card when the mouse leaves
  }
}

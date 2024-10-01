import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  testimonials = [
    {
      name: 'Divya Sharma | Fleet Manager | GreenLine Logistics',
      stars: 5,
      content: 'Implementing the FleetEdge solution has been a game-changer for our operations. Savings on fuel, reduced idling, and unauthorized stops have had a significant impact on our bottom line. The seamless reporting features have saved our team countless hours, allowing us to focus on expanding our business. Plus, the additional dispatched jobs have opened up new revenue streams we hadn’t even anticipated.',
      img: 'assets/images/testimonial1.jpg' // Path to the image
    },
    {
      name: 'Rohit Sharma | Fleet Manager | GreenLine Logistics',
      stars: 5,
      content: 'Implementing the FleetEdge solution has been a game-changer for our operations. Savings on fuel, reduced idling, and unauthorized stops have had a significant impact on our bottom line. The seamless reporting features have saved our team countless hours, allowing us to focus on expanding our business. Plus, the additional dispatched jobs have opened up new revenue streams we hadn’t even anticipated.',
      img: 'assets/images/testimonial2.jpg' // Path to the image
    },
    {
      name: 'Sweety Mandana | Fleet Manager | GreenLine Logistics',
      stars: 4,
      content: 'Implementing the FleetEdge solution has been a game-changer for our operations. Savings on fuel, reduced idling, and unauthorized stops have had a significant impact on our bottom line. The seamless reporting features have saved our team countless hours, allowing us to focus on expanding our business. Plus, the additional dispatched jobs have opened up new revenue streams we hadn’t even anticipated.',
      img: 'assets/images/testimonial3.jpg' // Path to the image
    },
    {
      name: 'Sweety Mandana | Fleet Manager | GreenLine Logistics',
      stars: 4,
      content: 'Implementing the FleetEdge solution has been a game-changer for our operations. Savings on fuel, reduced idling, and unauthorized stops have had a significant impact on our bottom line. The seamless reporting features have saved our team countless hours, allowing us to focus on expanding our business. Plus, the additional dispatched jobs have opened up new revenue streams we hadn’t even anticipated.',
      img: 'assets/images/testimonial3.jpg' // Path to the image
    },
    {
      name: 'Divya Sharma | Fleet Manager | GreenLine Logistics',
      stars: 5,
      content: 'Implementing the FleetEdge solution has been a game-changer for our operations. Savings on fuel, reduced idling, and unauthorized stops have had a significant impact on our bottom line. The seamless reporting features have saved our team countless hours, allowing us to focus on expanding our business. Plus, the additional dispatched jobs have opened up new revenue streams we hadn’t even anticipated.',
      img: 'assets/images/testimonial1.jpg' // Path to the image
    },
    {
      name: 'Rohit Sharma | Fleet Manager | GreenLine Logistics',
      stars: 5,
      content: 'Implementing the FleetEdge solution has been a game-changer for our operations. Savings on fuel, reduced idling, and unauthorized stops have had a significant impact on our bottom line. The seamless reporting features have saved our team countless hours, allowing us to focus on expanding our business. Plus, the additional dispatched jobs have opened up new revenue streams we hadn’t even anticipated.',
      img: 'assets/images/testimonial2.jpg' // Path to the image
    },
    
  ];

  currentTestimonialIndex = 0;
  itemsPerPage = 3; // Number of testimonials to show at a time

  // Handle left arrow click
  onLeftArrowClick() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex === 0) 
      ? Math.max(0, this.testimonials.length - this.itemsPerPage) 
      : this.currentTestimonialIndex - this.itemsPerPage;
  }

  // Handle right arrow click
  onRightArrowClick() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + this.itemsPerPage >= this.testimonials.length)
      ? 0
      : this.currentTestimonialIndex + this.itemsPerPage;
  }

  // Get current testimonials
  get currentTestimonials() {
    return this.testimonials.slice(this.currentTestimonialIndex, this.currentTestimonialIndex + this.itemsPerPage);
  }
}

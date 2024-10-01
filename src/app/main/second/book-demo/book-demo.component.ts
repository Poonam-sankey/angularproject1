import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-demo',
  templateUrl: './book-demo.component.html',
  styleUrl: './book-demo.component.css'
})
export class BookDemoComponent{

    buttonText: string = 'Book a Demo';
 
  @Output() bookClicked: EventEmitter<void> = new EventEmitter<void>();
 
  onButtonClick() {
    this.bookClicked.emit();  // Emit the event when the button is clicked
  }
}

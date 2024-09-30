import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-book-demo',
  templateUrl: './book-demo.component.html',
  styleUrl: './book-demo.component.css'
})
export class BookDemoComponent{

    @Input() buttonText: string = 'Book a Demo';
}

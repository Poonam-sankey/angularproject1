import { Component } from '@angular/core';
import { BookService } from '../Services/book.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [BookService]
})
export class HeaderComponent {
    

  constructor( private subBook:BookService)
  {

  }
  OnBookClicked()
  {
    this.subBook. OnBookClicked();
  }
}

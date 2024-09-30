import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  navItems = ['Home', 'Features', 'Pricing', 'Case Studies', 'Contact'];
  activeIndex = 0;

  @ViewChild('underline') underlineElement!: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.updateUnderlinePosition();
  }

  setActive(index: number): void {
    this.activeIndex = index;
    this.updateUnderlinePosition();
  }
  // Helper method to convert nav item name to router link path
  getRouterLink(item: string): string {
    return `/${item.toLowerCase().replace(/ /g, '-')}`;
  }

  private updateUnderlinePosition(): void {
    const navItemsElements = this.el.nativeElement.querySelectorAll('.nav-item');
    const activeItem = navItemsElements[this.activeIndex] as HTMLElement;
    if (activeItem && this.underlineElement) {
      this.underlineElement.nativeElement.style.left = `${activeItem.offsetLeft}px`;
      this.underlineElement.nativeElement.style.width = `${activeItem.offsetWidth}px`;
    }
  }
}

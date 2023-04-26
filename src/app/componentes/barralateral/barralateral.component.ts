import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-barralateral',
  templateUrl: './barralateral.component.html',
  styleUrls: ['./barralateral.component.css']
})
export class BarralateralComponent {
  isFixed = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event:Event) {
    if (window.pageYOffset > 415) {
      this.isFixed = true;
    } else { 
      this.isFixed = false;
    }
  }
}

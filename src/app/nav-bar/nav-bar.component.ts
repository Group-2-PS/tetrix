import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showMobileMenu: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  showSideMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
}

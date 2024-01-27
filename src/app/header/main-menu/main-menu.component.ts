import { Component } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  mainMenuItems: string[] = ['Home', 'Products', 'Sales', 'New Arrival', 'Contact'];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  userSearchTheme = 'Search user';
  userThemeDescription = 'Search a user using its handle.';
  userSearchImage = 'assets/images/Weapon-Armor_5Pack.png';
  shipSearchTheme = 'Search ship';
  shipThemeDescription = 'Search information for the desired ship.';
  shipSearchImage = 'assets/images/ship.jpg';
  organizationSearchTheme = 'Search organization';
  organizationThemeDescription = 'Search information for the desired organization.';
  organizationSearchImage = 'assets/images/organizations.png';
}

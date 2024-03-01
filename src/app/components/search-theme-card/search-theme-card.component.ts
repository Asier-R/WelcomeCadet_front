import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-theme-card',
  standalone: true,
  imports: [],
  templateUrl: './search-theme-card.component.html',
  styleUrl: './search-theme-card.component.css'
})
export class SearchThemeCardComponent {

  @Input() theme = '';
  @Input() description = '';
  @Input() image = '';

}

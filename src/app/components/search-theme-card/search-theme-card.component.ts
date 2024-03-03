import { Component, Input } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-search-theme-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-theme-card.component.html',
  styleUrl: './search-theme-card.component.css'
})
export class SearchThemeCardComponent {

  @Input() theme = '';
  @Input() description = '';
  @Input() image = '';
  @Input() link = '';
  
}

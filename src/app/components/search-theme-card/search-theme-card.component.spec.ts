import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchThemeCardComponent } from './search-theme-card.component';

describe('SearchThemeCardComponent', () => {
  let component: SearchThemeCardComponent;
  let fixture: ComponentFixture<SearchThemeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchThemeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchThemeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

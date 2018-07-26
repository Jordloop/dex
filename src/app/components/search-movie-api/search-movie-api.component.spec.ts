import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieApiComponent } from './search-movie-api.component';

describe('SearchMovieApiComponent', () => {
  let component: SearchMovieApiComponent;
  let fixture: ComponentFixture<SearchMovieApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

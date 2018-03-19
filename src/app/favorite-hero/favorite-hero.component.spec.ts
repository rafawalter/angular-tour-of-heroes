import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHeroComponent } from './favorite-hero.component';

describe('FavoriteHeroComponent', () => {
  let component: FavoriteHeroComponent;
  let fixture: ComponentFixture<FavoriteHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFeaturesComponent } from './show-all-features.component';

describe('ShowAllFeaturesComponent', () => {
  let component: ShowAllFeaturesComponent;
  let fixture: ComponentFixture<ShowAllFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllExperiencesComponent } from './show-all-experiences.component';

describe('ShowAllExperiencesComponent', () => {
  let component: ShowAllExperiencesComponent;
  let fixture: ComponentFixture<ShowAllExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

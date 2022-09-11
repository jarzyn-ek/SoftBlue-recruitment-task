import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceShortComponent } from './experience-short.component';

describe('ExperienceShortComponent', () => {
  let component: ExperienceShortComponent;
  let fixture: ComponentFixture<ExperienceShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

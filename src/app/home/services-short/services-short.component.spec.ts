import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesShortComponent } from './services-short.component';

describe('ServicesShortComponent', () => {
  let component: ServicesShortComponent;
  let fixture: ComponentFixture<ServicesShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

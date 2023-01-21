import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOneComponent } from './car-one.component';

describe('CarOneComponent', () => {
  let component: CarOneComponent;
  let fixture: ComponentFixture<CarOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

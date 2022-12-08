import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesInfoComponent } from './phones-info.component';

describe('PhonesInfoComponent', () => {
  let component: PhonesInfoComponent;
  let fixture: ComponentFixture<PhonesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

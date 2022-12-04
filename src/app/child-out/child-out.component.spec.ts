import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOutComponent } from './child-out.component';

describe('ChildOutComponent', () => {
  let component: ChildOutComponent;
  let fixture: ComponentFixture<ChildOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

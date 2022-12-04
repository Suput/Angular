import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSetComponent } from './child-set.component';

describe('ChildSetComponent', () => {
  let component: ChildSetComponent;
  let fixture: ComponentFixture<ChildSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

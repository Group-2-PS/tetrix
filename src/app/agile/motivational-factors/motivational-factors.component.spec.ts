import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalFactorsComponent } from './motivational-factors.component';

describe('MotivationalFactorsComponent', () => {
  let component: MotivationalFactorsComponent;
  let fixture: ComponentFixture<MotivationalFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationalFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationalFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

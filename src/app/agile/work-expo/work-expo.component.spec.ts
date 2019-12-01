import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpoComponent } from './work-expo.component';

describe('WorkExpoComponent', () => {
  let component: WorkExpoComponent;
  let fixture: ComponentFixture<WorkExpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkExpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

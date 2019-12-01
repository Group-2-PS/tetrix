import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SailboatComponent } from './sailboat.component';

describe('SailboatComponent', () => {
  let component: SailboatComponent;
  let fixture: ComponentFixture<SailboatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SailboatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SailboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

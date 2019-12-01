import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NikoNikoComponent } from './niko-niko.component';

describe('NikoNikoComponent', () => {
  let component: NikoNikoComponent;
  let fixture: ComponentFixture<NikoNikoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NikoNikoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NikoNikoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

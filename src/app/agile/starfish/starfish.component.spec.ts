import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarfishComponent } from './starfish.component';

describe('StarfishComponent', () => {
  let component: StarfishComponent;
  let fixture: ComponentFixture<StarfishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarfishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarfishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

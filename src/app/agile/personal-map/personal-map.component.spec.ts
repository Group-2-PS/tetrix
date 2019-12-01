import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalMapComponent } from './personal-map.component';

describe('PersonalMapComponent', () => {
  let component: PersonalMapComponent;
  let fixture: ComponentFixture<PersonalMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

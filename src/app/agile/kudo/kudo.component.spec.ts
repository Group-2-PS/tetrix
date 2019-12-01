import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KudoComponent } from './kudo.component';

describe('KudoComponent', () => {
  let component: KudoComponent;
  let fixture: ComponentFixture<KudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

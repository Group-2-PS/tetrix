import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickHereComponent } from './click-here.component';

describe('ClickHereComponent', () => {
  let component: ClickHereComponent;
  let fixture: ComponentFixture<ClickHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

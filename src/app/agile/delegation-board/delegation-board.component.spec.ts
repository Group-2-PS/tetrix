import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationBoardComponent } from './delegation-board.component';

describe('DelegationBoardComponent', () => {
  let component: DelegationBoardComponent;
  let fixture: ComponentFixture<DelegationBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

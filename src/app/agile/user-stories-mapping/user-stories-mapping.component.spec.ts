import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStoriesMappingComponent } from './user-stories-mapping.component';

describe('UserStoriesMappingComponent', () => {
  let component: UserStoriesMappingComponent;
  let fixture: ComponentFixture<UserStoriesMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStoriesMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStoriesMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

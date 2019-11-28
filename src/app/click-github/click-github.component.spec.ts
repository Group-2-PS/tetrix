import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickGithubComponent } from './click-github.component';

describe('ClickGithubComponent', () => {
  let component: ClickGithubComponent;
  let fixture: ComponentFixture<ClickGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

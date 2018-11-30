import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersummaryComponent } from './careersummary.component';

describe('CareersummaryComponent', () => {
  let component: CareersummaryComponent;
  let fixture: ComponentFixture<CareersummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgColorScaleComponent } from './ng-color-scale.component';

describe('NgColorScaleComponent', () => {
  let component: NgColorScaleComponent;
  let fixture: ComponentFixture<NgColorScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgColorScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgColorScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSpectrumScaleComponent } from './ng-spectrum-scale.component';

describe('NgSpectrumScaleComponent', () => {
  let component: NgSpectrumScaleComponent;
  let fixture: ComponentFixture<NgSpectrumScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSpectrumScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSpectrumScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

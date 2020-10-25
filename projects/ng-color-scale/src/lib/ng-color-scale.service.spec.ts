import { TestBed } from '@angular/core/testing';

import { NgColorScaleService } from './ng-color-scale.service';

describe('NgColorScaleService', () => {
  let service: NgColorScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgColorScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

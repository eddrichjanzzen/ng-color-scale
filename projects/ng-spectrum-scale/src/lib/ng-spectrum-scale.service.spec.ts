import { TestBed } from '@angular/core/testing';

import { NgSpectrumScaleService } from './ng-spectrum-scale.service';

describe('NgSpectrumScaleService', () => {
  let service: NgSpectrumScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgSpectrumScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

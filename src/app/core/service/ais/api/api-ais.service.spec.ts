import { TestBed } from '@angular/core/testing';

import { ApiAisService } from './api-ais.service';

describe('ApiAisService', () => {
  let service: ApiAisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

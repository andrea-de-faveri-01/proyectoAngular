import { TestBed } from '@angular/core/testing';

import { ApiDevsService } from './api-devs.service';

describe('ApiDevsService', () => {
  let service: ApiDevsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDevsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OauthenService } from './oauthen.service';

describe('OauthenService', () => {
  let service: OauthenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OauthenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

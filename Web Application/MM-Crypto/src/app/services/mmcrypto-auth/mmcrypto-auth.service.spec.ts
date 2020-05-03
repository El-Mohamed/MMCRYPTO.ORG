import { TestBed } from '@angular/core/testing';

import { MmcryptoAuthService } from './mmcrypto-auth.service';

describe('MmcryptoAuthService', () => {
  let service: MmcryptoAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmcryptoAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

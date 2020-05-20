import { TestBed } from '@angular/core/testing';

import { MmCryptoAuthService } from './mm-crypto-auth.service';

describe('MmcryptoAuthService', () => {
  let service: MmCryptoAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmCryptoAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

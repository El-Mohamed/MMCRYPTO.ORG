import { TestBed } from '@angular/core/testing';

import { MmCryptoService } from './mm-crypto.service';

describe('MmcryptoService', () => {
  let service: MmCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmCryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

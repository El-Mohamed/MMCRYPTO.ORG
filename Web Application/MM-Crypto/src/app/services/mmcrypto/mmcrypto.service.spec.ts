import { TestBed } from '@angular/core/testing';

import { MmcryptoService } from './mmcrypto.service';

describe('MmcryptoService', () => {
  let service: MmcryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmcryptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

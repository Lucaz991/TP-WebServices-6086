import { TestBed } from '@angular/core/testing';

import { PuntoE } from './punto-e';

describe('PuntoE', () => {
  let service: PuntoE;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

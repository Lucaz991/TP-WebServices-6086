import { TestBed } from '@angular/core/testing';

import { PuntoD } from './punto-d';

describe('PuntoD', () => {
  let service: PuntoD;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoD);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

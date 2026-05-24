import { TestBed } from '@angular/core/testing';

import { PuntoB } from './punto-b';

describe('PuntoB', () => {
  let service: PuntoB;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoB);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

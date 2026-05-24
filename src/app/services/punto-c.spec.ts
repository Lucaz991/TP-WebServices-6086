import { TestBed } from '@angular/core/testing';

import { PuntoC } from './punto-c';

describe('PuntoC', () => {
  let service: PuntoC;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntoC);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

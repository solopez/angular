import { TestBed } from '@angular/core/testing';

import { Ej9Service } from './ej9.service';

describe('Ej9Service', () => {
  let service: Ej9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ej9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

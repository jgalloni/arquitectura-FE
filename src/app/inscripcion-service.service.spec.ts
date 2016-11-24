/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InscripcionServiceService } from './inscripcion-service.service';

describe('Service: InscripcionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InscripcionServiceService]
    });
  });

  it('should ...', inject([InscripcionServiceService], (service: InscripcionServiceService) => {
    expect(service).toBeTruthy();
  }));
});

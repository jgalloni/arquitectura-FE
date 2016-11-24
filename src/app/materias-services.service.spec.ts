/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MateriasServicesService } from './materias-services.service';

describe('Service: MateriasServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MateriasServicesService]
    });
  });

  it('should ...', inject([MateriasServicesService], (service: MateriasServicesService) => {
    expect(service).toBeTruthy();
  }));
});

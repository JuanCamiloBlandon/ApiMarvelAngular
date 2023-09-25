import { TestBed } from '@angular/core/testing';

import { VentanaEmergenteServiceService } from './ventana-emergente-service.service';

describe('VentanaEmergenteServiceService', () => {
  let service: VentanaEmergenteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentanaEmergenteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

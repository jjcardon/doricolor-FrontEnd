import { TestBed } from '@angular/core/testing';

import { ShipmentReportService } from './shipment-report.service';

describe('ShipmentReportService', () => {
  let service: ShipmentReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

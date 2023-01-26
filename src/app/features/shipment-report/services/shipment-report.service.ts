import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShipmentReport } from 'src/app/core/models/shipment-report/shipment-report.model';

@Injectable({
  providedIn: 'root'
})
export class ShipmentReportService {

  constructor(private httpClient: HttpClient) { }

  getShipmentReport(): Observable<ShipmentReport> {
    return this.httpClient.get<ShipmentReport>(`https://mocki.io/v1/2c65f042-e9ac-4733-a7db-a1039c00d8f5`);
  }

}

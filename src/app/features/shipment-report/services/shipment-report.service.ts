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
    return this.httpClient.get<ShipmentReport>(`https://lykc2xcize.execute-api.us-east-1.amazonaws.com/prod`);
  }
}

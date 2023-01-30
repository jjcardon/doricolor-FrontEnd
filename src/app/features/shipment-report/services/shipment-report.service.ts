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
    return this.httpClient.get<ShipmentReport>(`https://fcklzsmp20.execute-api.us-east-2.amazonaws.com/dev`);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ShipmentReportRoutingModule } from './shipment-report-routing.module';
import { ShipmentReportComponent } from './pages/shipment-report/shipment-report.component';
import { ExportAsModule } from 'ngx-export-as';


@NgModule({
  declarations: [
    ShipmentReportComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ShipmentReportRoutingModule,
    ExportAsModule
  ]
})
export class ShipmentReportModule { }

import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShipmentReport, ShippingReport } from 'src/app/core/models/shipment-report/shipment-report.model';
import { ShipmentReportService } from '../../services/shipment-report.service';
import { MatPaginatorIntl, PageEvent } from "@angular/material/paginator";

@Component({
  selector: 'app-shipment-report',
  templateUrl: './shipment-report.component.html',
  styleUrls: ['./shipment-report.component.scss']
})
export class ShipmentReportComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<ShippingReport>();

  displayedColumns = [
    'trackingNumber',
    'city',
    'customer',
    'address',
    'phoneNumber',
    'unit',
    'actualWeight',
    'weightVolume',
    'shipping',
    'observation',
    'declaredValue'
  ]

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private shipmentReportService: ShipmentReportService, private matPaginatorIntl: MatPaginatorIntl) {
    this.GetShipmentReport();
    this.matPaginatorIntl.itemsPerPageLabel = 'Registros por página';
  }

  GetShipmentReport() {
    this.shipmentReportService.getShipmentReport().subscribe((resp) => {
      this.dataSource.data = resp.shippingReport
    });
  }

}

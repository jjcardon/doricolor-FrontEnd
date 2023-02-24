import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShippingReport } from 'src/app/core/models/shipment-report/shipment-report.model';
import { ShipmentReportService } from '../../services/shipment-report.service';
import { MatPaginatorIntl, PageEvent } from "@angular/material/paginator";
import { DatePipe } from '@angular/common';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-shipment-report',
  templateUrl: './shipment-report.component.html',
  styleUrls: ['./shipment-report.component.scss']
})
export class ShipmentReportComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  existDataToExport: boolean = false;
  isLoader: boolean = false;
  isNullInfo: boolean = false;
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
    'declaredValue',
    'shipping',
    'observation'
  ]
  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', 
    elementIdOrContent: 'tableShipmentReport'
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private shipmentReportService: ShipmentReportService, private matPaginatorIntl: MatPaginatorIntl,
    private exportAsService: ExportAsService, private datePipe: DatePipe) {
    this.GetShipmentReport();
    this.matPaginatorIntl.itemsPerPageLabel = 'Registros por página';
  }

  GetShipmentReport() {
    this.shipmentReportService.getShipmentReport().subscribe((resp) => {
        this.existDataToExport = true
        this.isLoader = true;      
        this.dataSource.data = resp.shippingReport
        resp.status === 203 ? this.isNullInfo = true : false;
    });
  }

  exportToCSV() {   
    const now = Date.now();
    const formattedDate = this.datePipe.transform(now, 'ddMMyyyyHHmmss');
    const fileName = `TCC${formattedDate}`; 
    this.exportAsService.save(this.exportAsConfig, fileName ).subscribe(() => {});
  }

}

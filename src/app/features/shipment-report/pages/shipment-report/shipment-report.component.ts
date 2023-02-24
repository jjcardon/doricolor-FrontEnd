import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ShipmentReport, ShippingReport } from 'src/app/core/models/shipment-report/shipment-report.model';
import { ShipmentReportService } from '../../services/shipment-report.service';
import { MatPaginatorIntl, PageEvent } from "@angular/material/paginator";
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shipment-report',
  templateUrl: './shipment-report.component.html',
  styleUrls: ['./shipment-report.component.scss']
})
export class ShipmentReportComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  existDataToExport: boolean = false;
  formattedDatePrint: string = '';
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private shipmentReportService: ShipmentReportService, private matPaginatorIntl: MatPaginatorIntl,
    private dataPipe: DatePipe) {
    this.GetShipmentReport();
    this.matPaginatorIntl.itemsPerPageLabel = 'Registros por página';
  }

  GetShipmentReport() {
    this.shipmentReportService.getShipmentReport().subscribe((resp) => {
      resp.status === 200 ? this.existDataToExport = true : false;
      this.dataSource.data = resp.shippingReport
    });
  }

  exportToCSV() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: '',
      useBom: true,
      noDownload: false,
      headers: [
        'Guia',
        'CiudadDestino',
        'Destinatario',
        'Direccion',
        'Telefono',
        'Unidades',
        'PesoReal',
        'PesoVolumen',
        'ValorDeclarado',
        'Referencia',
        'Observaciones'
        
      ]
    };
    const now = Date.now();
    this.formattedDatePrint = this.dataPipe.transform(now, 'ddMMYYHHmmss') as string;
    var titleDocument = 'ReporteEnvios-' + this.formattedDatePrint
    new ngxCsv(this.dataSource.data, titleDocument, options);
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipmentReportComponent } from './pages/shipment-report/shipment-report.component';

const routes: Routes = [
  {
    path: '',
    component: ShipmentReportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipmentReportRoutingModule { }

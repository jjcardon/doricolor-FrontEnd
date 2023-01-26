import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./features/home/home-routing.module').then(m => m.HomeRoutingModule) },
  { 
    path: 'shipment-report', 
    loadChildren: () => import('./features/shipment-report/shipment-report.module').then(m => m.ShipmentReportModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

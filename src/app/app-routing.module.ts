import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from '../app/module/datatable/datatable.component';
import { AdminComponent } from './module/admin/admin.component';



const routes: Routes = [
  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: 'library', component: DatatableComponent },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
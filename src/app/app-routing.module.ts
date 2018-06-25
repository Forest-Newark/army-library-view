import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from '../app/module/datatable/datatable.component';
import { AdminComponent } from './module/admin/admin.component';
import { ResourcesComponent } from './module/resources/resources.component';



const routes: Routes = [
  { path: '', redirectTo: '/library', pathMatch: 'full' },
  { path: 'library', component: DatatableComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'resources', component: ResourcesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
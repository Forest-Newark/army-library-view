import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// App Components
import { NavbarComponent } from '../app/core/componet/navbar/navbar.component';
import { DatatableComponent } from '../app/module/datatable/datatable.component';
import { AdminComponent } from '../app/module/admin/admin.component';

// App Services
import { ApiService } from '../app/core/service/api.service';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    HttpClientModule,
    FileUploadModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

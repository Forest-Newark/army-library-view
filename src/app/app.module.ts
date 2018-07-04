import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// App Components
import { NavbarComponent } from '../app/core/componet/navbar/navbar.component';
import { DatatableComponent } from '../app/module/datatable/datatable.component';
import { AdminComponent } from '../app/module/admin/admin.component';
import { ResourcesComponent } from '../app/module/resources/resources.component';

// App Services
import { ApiService } from '../app/core/service/api.service';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { GrowlModule } from 'primeng/growl';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    DatatableComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MenubarModule,
    HttpClientModule,
    FileUploadModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    GrowlModule,
    DialogModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

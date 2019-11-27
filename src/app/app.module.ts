import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Added By JD
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveEmployeeComponent } from './save-employee/save-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveEmployeeComponent,
    ShowEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    ButtonModule,
    InputTextareaModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

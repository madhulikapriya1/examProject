import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { FormGridComponent } from './form-grid/form-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TableModule } from 'primeng/table';
import { FormsModule } from "@angular/forms";
import { EmployeeService } from "./employee.service";
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea'; 
import {ButtonModule} from 'primeng/button'; 

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    FormGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    TableModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule
  ],
  providers: [EmployeeService, HttpModule,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

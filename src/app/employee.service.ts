import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Employee } from './employee.interface';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 employeeValue:Employee;

 @Output() change: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }
  
    getEmployee() : Observable<any> {
      return this.http.get('assets/emplooyee.json');
    }
    getnewEmployee(){
      
         this.change.emit(this.employeeValue);
    }
   getEmployeeRow(rowData){
      this.row=rowData;
      this.change.emit(rowData);
     }
}


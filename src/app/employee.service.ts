import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.interface';
import { Response } from '@angular/http';
import {  map } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeeEdited:Employee[];
index=0;
  constructor(private http: HttpClient) { }
  
    getEmployee() : Observable<any> {
      return this.http.get('assets/emplooyee.json');
    }
    getNewEmployee(index){
      return this.employeeEdited;
    }
}

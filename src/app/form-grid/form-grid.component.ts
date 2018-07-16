import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { Employee } from "../employee.interface";
import { EmployeeService } from "../employee.service";
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-form-grid',
  templateUrl: './form-grid.component.html',
  styleUrls: ['./form-grid.component.css']
})
export class FormGridComponent implements OnInit {
  // subscription:Subscription;
   // subscription:Subscription;
  @Input() employeeValue: Employee;
  @Input() employeeDetails: any;
 
  // @Input() employeeDetails: any;
  @Output() newEmployee = new EventEmitter<Employee>();
  editedItem: Employee[];
  editMode:boolean=false;
  name: string;
  skillsSummary: string;
  designation: string;
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
 this.employeeService.change.subscribe( Employee => {
   this.employeeValue = Employee;
 });

     
    if (this.employeeValue === undefined) {
      this.employeeValue = {
        name: 'priya',
        designation: 'tester',
        skillsSummary: 'testing'
      }

    }
    
  }
  onEdit($event) {
  this.editMode=true;
//   this.editedItem = this.employeeService.getNewEmployee(i){
//     newName: this.employeeValue.name,

//   }
  }
       

//   getNewEmployee(){
//     this.newEmployee.emit(this.employeeValue);
//   }

  savingData() {
  this.employeeDetails = this.employeeValue;
 };
       
}

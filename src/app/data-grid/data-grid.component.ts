import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee.interface";

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  cols: any;
  emp: Employee[];
  visible=false;
   employeeValue: Employee;
   rowIndex;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'designation', header: 'Designation' },
      { field: 'skillsSummary', header: 'SkillsSummary' }
    ]
     this.getAnEmployee();
  }
  
  show(i) {
   this.visible=true;
    this.employeeValue = this.emp[i];
  }

  getAnEmployee(){
    this.employeeService.getEmployee().subscribe(data => {
      console.log(data);
      this.emp =data.employee;
    })
  }
showData($event) {
  
    console.log($event);
  }
  
}

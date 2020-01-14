import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [];
  dataFromChild: Employee;
  constructor(private newEmployeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.newEmployeeService.getEmployees();
  }
  handleNofity(eventData: Employee) {
    this.dataFromChild = eventData;
  }
}

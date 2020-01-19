import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import {Router} from '@angular/router';



@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  private nSearchTerm: string;
  get searchTerm(): string {
    return this.nSearchTerm;
  }
  set searchTerm(value: string) {
    this.nSearchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }
  employees: Employee[] = [];
  filteredEmployees: Employee[];
  dataFromChild: Employee;
  constructor(private newEmployeeService: EmployeeService,
              private nRouter: Router) { }

  ngOnInit() {
    this.employees = this.newEmployeeService.getEmployees();
    this.filteredEmployees = this.employees;
  }
  handleNofity(eventData: Employee) {
    this.dataFromChild = eventData;
  }
  onClick(employeeId: number) {
    this.nRouter.navigate(['/employees', employeeId]);
  }
  changeEmployeeNAme() {
    this.employees[0].name = 'Jordan';
    this.filteredEmployees = this.filtereEmployees(this.searchTerm);
  // const newEmployeeArray: Employee[] = Object.assign([], this.employees);
  // newEmployeeArray[0].name = 'Jordan';
  // this.employees = newEmployeeArray;
  }
  onMouseMove() {

  }
  filtereEmployees(searchString: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
}

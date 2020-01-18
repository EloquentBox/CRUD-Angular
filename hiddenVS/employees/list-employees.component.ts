import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import {ActivatedRoute, Router} from '@angular/router';



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
              private nRouter: Router,
              private nRoute: ActivatedRoute) {
    this.employees = this.nRoute.snapshot.data['employeeList'];
    if (this.nRoute.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this.nRoute.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredEmployees = this.employees;
    }
  }
  filtereEmployees(searchString: string) {
    return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  ngOnInit() {
    this.newEmployeeService.getEmployees().subscribe(
      empList => {
        this.employees = empList;
      });
  }
  handleNofity(eventData: Employee) {
    this.dataFromChild = eventData;
  }
  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex(e => e.id === id);
    if (i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
  }
}

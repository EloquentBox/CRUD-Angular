import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Employee} from '../models/employee.models';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  private selectedEmployeeId: number;
  @Input() searchTerm: string;
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();
  confirmDelete = false;
  panelExpanded = true;
constructor(private nRoute: ActivatedRoute,
            private nRouter: Router,
            private nServiceEmployee: EmployeeService) { }

ngOnInit() {
  }
  handleClick() {
  this.notify.emit(this.employee);
  this.selectedEmployeeId = +this.nRoute.snapshot.paramMap.get('id');
  }
  viewEmployee() {
    this.nRouter.navigate(['/employees', this.employee.id], {
      queryParams: {'searchTerm': this.searchTerm}
    });
  }
  editEmployee() {
    this.nRouter.navigate(['/edit', this.employee.id]);
  }
  deleteEmployee() {
    this.nServiceEmployee.deleteEmployee(this.employee.id);
    this.notifyDelete.emit(this.employee.id);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Employee} from '../models/employee.models';
import {ActivatedRoute, Router} from '@angular/router';

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
constructor(private nRoute: ActivatedRoute,
            private nRouter: Router) { }

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
  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName of Object.keys(changes)) {
  //     const change = changes[propName];
  //     const from = JSON.stringify(change.previousValue);
  //     const to = JSON.stringify(change.currentValue);
  //     console.log(propName + 'changed from ' + from + ' to ' + to);
  //   }
  // }

}

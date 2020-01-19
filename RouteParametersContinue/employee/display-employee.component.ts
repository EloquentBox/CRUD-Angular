import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Employee} from '../models/employee.models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  private selectedEmployeeId: number;
constructor(private nRoute: ActivatedRoute) { }

ngOnInit() {
  }
  handleClick() {
  this.notify.emit(this.employee);
  this.selectedEmployeeId = +this.nRoute.snapshot.paramMap.get('id');
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

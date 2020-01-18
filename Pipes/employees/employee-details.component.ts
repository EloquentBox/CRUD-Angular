import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeService} from './employee.service';
import {Employee} from '../models/employee.models';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private nId;
  employee: Employee;
  constructor(private nRoute: ActivatedRoute,
              private  nEmployeeService: EmployeeService,
              private nRouter: Router) {
}

  ngOnInit() {
    this.nRoute.paramMap.subscribe(params => {
      this.nId = +params.get('id');
      this.employee = this.nEmployeeService.getEmployee(this.nId);
    });
  }
  getNextEmployee() {
    if (this.nId < 3) {
      this.nId = this.nId + 1;
    } else {
      this.nId = 1;
    }

    this.nRouter.navigate(['/employees', this.nId]);
  }
}


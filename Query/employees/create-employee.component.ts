import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.models';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm', {static: false}) public createEmployeeForm: NgForm;
  employee: Employee = {
  id: null,
  name: null,
  gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null,
    password: null,
    confirmPassword: null,
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT' },
    { id: 4, name: 'PayRoll' }
  ];
  previewPhoto = false;
  constructor(private newEmployeeService: EmployeeService,
              private newRouter: Router) {}

  ngOnInit() {
  }
  togglePhotoPrev() {
    this.previewPhoto = !this.previewPhoto;
  }
  saveEmployee(): void {
    const newEmployee: Employee = Object.assign({},this.employee)
    this.newEmployeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    this.newRouter.navigate(['list']);
  }

}

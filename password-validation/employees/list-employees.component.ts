import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.models';


@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/logo.jpg',
      password: null,
      confirmPassword: null,
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 12345678,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/logo.jpg',
      password: null,
      confirmPassword: null,

    },
    {
     id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 1222133333,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/logo.jpg',
      password: null,
      confirmPassword: null,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

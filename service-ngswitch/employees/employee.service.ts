import {Injectable} from '@angular/core';
import { Employee } from '../models/employee.models';

@Injectable()

export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
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
  department: '2',
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
  department: '3',
  isActive: false,
  photoPath: 'assets/images/logo.jpg',
  password: null,
  confirmPassword: null,
},
];
  getEmployees(): Employee[] {
    return this.listEmployees;
  }
  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}

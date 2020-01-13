import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR'},
    { id: 3, name: 'IT' },
    { id: 4, name: 'PayRoll' }
  ];
  previewPhoto = false;
  fullName: string;
  email: string;
  phoneNumber: number;
  department: string;
  gender: string;
  contactPreference: string;
  dateOfBirth: any;
  isActive: boolean;
  photoPath: string;
  constructor() { }

  ngOnInit() {
  }
  togglePhotoPrev() {
    this.previewPhoto = !this.previewPhoto;
  }
  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}

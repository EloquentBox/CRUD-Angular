import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Employee} from '../models/employee.models';
import {Observable} from 'rxjs';
import {EmployeeService} from './employee.service';
import {Injectable} from '@angular/core';

@Injectable()

export class EmployeeListResolverService implements Resolve<Employee[]> {
  constructor(private nEmployeeService: EmployeeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[]> {
    return this.nEmployeeService.getEmployees();
  }
}


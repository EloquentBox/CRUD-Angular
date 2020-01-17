import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {CreateEmployeeComponent} from './create-employee.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()

export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if (component.createEmployeeForm.dirty) {
      return confirm('Are you sure you want to discard the changes?');
    }
    return true;
  }
}

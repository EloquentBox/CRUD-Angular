import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule} from 'ngx-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule, Routes} from '@angular/router';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent},
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective

  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TooltipModule, ModalModule]
})
export class AppModule { }

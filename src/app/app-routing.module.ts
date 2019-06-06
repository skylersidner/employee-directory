import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees/list', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EmployeesListComponent },
      { path: 'create', component: EmployeeCreateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

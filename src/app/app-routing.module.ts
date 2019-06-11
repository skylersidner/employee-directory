import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeAddEditComponent } from './employees/employee-add-edit/employee-add-edit.component';
import { EmployeeDataResolverService } from './employees/services/employee-data-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'employees/list', pathMatch: 'full' },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EmployeesListComponent },
      { path: 'add', component: EmployeeAddEditComponent },
      { path: ':id/edit', component: EmployeeAddEditComponent, resolve: { employee: EmployeeDataResolverService } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

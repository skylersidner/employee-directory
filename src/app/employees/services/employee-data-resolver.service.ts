import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataResolverService implements Resolve<EmployeeModel> {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmployeeModel> {
    const id = route.paramMap.get('id');

    return this.employeeService.getEmployee(id).pipe(
      first(),
      map(employee => {
        // TODO: figure out why this code never fires...
        if (employee) {
          return employee;
        } else {
          this.router.navigate(['employees/list']);
        }
      })
    );
  }
}

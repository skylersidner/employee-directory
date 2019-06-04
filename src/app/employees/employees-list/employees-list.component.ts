import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  public employees: EmployeeModel[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    //TODO: move this into a route resolver
    this.employeeService.getEmployees();
    this.employeeService.employees.subscribe(employees => {
      this.employees = employees;
    });
  }

}

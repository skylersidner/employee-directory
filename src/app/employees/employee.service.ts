import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from './models/employee.model';

const employeesStub = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dateAdded: new Date().getTime(),
    title: 'The Poobah',
    imageUrl: '',
    id: '1'
  },
  {
    firstName: 'Tom',
    lastName: 'Cruise',
    dateAdded: new Date().getTime(),
    title: 'The Hunk',
    imageUrl: '',
    id: '2'
  },
  {
    firstName: 'Darth',
    lastName: 'Vader',
    dateAdded: new Date().getTime(),
    title: 'The Father',
    imageUrl: '',
    id: '3'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3000'; //TODO: move this to a config variable
  private employeeUrl = `${this.baseUrl}/employees`;

  public employees: Observable<EmployeeModel[]>;

  constructor(private http: HttpClient) { }

  public getEmployees(): void {
    this.employees = this.http.get<EmployeeModel[]>(this.employeeUrl);
  }

  public createEmployee(employee: EmployeeModel) {
    return this.http.post<EmployeeModel>(this.employeeUrl, employee);
  }
}

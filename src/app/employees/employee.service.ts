import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from './models/employee.model';

const employeesStub = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dateAdded: new Date(),
    title: 'The Poobah',
    imageUrl: '',
    id: '1'
  },
  {
    firstName: 'Tom',
    lastName: 'Cruise',
    dateAdded: new Date(),
    title: 'The Master',
    imageUrl: '',
    id: '2'
  },
  {
    firstName: 'Jeffrey',
    lastName: 'Lebowski',
    dateAdded: new Date(),
    title: 'The Dude',
    imageUrl: '',
    id: '3'
  }
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3000'; //TODO: move this to a config variable
  private employeeUrl = '/employees';

  public employees: Observable<EmployeeModel[]>;

  constructor(private http: HttpClient) { }

  public getEmployees() {
    this.employees = this.http.get<EmployeeModel[]>(`${this.baseUrl}${this.employeeUrl}`);
  }
}

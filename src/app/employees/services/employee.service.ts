import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { map, switchMap } from 'rxjs/operators';

// TODO: set this up for a configuration variable to trigger local data use; probably a shared service?
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

  private baseUrl = 'http://localhost:3000'; // TODO: move this to a config variable
  private employeeUrl = `${this.baseUrl}/employees`;

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.employeeUrl).pipe(
      map((result: EmployeeModel[]) => {
        return result.map((employeeJson: EmployeeModel) => {
          return new EmployeeModel(employeeJson);
        });
      })
    );
  }

  public getEmployee(id: string) {
    return this.http.get<EmployeeModel>(`${this.employeeUrl}/${id}`).pipe(
      map((employeeJson: EmployeeModel) => {
        return new EmployeeModel(employeeJson);
      })
    );
  }

  public createEmployee(employee: EmployeeModel) {
    return this.http.post<EmployeeModel>(this.employeeUrl, employee);
  }

  public updateEmployee(employee: EmployeeModel) {
    return this.http.put<EmployeeModel>(`${this.employeeUrl}/${employee.id}`, employee);
  }
}

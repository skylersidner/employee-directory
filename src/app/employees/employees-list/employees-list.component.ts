import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  public employeesStub = [
    {
      firstName: 'John',
      lastName: 'Doe',
      dateAdded: new Date(),
      title: 'The Poobah'
    },
    {
      firstName: 'Tom',
      lastName: 'Cruise',
      dateAdded: new Date(),
      title: 'The Master'
    },
    {
      firstName: 'Jeffrey',
      lastName: 'Lebowski',
      dateAdded: new Date(),
      title: 'The Dude'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

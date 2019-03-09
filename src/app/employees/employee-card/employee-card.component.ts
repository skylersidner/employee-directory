import { Component, Input, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

  @Input() employee: EmployeeModel;

  constructor() { }

  ngOnInit() {
  }

}

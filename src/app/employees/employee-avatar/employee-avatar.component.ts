import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-avatar',
  templateUrl: './employee-avatar.component.html',
  styleUrls: ['./employee-avatar.component.scss']
})
export class EmployeeAvatarComponent implements OnInit {

  @Input() imageUrl: string;

  constructor() { }

  ngOnInit() {
  }

}

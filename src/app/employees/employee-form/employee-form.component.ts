import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Input() action: string;

  public firstNameFC = new FormControl('', [Validators.required]);
  public lastNameFC = new FormControl('', [Validators.required]);
  public titleFC = new FormControl('', [Validators.required]);

  public employeeInputForm = new FormGroup({
    firstName: this.firstNameFC,
    lastName: this.lastNameFC,
    title: this.titleFC
  });

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.valid) {
      this.employeeService.createEmployee(form.value).subscribe(response => this.router.navigate(['employees/list']));
    }
  }

}

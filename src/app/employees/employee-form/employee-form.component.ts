import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { EmployeeModel } from '../models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  @Input() employee: EmployeeModel;

  public action: string;

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
    if (this.employee) {
      this.action = 'Update';
      this.initializeFormValues();
    } else {
      this.action = 'Create';
    }
  }

  onSubmit(form) {
    if (form.valid) {
      // TODO: add error handling for these
      if (this.action === 'Create') {
        this.employeeService.createEmployee(form.value).subscribe(response => this.router.navigate(['employees/list']));
      } else { // TODO: navigate to employee-detail view instead
        const updatedEmployee = Object.assign({}, this.employee, form.value);
        this.employeeService.updateEmployee(updatedEmployee).subscribe(response => this.router.navigate(['employees/list']));
      }

    }
  }

  initializeFormValues() {
    this.firstNameFC.patchValue(this.employee.firstName);
    this.lastNameFC.patchValue(this.employee.lastName);
    this.titleFC.patchValue(this.employee.title);
  }

}

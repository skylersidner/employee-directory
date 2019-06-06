import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    firstNameControl: this.firstNameFC,
    lastNameControl: this.lastNameFC,
    titleControl: this.titleFC
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('Submitted: ', form);
  }

}

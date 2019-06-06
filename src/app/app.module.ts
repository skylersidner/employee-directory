import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule, MatFormField, MatInputModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MenuComponent,
    EmployeesListComponent,
    EmployeeCardComponent,
    EmployeeCreateComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

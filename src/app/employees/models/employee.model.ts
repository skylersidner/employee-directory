export class EmployeeModel {

  imageUrl: string;
  firstName: string;
  lastName: string;
  dateAdded: number;
  title: string;
  id: string;

  constructor(employeeJson: object) {
    Object.keys(employeeJson).map( key => {
      this[key] = employeeJson[key];
    });
  }

  getFullName = (): string => {
    return `${this.firstName} ${this.lastName}`;
  }
}

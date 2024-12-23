import { Component } from '@angular/core';
import { Employee } from '../employeeform_Model';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {
  employees: Employee[] = [];
  newEmployee: Employee = { id: 0, name: '', salary: 0, fieldOfWork: '' };
  addEmployee() {
  
  if (this.newEmployee.name && this.newEmployee.salary > 0 &&
  this.newEmployee.fieldOfWork) {
  this.employees.push({ ...this.newEmployee });
  this.resetForm();
  }
  }
  deleteEmployee(id: number) {
  this.employees = this.employees.filter(employee => employee.id !==
  id);
  }
  resetForm() {
  this.newEmployee = { id: 0, name: '', salary: 0, fieldOfWork: '' };
  }
}
this.resetForm();
deleteitems(Itemid: number) {
  this.items = this.items.filter(Itemid=> newitems.Itemid !== Itemid);
  }
  resetForm() {
  this.newitems = { Itemid: 0, Quantity:0, Additem: 0 };
  }
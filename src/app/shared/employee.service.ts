import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Employee} from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeelist: Employee[];

  employeemodel: Employee = {
    firstname:"",
    lastname:"",
    age: 0,
    id: 1
  };

  constructor() { }


  getList(){
    this.employeelist = [
      {id:1,firstname:"firstname 1",lastname:"lastname 1",age:23},
      {id:1,firstname:"firstname 2",lastname:"lastname 2",age:53},
      {id:1,firstname:"firstname 3",lastname:"lastname 3",age:13}
    ];
    return of(this.employeelist);
  }

  insertEmployee(emp){

  }
}

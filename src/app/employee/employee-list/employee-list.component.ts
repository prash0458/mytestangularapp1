import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import {EmployeeService} from '../../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist : Employee[];

  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist(){ 
    this.employeeservice.getList()
    .toPromise()
    .then(
      res=>{
        this.employeelist = res as Employee[]
      },
      err=>{
        console.log(err)
      });
    }

    ondelete(emp){
      console.log(emp);
    }
  }

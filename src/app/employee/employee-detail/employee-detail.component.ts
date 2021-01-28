import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: []
})
export class EmployeeDetailComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void { 
  }

  OnSubmit(form){
      console.log(this.employeeService.employeemodel);
  }

}

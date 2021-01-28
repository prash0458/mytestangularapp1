import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';
import { NgForm } from '@angular/forms';
import { CustomerEmployee } from '../customer-employee';
import { CustomerEmployeeModel } from '../customer-employee.Model';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.css'],
  providers:[CustomerEmployee]
})
export class CustomerdetailComponent implements OnInit {

  customerEmployeemodel: CustomerEmployeeModel;
  constructor(public customerService: CustomerService, public customerEmployee: CustomerEmployee) { }

  ngOnInit(): void {    
   this.customerEmployeemodel = this.customerEmployee.getCustomerEmployee();
   console.log(this.customerEmployeemodel);
  }

  OnSubmit(form: NgForm)
  {
    console.log(form);
    console.log(this.customerService.customermodel);
  }

  insert(customermodel){
    this.customerService.insertCustomer(customermodel);
  }
}

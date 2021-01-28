import { Injectable } from "@angular/core";
import { CustomerService } from "../shared/customer.service";
import { EmployeeService } from "../shared/employee.service";
import { CustomerEmployeeModel } from  '../customer/customer-employee.Model';
import { Customer } from "../model/customer.model";
import { Employee } from "../model/employee.model";

@Injectable()
export class CustomerEmployee {

    customerEmployeeModel: CustomerEmployeeModel = {
        customer:  {
                customerfirstname:"TEST1",
                customerlastname:"TEST2",
                customerid: 52,
                customerage:31
        },
        employee: { 
            firstname: "TEST3",
            lastname:"TEST4",
            age: 45,
            id: 1
        }
    };

    constructor(private customerService: CustomerService, private employeeService: EmployeeService){}

    getCustomerEmployee(){
        return this.customerEmployeeModel;
    }
}

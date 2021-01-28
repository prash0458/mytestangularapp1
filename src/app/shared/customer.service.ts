import { Injectable } from '@angular/core';
import { Customer } from '../model/customer.model';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerlist: Customer[];
  customermodel: Customer =  {
    customerid: 0,
    customerfirstname: "",
    customerlastname: "",
    customerage: 0,
  };

  constructor() {   
   }

   getCustomerList(){
      this.customerlist = [
       {customerid: 0, customerlastname:"TEST lastname 1", customerfirstname:"TEST Firstname 1", customerage:12},
       {customerid: 0, customerlastname:"TEST lastname 2", customerfirstname:"TEST Firstname 2", customerage:27},
       {customerid: 0, customerlastname:"TEST lastname 3", customerfirstname:"TEST Firstname 3", customerage:18},
    ];      

    return of(this.customerlist);
   }

   insertCustomer(customer){
    return this.customerlist.push(customer);
   }
}

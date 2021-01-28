import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { CustomerService  } from '../../shared/customer.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customerlist: Customer[];

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    return this.customerService.getCustomerList()
    .toPromise()
    .then(
      res => { 
        this.customerlist = res as Customer[]
    },
    err=>{
      console.log(err);
    });
  }


  ondelete(customer){
    console.log(customer);
  }
}

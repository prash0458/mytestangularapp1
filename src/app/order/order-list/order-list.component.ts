import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/shared/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orderlist: Order[];
  constructor(private orderservice: OrderService) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist(){
    this.orderservice.getList()
        .toPromise()
        .then(res=>{
          this.orderlist = res as Order[];
        }
      ,err=>{
        console.log(err)  ;
      });
  }

  addorder(order){
    this.orderservice.addtolist(order)
        .toPromise()
        .then(res1=>{
          this.orderlist = res1 as Order[];
        }
      ,err=>{
        console.log(err)  ;
      });
  }

  deleteorder(order){
    this.orderservice.deletefromlist(order)
        .toPromise()
        .then(res1=>{
          this.orderlist = res1 as Order[];
        }
      ,err=>{
        console.log(err)  ;
      });
  }

  ondelete(obj){
    console.log("delete");
    console.log(obj);
    this.deleteorder(obj);
  }
  onadd(obj){
    console.log("add");
    console.log(obj);
    this.addorder(obj);
  }
}

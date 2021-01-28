import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Order } from '../../app/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  orderlist: Order[];

  ordermodel: Order ={
    orderid:0,
    customerid:0 ,
    orderamount:0,
    orderdate:new Date(),
    orderdesc:"", 
    ordername:""
  };

  constructor() { }

  getList(){
    this.orderlist = [
      { orderid:1,customerid:1 ,orderamount:1212.4,orderdate:new Date(2021,0,22),orderdesc:"dell laptop", ordername:"dell orders " },
      { orderid:2,customerid:1 ,orderamount:212.25,orderdate:new Date(2021,1,22),orderdesc:"hp laptop", ordername:"hp orders " },
      { orderid:3,customerid:1 ,orderamount:412.5,orderdate:new Date(2021,2,22),orderdesc:"asus laptop", ordername:"asus orders " },
      { orderid:4,customerid:1 ,orderamount:852.14,orderdate:new Date(2021,3,22),orderdesc:"acer laptop", ordername:"acer orders " }
    ];

    localStorage.setItem("orderlist", JSON.stringify(this.orderlist));
    sessionStorage.setItem("orderlist",JSON.stringify(this.orderlist));

    return of(this.orderlist);
  }

  insertOrder(servicemodel){

    console.log(servicemodel);

    var local = localStorage.getItem("orderlist");
    var session = sessionStorage.getItem("orderlist");

    console.log("============json string==============");
    console.log(local);
    console.log(session);
    console.log("============object==============");
    console.log(JSON.parse(local));
    console.log(JSON.parse(session));

  }

  addtolist(o){
    this.orderlist.push(o)
    

   
    var local = localStorage.getItem("orderlist");
    var session = sessionStorage.getItem("orderlist");

    console.log("============json string local and session==============");
    console.log(local);
    console.log(session);
    console.log("============object local and session==============");
    console.log(JSON.parse(local));
    var obj = JSON.parse(local) as Order[];

    console.log(JSON.parse(session));

    return of(this.orderlist);
  }

  deletefromlist(o){
   const index:number = this.orderlist.indexOf(o);
   if(index !== -1){
    this.orderlist.splice(index,1);    
   }
   return of(this.orderlist);
  }
}

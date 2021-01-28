import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  constructor(public orderservice: OrderService) { }

  ngOnInit(): void {
  }

  onsubmit() {
    console.log(this.orderservice.ordermodel);
  }

}

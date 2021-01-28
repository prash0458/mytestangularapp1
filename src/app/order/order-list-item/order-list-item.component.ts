import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import {Router,Route} from '@angular/router';
import { OrderService } from 'src/app/shared/order.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.css']
})
export class OrderListItemComponent implements OnInit {

  @Input() orderItem:  Order;
  @Output() ouputdeleteEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() ouputaddEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router, private orderservice: OrderService) {  console.log('constructor()');   }

    ngOnChanges(): void{ console.log('ngOnChanges');  }
    ngOnInit(): void {
       console.log('ngOnInit');        
  }

    ngAfterContentInit(): void{ console.log('ngAfterContentInit'); }  
    ngAfterContentChecked(): void{ console.log('ngAfterContentChecked'); }

    ngAfterViewInit(): void{ console.log('ngAfterViewInit'); }     
    ngAfterViewChecked(): void{ console.log('ngAfterViewChecked'); }

    ngOnDestroy():void { console.log('ngOnDestroy');  }

  ondelete(item) {    
      var a = 1/0;
      console.log(a);
      this.ouputdeleteEventEmitter.emit(item);      
      //svar a = b.c;
    }

    onadd(item) {
      this.ouputaddEventEmitter.emit(item);
    }

    getbyid(order) {
      console.log(order);     
      console.log(this.orderItem);
      this.orderservice.ordermodel = this.orderItem;
      this.router.navigateByUrl('orderadd');
    }
  }

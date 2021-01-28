import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Customer } from 'src/app/model/customer.model';

@Component({
  selector: 'app-customerlist-item',
  templateUrl: './customerlist-item.component.html',
  styleUrls: ['./customerlist-item.component.css']
})
export class CustomerlistItemComponent implements OnInit {

  @Input() customerInput: Customer;
  @Output() deleteOutputEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(customer){
    this.deleteOutputEventEmitter.emit(customer);
  }
}

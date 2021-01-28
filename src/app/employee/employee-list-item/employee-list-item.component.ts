import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.css']
})
export class EmployeeListItemComponent implements OnInit {

  @Input() empInput: Employee;
  @Output() deleteoutputeventemitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  delete(emp){
    this.deleteoutputeventemitter.emit(emp);
  }
}

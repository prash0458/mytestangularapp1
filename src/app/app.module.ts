import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { CustomerdetailComponent } from './customer/customerdetail/customerdetail.component';
import { CustomerService } from '../app/shared/customer.service';
import { CustomerlistItemComponent } from './customer/customerlist-item/customerlist-item.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeListItemComponent } from './employee/employee-list-item/employee-list-item.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeService } from '../app/shared/employee.service';
import { HeaderComponent } from './shared/header/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderListItemComponent } from './order/order-list-item/order-list-item.component';
import { BluebackgrounddirectiveDirective } from './shared/bluebackgrounddirective.directive';
import { MyErrorHandler } from '../app/model/MyErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    CustomerdetailComponent,
    CustomerlistItemComponent,
    EmployeeListComponent,
    EmployeeListItemComponent,
    EmployeeDetailComponent,
    HeaderComponent,
    FooterComponent,
    OrderDetailComponent,
    OrderListComponent,
    OrderListItemComponent,
    BluebackgrounddirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService, 
    EmployeeService, 
    {provide: ErrorHandler, useClass: MyErrorHandler
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

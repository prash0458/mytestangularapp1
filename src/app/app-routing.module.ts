import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailComponent } from './customer/customerdetail/customerdetail.component';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderListComponent } from './order/order-list/order-list.component';

const routes: Routes = [
  {path: 'customeradd', component: CustomerdetailComponent},
  {path:'customerlist', component: CustomerlistComponent},
  {path:'employeeadd', component: EmployeeDetailComponent},
  {path:'employeelist', component: EmployeeListComponent},
  {path:'orderadd', component: OrderDetailComponent},
  {path:'orderlist', component: OrderListComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

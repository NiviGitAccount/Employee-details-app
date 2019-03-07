import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import{AddEmployeeComponent} from './add-employee/add-employee.component';
import{DeleteEmployeeComponent} from './delete-employee/delete-employee.component';
import{EditEmployeeComponent} from './edit-employee/edit-employee.component';

 const routes = [{path:'',redirectTo: '/addEmp', pathMatch: 'full'},
{path:'addEmp',component:AddEmployeeComponent},
{path:'editEmp',component:EditEmployeeComponent},
{path:'delEmp',component:DeleteEmployeeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }

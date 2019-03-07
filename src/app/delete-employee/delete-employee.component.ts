import { Component, OnInit } from '@angular/core';
import{DeleteEmployeeService}from './delete-employee.service';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private DeleteEmployeeService:DeleteEmployeeService) { }

  ngOnInit() {
  }
  onSubmit(empData : any){
    this.DeleteEmployeeService.getDataFromServer(empData).subscribe(data=>{
      console.log(data);
    });
  }
}

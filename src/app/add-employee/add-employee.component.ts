import { Component, OnInit } from '@angular/core';
import {AddEmpServiceService} from './add-emp-service.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private addEmpServiceService : AddEmpServiceService) { }

  ngOnInit() {
  }
  onSubmit(empData : any){
    this.addEmpServiceService.getDataFromServer(empData).subscribe(data=>{
      console.log(data);
    });
  }

}

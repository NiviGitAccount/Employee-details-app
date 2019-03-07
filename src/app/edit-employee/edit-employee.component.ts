import { Component, OnInit } from '@angular/core';
import{EditEmployeeService} from './edit-employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private EditEmployeeService:EditEmployeeService) { }

  ngOnInit() {
  }
  onSubmit(empData : any){
    this.EditEmployeeService.getDataFromServer(empData).subscribe(data=>{
      console.log(data);
    });
  }
}

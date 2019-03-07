import { Component, OnInit } from '@angular/core';
import{ListEmpService} from './list-emp.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listEmpService:ListEmpService) { }
   employee:any
    ngOnInit() {
    this.listEmpService.getDataFromServer().subscribe(data=>{
      console.log(data);
      this.employee=data;
    });
  }

}

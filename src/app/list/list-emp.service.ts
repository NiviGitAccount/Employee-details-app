import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ListEmpService {

  jsonData:any;
  requestData = {data : ''};
  
  articleUrl = "http://localhost:3000/listemp";
  constructor(private http:Http) { 
  }
  
  getDataFromServer(): Observable<{data:any}> {
    this.requestData.data="";
    
     let reqHeaders = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: reqHeaders });
      return this.http.post(this.articleUrl,this.requestData,options)
      .pipe(map(this.convertData));
  }
  private convertData(res: Response) {
    console.log(res);
         return res.json();
      }
}

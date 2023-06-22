import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl:string="https://devrunner.co.in/machine_test/index.php/web_api/Users";


  constructor(private httpClient : HttpClient) { 


  }
 

   getDatafromServer(endPoint:string){
    const Url= this.BaseUrl + endPoint;
    this.httpClient.get(Url);
 
   }
   saveDataToServer(endPoint:string, Requestbody:any){
    const Url= this.BaseUrl + endPoint;
    this.httpClient.post(Url, Requestbody);
 
   }
   
  updateData(){


  }

 
   DeleteData(){
 
   }
}

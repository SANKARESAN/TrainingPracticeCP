import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  baseUrl:string="http://localhost:8888";



  constructor(public httpObj:HttpClient) { }
        
  // CODE FOR GET REQUEST
  getRecord(tableName:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}`);
  }

  // CODE FOR DELETE REQUEST 
  deleteRecord(tableName:any, id:any){
    return this.httpObj.delete(`${this.baseUrl}/${tableName}/${id}`);
  }


  // CODE FOR POST REQUEST
  addRecord(tableName:any, body:any){
    return this.httpObj.post(`${this.baseUrl}/${tableName}`,body);
  }
  
  
  // CODE FOR DELETE REQUEST
  getSingleRecord(tableName:any, id:any){
    return this.httpObj.get(`${this.baseUrl}/${tableName}/${id}`);
  }
    
  // CODE FOR UPDATE REQUEST
  updateRecord(tableName:any, id:any, body:any){
    return this.httpObj.put(`${this.baseUrl}/${tableName}/${id}`,body);
  }

}
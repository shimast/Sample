import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Headers} from '@angular/http';
import {RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {

  private baseUrl: string = './assets/getAllCustomer.json';
  constructor(private http:Http) { }

  getCustomers(){

    return this.http.get(this.baseUrl).map(
     (repsonse:Response)=>repsonse.json()
    )
    .catch(this._errorHandler);
  }


  getCustomerById(id){

    return this.http.get(this.baseUrl+id).map(
     (repsonse:Response)=>repsonse.json()
    )
    .catch(this._errorHandler);
  }


  saveCustomer(user){
    return this.http.post(this.baseUrl+'saveCustomer',user).map(
      (repsonse:Response)=>repsonse.json()
     )
     .catch(this._errorHandler);
  }

  deleteCustomer(id){
    return this.http.delete(this.baseUrl + "DeleteCustomer/" + id)
              .map((response:Response) =>  response.json())
              .catch(this._errorHandler)
  }

  _errorHandler(error:Response){
  console.log(error);
  return Observable.throw(error||"Internal Server Error");
  }
 
}

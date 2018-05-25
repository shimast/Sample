import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';
@Injectable()
export class SharedService {

  weatherURL1 = './assets/getAllMovie.json';
  getAllReportURL = "./assets/getAllReports.json";
  weatherURL3 = "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  findMovieURL1 = "http://www.omdbapi.com/?t=";
  findMovieURL2 = "&y=&plot=short&r=json"; 
  currencyURL = "http://api.fixer.io/latest?symbols="; 
  totReqsMade: number = 0;
  taskUrl="https://rkdemotask.herokuapp.com/Tasks/"; 

  public ListReports:any;

  constructor(private _http:Http) { }

  getAllReports(){
   this.totReqsMade=this.totReqsMade+1;
   return this._http.get(this.getAllReportURL)
   .map(response=>{ 
     {return response.json().data};
    })
    .do(data=>console.log(JSON.stringify(data)))
   .catch(error=> Observable.throw(error.json()));
  }

  findMovie(movie){
    this.totReqsMade=this.totReqsMade+1;
    return this._http.get(this.weatherURL1)
    .map(response=>{ 
      {return response.json()};
     })
    .do(data => console.log(JSON.stringify(data)))
    .catch(error=> Observable.throw(error.json()));
  }

  getCurrencyForExcRate(currency){
    this.totReqsMade=this.totReqsMade+1;
    return this._http.get(this.currencyURL + currency)
    .map(response=>{ 
      {return response.json()};
     })
    .catch(error=> Observable.throw(error.json()));
  }

  getAllTasks(){
    return this._http.get(this.taskUrl).map((response:Response)=>response.json())
    .do(data => console.log(JSON.stringify(data)));
  }
}

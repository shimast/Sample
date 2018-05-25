import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
import {Router} from '@angular/router';
import {Task} from './../task';

@Component({
  selector: 'app-task',
  templateUrl: './Task.component.html',
  styles: [`

    .doneStatus{color:blue;}
    .pendingStatus{color:red;}
    .first{background-color:aqua};
    .last{background-color:green};
`]
})
export class TaskComponent implements OnInit {

  currency_id:string="";
  my_result: any;
  title="Task List";

  listOfTasks:Task[]=[];
  constructor(private _sharedService:SharedService,
    private _router:Router) { }

  ngOnInit() {
    this._sharedService.getAllTasks()
      .subscribe(
        ((data:Task[])=> {this.listOfTasks=data;})
      ),
      error=>{
        console.log(error);
      }
  }

  callCurrencyService(){
    this._sharedService.getCurrencyForExcRate(this.currency_id.toUpperCase())
    .subscribe(
      lstResult=>{
       this.my_result=JSON.stringify(lstResult);
      },
      error=>{
        console.log("CurrencyComponent:::callCurrencyService JSON result returns error");
        console.log(error);
      }
    );
  }

  OnClick(){
  this._router.navigateByUrl('/movie');
  }
}

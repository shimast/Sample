import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
import {Router} from '@angular/router';
import {ConfirmDirective} from './../confirm.directive';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  testid: string = "";
  deviceid: string = "";
  testName: string = "";
  deviceName: string = "";
  result: string = "";
  timeStamp: string = "";
 
  public ListReports:any;
  constructor(private _sharedService:SharedService,private router:Router) { }

  ngOnInit() {
    this.callReportService();
  }


  callReportService(){
    this._sharedService.getAllReports()
    .subscribe(
      data=>this.ListReports=data,
      error=>{
        console.log("WeatherComponent:::callWeatherService:: JSON result returns error");
        console.log(error);
      }
    );
  }

  visitRangle(){
    this.router.navigateByUrl('/movie');
  }

  
}

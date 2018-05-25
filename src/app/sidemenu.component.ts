import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: []
})
export class SidemenuComponent implements OnInit {

  constructor(route:ActivatedRoute) { 
    route.params.subscribe(params=>console.log("side menu id parameter",params['id']));
  }

  ngOnInit() {

  }

  listOfCategory:any[]=[{'name':'Development'},{'name':'IT-Software'},{'name':'Civil'}];

}

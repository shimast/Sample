import { Component, OnInit } from '@angular/core';
import {PeopleServiceService} from './people-service.service';
import {Person} from './Person';

@Component({
  selector: 'app-people-list',
  template: `
  <ul *ngFor="let person of people" class="list-group">
  <!-- this is the new syntax for ng-repeat -->
  <li class="list-group-item">NAME: {{person.name}}</li>
    <li class="list-group-item">WEIGHT: {{person.weight}}</li>
    <li class="list-group-item">URL :{{person.url}}</li>
</ul>
<!-- HERE: added this error message -->
<section *ngIf="errorMessage">
  {{errorMessage}}
</section>
  `,
  styles: [],
  providers:[PeopleServiceService]
})
export class PeopleListComponent implements OnInit {

  people: Person[] = [];
  constructor(private _peopleService:PeopleServiceService) { }

  ngOnInit() {
    this._peopleService.getAll().subscribe(p=>this.people=p);
  }

}

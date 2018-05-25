import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Headers} from '@angular/http';
import {RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Person} from './Person';

@Injectable()
export class PeopleServiceService {

  private baseUrl: string = './assets/getAll.json';
  constructor(private http:Http) { }
  data: any[];
 

  getAll():Observable<Person[]>{

   let people$= this.http
    .get(`${this.baseUrl}`,this.getHeaders())
    .map(this.mapPersons)
    return people$;
  }

  save(person: Person) : Observable<Response>{
    return this
      .http
      .put(`${this.baseUrl}${person.id}`, JSON.stringify(person), this.getHeaders());
  }

  private getHeaders(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', 'https://swapi.co/' );
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Origin,Access-Control-Allow-Methods");
    let options = new RequestOptions({ headers: headers });
    return options;
  }

  private mapPersons(response:Response):Person[]{
    let Persons:Person[]=[];
    console.log(response.json());
    this.data=Array.of(response.json());
    let person = <Person>({

      url: this.data[0].url,
      name: this.data[0].name,
      weight: Number.parseInt(this.data[0].mass),
      height: Number.parseInt(this.data[0].height),
    });
    Persons.push(person);
    return Persons;
  }

  private toPerson(r:any[]):Person{

    let person = <Person>({

      url: r[0].url,
      name: r[0].name,
      weight: Number.parseInt(r[0].mass),
      height: Number.parseInt(r[0].height),
    });
    console.log('Parsed person:', person);
    return person;
  }

  private extractId(personData:any){
    let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
    return parseInt(extractedId);
   }
}

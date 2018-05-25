import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
import {Movie} from './movie';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [],
  providers:[SharedService]
})
export class MovieComponent implements OnInit {

  movie_id:string="";
  movie_Title:string="";
  movie_Rated:string="";
  movie_Director:string="";
  movie_Released:string="";
  movie_Actors:string="";
  movie_Plot:string="";
  disable:boolean=true;

  title:string = 'Movie Detail Page';

  public MovieList:Movie[]=[{"movie_Title":'Movie1',"movie_Id":'ID1'},{"movie_Title":'Movie2',"movie_Id":'ID2'}];
  public selectedMovie:string="";

  public options = {
    position: ["right", "top"]
  }
 
  constructor(private _sharedService:SharedService,
    private _service: NotificationsService ) { }

  ngOnInit() {
    this._service.success("SUCCESS",'Page loaded successfully',{position: ["right", "top"]});
  }

  callMovieService(){
    this._sharedService.findMovie(this.movie_id)
    .subscribe(
      lstResult=>{
        this.movie_Title=lstResult["Title"];
        this.movie_Actors=lstResult["Actors"];
        this.movie_Director=lstResult["Director"];
        this.movie_Rated=lstResult["Rated"];
        this.movie_Released=lstResult["Released"];
        this.movie_Plot=lstResult["Plot"];
      }
   ,
      error=>{
        console.log("MovieComponent:::callMovieService:: JSON result returns error");
        console.log(error);
      }
    );
  }

  onMovieSelection(args){

    if(args!=null){
     this.selectedMovie=args.target.value;
     console.log(this.selectedMovie);
     this._service.create("HELLO",'loaded');
     this.callMovieService();
    }
  }
}



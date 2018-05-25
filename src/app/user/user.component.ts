import { Component, OnInit } from '@angular/core';
import {UserService} from './../user/userservice.service';
import {Router} from '@angular/router';
import {DialogService} from 'ng2-bootstrap-modal';
import { dialogComponent } from '../dialog/dialog.component';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private _userService:UserService, private _route:Router,
    private dialogService:DialogService,
  private _notification:NotificationsService) { }

  customers:Array<any>=[];
  errorMessgae:any;
 items:Array<any>;

  ngOnInit() {
    this.getCustomers();
    this.items=[
      {
          "title": "What is Lorem Ipsum?",
          "description": "Lorem Ipsum is ....."
      },
      {
          "title": "Why do we use it?",
          "description": "It is a long established fact that a reader...."
      }   
  ];
  }

  getCustomers(){
    this._userService.getCustomers().subscribe(
      data=>this.customers=data,
      error=>this.errorMessgae=error
    )
  }
  add(){
  this._route.navigate(['forms/add']);
  }

  edit(id){
    this._route.navigate(['forms/add/'+id]);
  }

  delete(id)
  {
    this.dialogService.addDialog(dialogComponent,{
      title:'Confirmation',
      message:'Do you want to delete customer with Id:' + id
    })
    .subscribe((isConfirmed)=>{
      if(isConfirmed) {
        alert('Item Deleted!');
    }
    else {
      this._notification.create('Item Not Deleted!', 'Click to undo...');
    }
    });
  }


}

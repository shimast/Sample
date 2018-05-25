import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './../user/userservice.service';
import {Router} from '@angular/router';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'app-user',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']

})
export class EditUserComponent implements OnInit {

  editUserForm:FormGroup;
  title:string="Add";
  id:number;
  errormessage:string;
  
  
  constructor(private _fb:FormBuilder,
    private _activatedRoute:ActivatedRoute,
    private _service: NotificationsService,
   private _userService:UserService,
  private _route:Router) {
    this.editUserForm=this._fb.group({
     id:0,
     name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
     address:['',[Validators.required]],
     phone:['',[Validators.pattern("[1-9][0-9]{9}")]],
     image:''

    })

    if(this._activatedRoute.snapshot.params["id"]){
      this.id=parseInt(this._activatedRoute.snapshot.params["id"]);
      console.log("passed customer id" +this.id);
    }
   }

  ngOnInit() {

    if(this.id>0){
      this.title="Edit";
    this._userService.getCustomerById(this.id).subscribe(
      resp=>this.editUserForm.setValue(resp),
      error=>this.errormessage=error
    )
    }

  }

  saveUser(){
  this._userService.saveCustomer(this.editUserForm.value).subscribe(
    custid=>{
      this._route.navigate(['customers', {id: custid}]);
    },
    error=>this.errormessage=error
  )

  }

  cancel(){
    this._route.navigate(['forms']);
  }


}

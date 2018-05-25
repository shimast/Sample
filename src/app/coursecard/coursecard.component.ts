import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html'
})
export class CoursecardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  navigate(path){
    this.router.navigate([{outlets:{primary: path, sidemenu:path}}],
       {relativeTo: this.route});
  }
}

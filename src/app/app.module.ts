import { BrowserModule,Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { WeatherComponent } from './weather/weather.component';
import { TaskComponent } from './Task/task.component';
import { MovieComponent } from './movie/movie.component';
import {CONST_ROUTING} from './app.routing';
import {SharedService} from './shared.service';
import { CommonModule}  from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PeopleListComponent } from './people-list.component';
import { PeopleDetailComponent } from './people-detail.component';
import { HttpHeaders } from '@angular/common/http';
import { CourseComponent } from './course/course.component';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { SidemenuComponent } from './sidemenu.component';
import { CoursecategoryComponent } from './coursecard/coursecategory.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './user/editUser.component';
import {UserService} from './user/userservice.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { dialogComponent } from './dialog/dialog.component';
import { HighlightDirective } from './highlight.directive';
import { ConfirmDirective } from './confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    TaskComponent,
    MovieComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    CourseComponent,
    CoursecardComponent,
    SidemenuComponent,
    CoursecategoryComponent,
    UserComponent,
    EditUserComponent,
    dialogComponent,
    HighlightDirective,
    ConfirmDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    CommonModule,
    Ng2PaginationModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BootstrapModalModule.forRoot({container:document.body})
  ],
  entryComponents: [
    dialogComponent
  ],
  providers: [SharedService,UserService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }

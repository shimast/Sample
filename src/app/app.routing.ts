import {Routes,RouterModule} from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TaskComponent } from './Task/task.component';
import { MovieComponent } from './movie/movie.component';
import {CourseComponent} from './course/course.component';
import {CoursecardComponent} from './coursecard/coursecard.component';
import {SidemenuComponent} from './sidemenu.component';
import {CoursecategoryComponent} from './coursecard/coursecategory.component';
import {UserComponent } from './user/user.component';
import {EditUserComponent } from './user/editUser.component';

const MAINMENU_ROUTES:Routes=[
{path:'testReport',component:WeatherComponent},
{path:'movie',component:MovieComponent},
{path:'task',component:TaskComponent},
{path:'course',component:CourseComponent,
children:[  
    {
     path: '',
     component: CoursecardComponent
    },
    {
        path: '',
        outlet: 'sidemenu',
        component: SidemenuComponent
    },
    {
        path: ':id',
        component: CoursecategoryComponent
    },
    {
        path: ':id',
        outlet: 'sidemenu',
        component: SidemenuComponent
    },

]},
{path:'forms',component:UserComponent},
{path:'forms/add',component:EditUserComponent},
{path:'forms/add/:id',component:EditUserComponent},
{path:'',redirectTo: 'testReport', pathMatch: 'full'},
{path:'**',redirectTo: 'testReport', pathMatch: 'full'}];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);


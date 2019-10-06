import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { SprintComponent } from './sprint/sprint.component';
import { TutorialComponent } from './tutorial/tutorial.component';


const routes: Routes = [ 
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'sprint',
    component: SprintComponent
  },
  {
    path: 'tutorial',
    component: TutorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

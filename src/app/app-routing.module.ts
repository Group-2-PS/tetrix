import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { SprintComponent } from './sprint/sprint.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ManualComponent } from './manual/manual.component';
import { AgileModule } from './agile/agile.module';
import { AgileComponent } from './agile/agile/agile.component';


const routes: Routes = [ 
  {
    path: '',
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
  },
  {
    path: 'manual',
    component: ManualComponent
  },
  {
    path: 'agile',
    component: AgileComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

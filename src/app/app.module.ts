import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SprintComponent } from './sprint/sprint.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ManualComponent } from './manual/manual.component';
import { ClickHereComponent } from './click-here/click-here.component';
import { ClickGithubComponent } from './click-github/click-github.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    NavBarComponent,
    HomeComponent,
    SprintComponent,
    TutorialComponent,
    FooterComponent,
    ManualComponent,
    ClickHereComponent,
    ClickGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

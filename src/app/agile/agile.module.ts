import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NikoNikoComponent } from './niko-niko/niko-niko.component';
import { AgileComponent } from './agile/agile.component';
import { KudoComponent } from './kudo/kudo.component';
import { StarfishComponent } from './starfish/starfish.component';
import { SailboatComponent } from './sailboat/sailboat.component';
import { PersonalMapComponent } from './personal-map/personal-map.component';
import { WorkExpoComponent } from './work-expo/work-expo.component';
import { MotivationalFactorsComponent } from './motivational-factors/motivational-factors.component';
import { UserStoriesMappingComponent } from './user-stories-mapping/user-stories-mapping.component';
import { DelegationBoardComponent } from './delegation-board/delegation-board.component';

@NgModule({
  declarations: [NikoNikoComponent, AgileComponent, KudoComponent, StarfishComponent, SailboatComponent, PersonalMapComponent, WorkExpoComponent, MotivationalFactorsComponent, UserStoriesMappingComponent, DelegationBoardComponent],
  imports: [
    CommonModule
  ]
})
export class AgileModule { }

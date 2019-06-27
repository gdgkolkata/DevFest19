import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { DeferLoadDirective } from './directives/defer-load.directive';

import { SpeakerComponent } from './components/speaker/speaker.component';
import { FilterComponent } from './components/filter/filter.component';
import { SpeakerPopupComponent } from './components/speaker-popup/speaker-popup.component';
import { RoundImgComponent } from './components/round-img/round-img.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@NgModule({
  declarations: [
    DeferLoadDirective,
    SpeakerComponent,
    FilterComponent,
    SpeakerPopupComponent,
    RoundImgComponent,
    TeamMemberComponent
  ],
  entryComponents: [SpeakerPopupComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    SpeakerComponent,
    FilterComponent,
    TeamMemberComponent
  ]
})
export class SharedModule {}

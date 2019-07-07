import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { DeferLoadDirective } from './directives/defer-load.directive';

import { TimeDiffPipe } from './pipes/time-diff.pipe';

import { SpeakerComponent } from './components/speaker/speaker.component';
import { FilterComponent } from './components/filter/filter.component';
import { RoundImgComponent } from './components/round-img/round-img.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { TimeSlotComponent } from './components/time-slot/time-slot.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';

import { SpeakerPopupComponent } from './components/speaker-popup/speaker-popup.component';
import { SessionPopupComponent } from './components/session-popup/session-popup.component';

@NgModule({
  declarations: [
    DeferLoadDirective,
    TimeDiffPipe,
    SpeakerComponent,
    FilterComponent,
    SpeakerPopupComponent,
    RoundImgComponent,
    TeamMemberComponent,
    TimeSlotComponent,
    SessionPopupComponent,
    VolunteerComponent
  ],
  entryComponents: [SpeakerPopupComponent, SessionPopupComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    SpeakerComponent,
    FilterComponent,
    TeamMemberComponent,
    TimeSlotComponent,
    VolunteerComponent
  ]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { DeferLoadDirective } from './directives/defer-load.directive';

import { SpeakerComponent } from './components/speaker/speaker.component';

@NgModule({
  declarations: [SpeakerComponent, DeferLoadDirective],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, SpeakerComponent]
})
export class SharedModule {}

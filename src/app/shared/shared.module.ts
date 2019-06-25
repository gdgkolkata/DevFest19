import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';

import { DeferLoadDirective } from './directives/defer-load.directive';

import { SpeakerComponent } from './components/speaker/speaker.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [SpeakerComponent, DeferLoadDirective, FilterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, SpeakerComponent, FilterComponent]
})
export class SharedModule {}

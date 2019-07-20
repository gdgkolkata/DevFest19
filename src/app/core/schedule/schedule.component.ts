import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/shared/services/dynamic-script-loader.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements AfterViewInit {
  isLoading = true;
  @ViewChild('sessionizeGrid', { static: false }) sessionizeGridEl: ElementRef;
  sessionizeGrid: HTMLDivElement;

  constructor(private dynamicScriptLoader: DynamicScriptLoaderService) {}

  ngAfterViewInit() {
    this.sessionizeGrid = this.sessionizeGridEl.nativeElement;
    this.dynamicScriptLoader
      .load('grid', this.sessionizeGrid)
      .then(_ => (this.isLoading = false))
      .catch(console.log);
  }
}

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DynamicScriptLoaderService } from 'src/app/shared/services/dynamic-script-loader.service';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements AfterViewInit {
  @ViewChild('sessionizeGrid', { static: false }) sessionizeGridEl: ElementRef;
  sessionizeGrid: HTMLDivElement;

  constructor(
    private dynamicScriptLoader: DynamicScriptLoaderService,
    private appService: AppService
  ) {}

  ngAfterViewInit() {
    this.sessionizeGrid = this.sessionizeGridEl.nativeElement;
    this.sessionize_load();
    this.dynamicScriptLoader
      .load('grid', this.sessionizeGrid)
      .then()
      .catch(console.log);
  }

  private sessionize_load() {
    this.appService
      .getSchedule()
      .subscribe(data => (this.sessionizeGrid.innerHTML = data));
  }
}

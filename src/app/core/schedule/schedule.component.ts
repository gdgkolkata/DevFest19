import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  programDate = '2019-09-01';
  constructor() {}

  ngOnInit() {}

  onFiltersUpdated(filters: { tags: string[]; complexities: string[] }) {
    console.log(filters);
  }
}

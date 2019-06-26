import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule, TimeSlot } from 'src/app/shared/interfaces/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  programDate = '2019-09-01';
  slots: TimeSlot[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((schedules: { schedule: Schedule[] }) => {
      console.log(schedules);
      this.slots = schedules.schedule[0].timeSlots.map(item => ({
        ...item,
        slotStart: item.slotStart.substring(0, item.slotStart.length - 3)
      }));
    });
  }

  onFiltersUpdated(filters: { tags: string[]; complexities: string[] }) {
    console.log(filters);
  }
}

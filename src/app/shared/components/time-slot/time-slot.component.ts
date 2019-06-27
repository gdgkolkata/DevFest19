import { Component, OnInit, Input } from '@angular/core';
import { TimeSlot } from '../../interfaces/schedule';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {
  @Input() timeSlot: TimeSlot;

  constructor() {}

  ngOnInit() {
    const limit = 100;
    this.timeSlot.rooms.forEach(room => {
      room.session.descriptionTruncated =
        room.session.description && room.session.description.length > limit
          ? `${room.session.description.substr(0, limit).trim()}...`
          : room.session.description;
    });
  }
}

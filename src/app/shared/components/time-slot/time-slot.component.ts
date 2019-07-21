import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimeSlot, SessionElement } from '../../interfaces/schedule';
import { SessionPopupComponent } from '../session-popup/session-popup.component';

@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {
  @Input() timeSlot: TimeSlot;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const limit = 100;
    this.timeSlot.rooms.forEach(room => {
      room.session.descriptionTruncated =
        room.session.description && room.session.description.length > limit
          ? `${room.session.description.substr(0, limit).trim()}...`
          : room.session.description;
    });
  }

  openTimeSlotPopup(session: SessionElement) {
    this.dialog.open(SessionPopupComponent, {
      data: session
    });
  }
}

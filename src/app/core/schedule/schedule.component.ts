import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppService } from 'src/app/shared/services/app.service';
import { Schedule } from 'src/app/shared/interfaces/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedule$: Observable<Schedule[]>;
  isLoading: boolean;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isLoading = true;
    this.schedule$ = this.appService
      .getSchedule()
      .pipe(finalize(() => (this.isLoading = false)));
  }
}

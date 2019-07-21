import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppService } from 'src/app/shared/services/app.service';
import { Speaker } from 'src/app/shared/interfaces/speaker';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers$: Observable<Speaker[]>;
  isLoading: boolean;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isLoading = true;
    this.speakers$ = this.appService
      .getSpeakers()
      .pipe(finalize(() => (this.isLoading = false)));
  }
}

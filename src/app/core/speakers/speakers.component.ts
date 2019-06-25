import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';
import { Speaker } from 'src/app/shared/interfaces/speaker';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers$: Observable<Speaker[]>;
  isLoading: boolean;
  filters: string[] = ['Cloud', 'Android', 'Web'];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isLoading = true;
    this.speakers$ = this.appService
      .getSpeakers()
      .pipe(finalize(() => (this.isLoading = false)));
  }

  removeFilter(index: number) {
    this.filters.splice(index, 1);
  }

  clearAll() {
    this.filters = [];
  }
}

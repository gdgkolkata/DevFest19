import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppService } from 'src/app/shared/services/app.service';
import { Speaker } from 'src/app/shared/interfaces/speaker';

interface Filter {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers$: Observable<Speaker[]>;
  isLoading: boolean;
  isFilterPopup: boolean;
  filters: Filter[] = [
    { name: 'Cloud', selected: false },
    { name: 'Android', selected: false },
    { name: 'Web', selected: false }
  ];
  filters$ = new BehaviorSubject<Filter[]>([]);

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.isLoading = true;
    this.speakers$ = this.appService
      .getSpeakers()
      .pipe(finalize(() => (this.isLoading = false)));
  }

  toggleFilterPopup() {
    this.isFilterPopup = !this.isFilterPopup;
  }

  private triggerFilterChanges() {
    this.filters$.next(this.filters.filter(x => x.selected));
  }

  clearAll() {
    this.isFilterPopup = false;
    this.filters.forEach(filter => (filter.selected = false));
    this.triggerFilterChanges();
  }

  onFilterToggle(filterName: string) {
    const index = this.filters.findIndex(x => x.name === filterName);
    this.filters[index].selected = !this.filters[index].selected;
    this.triggerFilterChanges();
  }
}

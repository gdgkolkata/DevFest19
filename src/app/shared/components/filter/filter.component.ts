import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fade } from '../../animations/animations';

interface Filter {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [fade]
})
export class FilterComponent {
  // isFilterOptionsVisible = true;
  // isChipSelectable = false;
  // @Input() tags = [
  //   { name: 'Web', selected: false },
  //   { name: 'Mobile', selected: false },
  //   { name: 'Cloud', selected: false },
  //   { name: 'IOT', selected: false }
  // ];
  // @Input() complexities = [{ name: 'Beginner', selected: false }, { name: 'Intermediate', selected: false }];
  // @Output() filters = new EventEmitter<{ tags: string[]; complexities: string[] }>();
  // constructor() {}

  // ngOnInit() {}

  // onChipClick(type: 'tags' | 'complexity', item: { name: string; selected: boolean }) {
  //   if (type === 'tags') {
  //     this.tags = this.tags.map(tag => ({
  //       ...tag,
  //       selected: tag.name === item.name ? !tag.selected : tag.selected
  //     }));
  //   } else if (type === 'complexity') {
  //     this.complexities = this.complexities.map(complexity => ({
  //       ...complexity,
  //       selected: complexity.name === item.name ? !complexity.selected : complexity.selected
  //     }));
  //   }
  //   this.filters.emit({
  //     tags: this.tags.filter(tag => tag.selected).map(tag => tag.name),
  //     complexities: this.complexities.filter(complexity => complexity.selected).map(complexity => complexity.name)
  //   });
  // }
  @Input() filters: Filter[] = [
    { name: 'Cloud', selected: false },
    { name: 'Android', selected: false },
    { name: 'Web', selected: false }
  ];
  @Output() filterChange = new EventEmitter<string[]>();
  filters$ = new BehaviorSubject<Filter[]>([]);
  isFilterPopup: boolean;

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

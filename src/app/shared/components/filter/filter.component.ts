import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  isFilterOptionsVisible = true;
  isChipSelectable = false;
  @Input() tags = [
    { name: 'Web', selected: false },
    { name: 'Mobile', selected: false },
    { name: 'Cloud', selected: false },
    { name: 'IOT', selected: false }
  ];
  @Input() complexities = [{ name: 'Beginner', selected: false }, { name: 'Intermediate', selected: false }];
  @Output() filters = new EventEmitter<{ tags: string[]; complexities: string[] }>();
  constructor() {}

  ngOnInit() {}

  onChipClick(type: 'tags' | 'complexity', item: { name: string; selected: boolean }) {
    if (type === 'tags') {
      this.tags = this.tags.map(tag => ({
        ...tag,
        selected: tag.name === item.name ? !tag.selected : tag.selected
      }));
    } else if (type === 'complexity') {
      this.complexities = this.complexities.map(complexity => ({
        ...complexity,
        selected: complexity.name === item.name ? !complexity.selected : complexity.selected
      }));
    }
    this.filters.emit({
      tags: this.tags.filter(tag => tag.selected).map(tag => tag.name),
      complexities: this.complexities.filter(complexity => complexity.selected).map(complexity => complexity.name)
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { fade } from '../../animations/animations';

@Component({
  selector: 'app-round-img',
  templateUrl: './round-img.component.html',
  styleUrls: ['./round-img.component.scss'],
  animations: [fade]
})
export class RoundImgComponent implements OnInit {
  @Input() img: string;
  showImg: boolean;

  constructor() { }

  ngOnInit() {
  }

}

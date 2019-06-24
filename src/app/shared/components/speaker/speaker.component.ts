import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from '../../interfaces/speaker';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss']
})
export class SpeakerComponent implements OnInit {
  @Input() speaker: Speaker;

  constructor() {}

  ngOnInit() {
  }
}

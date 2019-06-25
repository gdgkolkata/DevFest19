import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from '../../interfaces/speaker';
import { fade } from '../../animations/animations';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.scss'],
  animations: [fade]
})
export class SpeakerComponent implements OnInit {
  @Input() speaker: Speaker;
  showImg: boolean;

  ngOnInit() {
    const limit = 100;
    if (this.speaker.bio.length > limit) {
      this.speaker.bio = `${this.speaker.bio.substr(0, limit).trim()}...`;
    }
  }

  loadImg() {
    this.showImg = true;
  }
}
